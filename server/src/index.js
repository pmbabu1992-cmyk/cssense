require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

// Swagger
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require('./config/swagger');

const app = express();
app.disable('x-powered-by');

// Body parser
app.use(express.json({ limit: '1mb' }));

// CORS allow-list from .env (or allow all if not set)
const originList = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const corsOptions = originList.length
  ? {
      origin(origin, cb) {
        // Allow REST tools (no Origin) and allow-listed origins
        if (!origin || originList.includes(origin)) return cb(null, true);
        return cb(new Error('Not allowed by CORS'));
      },
      credentials: true,
      optionsSuccessStatus: 204
    }
  : { credentials: true };

app.use(cors());

// Health
app.get('/api/health', (_req, res) =>
  res.json({
    ok: true,
    env: process.env.NODE_ENV || 'development',
    ts: new Date().toISOString()
  })
);

// Swagger toggle (hide in prod unless explicitly enabled)
const enableSwagger =
  process.env.SWAGGER_ENABLED === 'true' && (process.env.NODE_ENV || 'development') !== 'production';

if (enableSwagger) {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
  app.get('/api/docs.json', (_req, res) => res.json(swaggerSpec));
}

// Root: redirect to docs (dev) or show status (prod)
app.get('/', (req, res) => {
  if (enableSwagger) return res.redirect(302, '/api/docs');
  return res.json({
    message: 'API is running',
    env: process.env.NODE_ENV || 'development',
    health: '/api/health',
    docs: null
  });
});

// Routes
app.use('/api/alerts',       require('./modules/alerts/alerts.routes'));
app.use('/api/assets',       require('./modules/assets/assets.routes'));
app.use('/api/audit-logs',   require('./modules/auditLogs/auditLogs.routes'));
app.use('/api/dashboards',   require('./modules/dashboards/dashboards.routes'));
app.use('/api/devices',      require('./modules/devices/devices.routes'));
app.use('/api/iot-data',     require('./modules/iotData/iotData.routes'));
app.use('/api/organizations',require('./modules/organizations/organizations.routes'));
app.use('/api/profiles',     require('./modules/profiles/profiles.routes'));
app.use('/api/sensor-data',  require('./modules/sensorData/sensorData.routes'));
app.use('/api/sensordatas',  require('./modules/sensorDatas/sensorDatas.routes'));
app.use('/api/telemetry',    require('./modules/telemetry/telemetry.routes'));
app.use('/api/users',        require('./modules/users/users.routes'));
app.use('/api/widgets',      require('./modules/widgets/widgets.routes'));

// 404 handler
app.use((req, res, _next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Central error handler
app.use((err, _req, res, _next) => {
  if (err && (err.message === 'Not allowed by CORS' || err.name === 'CorsError')) {
    return res.status(403).json({ message: err.message });
  }
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = Number(process.env.PORT) || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      const base = `http://localhost:${PORT}`;
      const docs = enableSwagger ? `\n📖 Swagger: ${base}/api/docs` : '';
      console.log(`🚀 Server running at ${base}${docs}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error:', err);
    process.exit(1);
  });

module.exports = app;
