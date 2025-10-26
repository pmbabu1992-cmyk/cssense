/**
 * @openapi
 * tags:
 *   - name: Organizations
 *     description: Organization operations
 *
 * /api/organizations:
 *   get:  { summary: List organizations,  tags: [Organizations], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create organization
 *     tags: [Organizations]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Organization' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/organizations/{id}:
 *   get:    { summary: Get organization, tags: [Organizations], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update organization
 *     tags: [Organizations]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Organization' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete organization, tags: [Organizations], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Model = require('./organization.model');
const Repo = require('./organizations.repo');
const Service = require('./organizations.service');
const Controller = require('./organizations.controller');
const v = require('./organizations.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list); router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create); router.put('/:id', v.validateUpdate, ctrl.update); router.delete('/:id', ctrl.remove);
module.exports = router;
