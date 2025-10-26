/**
 * @openapi
 * tags:
 *   - name: Widgets
 *     description: Widget operations
 *
 * /api/widgets:
 *   get:  { summary: List widgets,  tags: [Widgets], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create widget
 *     tags: [Widgets]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Widget' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/widgets/{id}:
 *   get:    { summary: Get widget, tags: [Widgets], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update widget
 *     tags: [Widgets]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Widget' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete widget, tags: [Widgets], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Model = require('./widget.model');
const Repo = require('./widgets.repo');
const Service = require('./widgets.service');
const Controller = require('./widgets.controller');
const v = require('./widgets.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list); router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create); router.put('/:id', v.validateUpdate, ctrl.update); router.delete('/:id', ctrl.remove);
module.exports = router;
