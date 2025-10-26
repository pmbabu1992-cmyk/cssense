/**
 * @openapi
 * tags:
 *   - name: Assets
 *     description: Asset operations
 *
 * /api/assets:
 *   get:  { summary: List assets,  tags: [Assets], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create asset
 *     tags: [Assets]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Asset' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/assets/{id}:
 *   get:    { summary: Get asset,    tags: [Assets], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update asset
 *     tags: [Assets]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Asset' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete asset, tags: [Assets], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Model = require('./asset.model');
const Repo = require('./assets.repo');
const Service = require('./assets.service');
const Controller = require('./assets.controller');
const v = require('./assets.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list); router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create); router.put('/:id', v.validateUpdate, ctrl.update); router.delete('/:id', ctrl.remove);
module.exports = router;
