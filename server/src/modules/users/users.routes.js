/**
 * @openapi
 * tags:
 *   - name: Users
 *     description: User operations
 *
 * /api/users:
 *   get:  { summary: List users,  tags: [Users], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create user
 *     tags: [Users]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/User' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/users/{id}:
 *   get:    { summary: Get user, tags: [Users], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/User' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete user, tags: [Users], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Model = require('./user.model');
const Repo = require('./users.repo');
const Service = require('./users.service');
const Controller = require('./users.controller');
const v = require('./users.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list); router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create); router.put('/:id', v.validateUpdate, ctrl.update); router.delete('/:id', ctrl.remove);
module.exports = router;
