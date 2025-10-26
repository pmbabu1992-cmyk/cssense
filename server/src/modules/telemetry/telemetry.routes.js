/**
 * @openapi
 * tags:
 *   - name: Telemetry
 *     description: Telemetry operations
 *
 * /api/telemetry:
 *   get:  { summary: List telemetry,  tags: [Telemetry], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create telemetry document
 *     tags: [Telemetry]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/TelemetryData' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/telemetry/{id}:
 *   get:    { summary: Get telemetry doc, tags: [Telemetry], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update telemetry doc
 *     tags: [Telemetry]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/TelemetryData' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete telemetry doc, tags: [Telemetry], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Model = require('./telemetryData.model');
const Repo = require('./telemetry.repo');
const Service = require('./telemetry.service');
const Controller = require('./telemetry.controller');
const v = require('./telemetry.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list); router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create); router.put('/:id', v.validateUpdate, ctrl.update); router.delete('/:id', ctrl.remove);
module.exports = router;
