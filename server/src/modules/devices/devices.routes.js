/**
 * @openapi
 * tags:
 *   - name: Devices
 *     description: Device operations
 *
 * /api/devices:
 *   get:  { summary: List devices,  tags: [Devices], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create device
 *     tags: [Devices]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Device' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/devices/{id}:
 *   get:    { summary: Get device,    tags: [Devices], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update device
 *     tags: [Devices]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Device' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete device, tags: [Devices], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Model = require('./device.model');
const Repo = require('./devices.repo');
const Service = require('./devices.service');
const Controller = require('./devices.controller');
const v = require('./devices.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list); router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create); router.put('/:id', v.validateUpdate, ctrl.update); router.delete('/:id', ctrl.remove);
module.exports = router;
