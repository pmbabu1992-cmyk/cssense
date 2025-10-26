const swaggerJsdoc = require('swagger-jsdoc');

const port = process.env.PORT || 5000;
const serverUrl = process.env.SWAGGER_SERVER_URL || `http://localhost:${port}`;

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'CSSense API',
      version: '1.0.0',
      description: 'CRUD API for organizations, devices, telemetry, etc.'
    },
    servers: [{ url: serverUrl }],
    components: {
      parameters: {
        idParam: {
          in: 'path',
          name: 'id',
          required: true,
          schema: { type: 'string' },
          description: 'MongoDB ObjectId'
        }
      },
      schemas: {
        Organization: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, name: { type: 'string' }, slug: { type: 'string' }, contactEmail: { type: 'string' },
            isActive: { type: 'boolean' }, meta: {}, createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, name: { type: 'string' }, email: { type: 'string' }, role: { type: 'string' },
            org: { type: 'string' }, status: { type: 'string' }, profile: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Profile: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, user: { type: 'string' }, phone: { type: 'string' }, avatarUrl: { type: 'string' }, bio: { type: 'string' },
            social: { type: 'object', additionalProperties: { type: 'string' } },
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Device: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, name: { type: 'string' }, deviceId: { type: 'string' }, org: { type: 'string' },
            status: { type: 'string' },
            location: { type: 'object', properties: { lat: { type: 'number' }, lng: { type: 'number' }, address: { type: 'string' } } },
            metadata: {}, createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Asset: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, name: { type: 'string' }, type: { type: 'string' }, org: { type: 'string' }, device: { type: 'string' },
            metadata: {}, createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Dashboard: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, name: { type: 'string' }, org: { type: 'string' }, isDefault: { type: 'boolean' }, layout: {},
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Widget: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, name: { type: 'string' }, type: { type: 'string' }, org: { type: 'string' }, dashboard: { type: 'string' }, config: {},
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Alert: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, org: { type: 'string' }, device: { type: 'string' }, type: { type: 'string' },
            severity: { type: 'string' }, message: { type: 'string' }, isActive: { type: 'boolean' },
            triggeredAt: { type: 'string', format: 'date-time' }, resolvedAt: { type: 'string', format: 'date-time' },
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        AuditLog: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, action: { type: 'string' }, actor: { type: 'string' }, entityType: { type: 'string' }, entityId: { type: 'string' },
            org: { type: 'string' }, ip: { type: 'string' }, meta: {}, ts: { type: 'string', format: 'date-time' },
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        TelemetryData: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, device: { type: 'string' }, ts: { type: 'string', format: 'date-time' }, payload: {}, org: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        SensorData: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, device: { type: 'string' }, sensorType: { type: 'string' }, ts: { type: 'string', format: 'date-time' },
            value: { type: 'number' }, unit: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        SensorDatas: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, device: { type: 'string' }, sensorType: { type: 'string' }, ts: { type: 'string', format: 'date-time' },
            value: { type: 'number' }, unit: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        IotData: {
          type: 'object',
          properties: {
            _id: { type: 'string' }, device: { type: 'string' }, topic: { type: 'string' }, ts: { type: 'string', format: 'date-time' }, data: {},
            createdAt: { type: 'string', format: 'date-time' }, updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Error: { type: 'object', properties: { message: { type: 'string' } } }
      }
    }
  },

  // IMPORTANT: also scan module route files
  apis: [
    'src/routes/*.js',
    'src/modules/**/*.routes.js'
  ]
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = { swaggerSpec };
