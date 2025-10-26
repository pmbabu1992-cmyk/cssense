/**
 * @openapi
 * tags:
 *   - name: Dashboards
 *     description: Dashboard operations
 *
 * /api/dashboards:
 *   get:  { summary: List dashboards,  tags: [Dashboards], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create dashboard
 *     tags: [Dashboards]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Dashboard' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/dashboards/{id}:
 *   get:    { summary: Get dashboard,    tags: [Dashboards], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update dashboard
 *     tags: [Dashboards]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Dashboard' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete dashboard, tags: [Dashboards], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Model = require('./dashboard.model');
const Repo = require('./dashboards.repo');
const Service = require('./dashboards.service');
const Controller = require('./dashboards.controller');
const v = require('./dashboards.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list); router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create); router.put('/:id', v.validateUpdate, ctrl.update); router.delete('/:id', ctrl.remove);
module.exports = router;
