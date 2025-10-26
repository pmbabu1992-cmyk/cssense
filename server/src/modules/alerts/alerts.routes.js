/**
 * @openapi
 * tags:
 *   - name: Alerts
 *     description: Alert operations
 *
 * /api/alerts:
 *   get:  { summary: List alerts,  tags: [Alerts], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create alert
 *     tags: [Alerts]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Alert' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/alerts/{id}:
 *   get:    { summary: Get alert,    tags: [Alerts], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update alert
 *     tags: [Alerts]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Alert' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete alert, tags: [Alerts], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Alert = require('./alert.model');
const Repo = require('./alerts.repo');
const Service = require('./alerts.service');
const Controller = require('./alerts.controller');
const v = require('./alerts.validators');

const ctrl = new Controller(new Service(new Repo(Alert)));
router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create);
router.put('/:id', v.validateUpdate, ctrl.update);
router.delete('/:id', ctrl.remove);
module.exports = router;
