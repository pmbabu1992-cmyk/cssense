/**
 * @openapi
 * tags:
 *   - name: Profiles
 *     description: Profile operations
 *
 * /api/profiles:
 *   get:  { summary: List profiles,  tags: [Profiles], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create profile
 *     tags: [Profiles]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Profile' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/profiles/{id}:
 *   get:    { summary: Get profile, tags: [Profiles], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update profile
 *     tags: [Profiles]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/Profile' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete profile, tags: [Profiles], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Model = require('./profile.model');
const Repo = require('./profiles.repo');
const Service = require('./profiles.service');
const Controller = require('./profiles.controller');
const v = require('./profiles.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list); router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create); router.put('/:id', v.validateUpdate, ctrl.update); router.delete('/:id', ctrl.remove);
module.exports = router;
