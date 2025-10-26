/**
 * @openapi
 * tags:
 *   - name: Audit Logs
 *     description: Audit log operations
 *
 * /api/audit-logs:
 *   get:  { summary: List logs,  tags: [Audit Logs], responses: { 200: { description: 'OK' } } }
 *   post:
 *     summary: Create log
 *     tags: [Audit Logs]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/AuditLog' } } } }
 *     responses: { 201: { description: 'Created' } }
 *
 * /api/audit-logs/{id}:
 *   get:    { summary: Get log,    tags: [Audit Logs], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'OK' }, 404: { description: 'Not found' } } }
 *   put:
 *     summary: Update log
 *     tags: [Audit Logs]
 *     parameters: [ { $ref: '#/components/parameters/idParam' } ]
 *     requestBody: { required: true, content: { application/json: { schema: { $ref: '#/components/schemas/AuditLog' } } } }
 *     responses: { 200: { description: 'Updated' }, 404: { description: 'Not found' } }
 *   delete: { summary: Delete log, tags: [Audit Logs], parameters: [ { $ref: '#/components/parameters/idParam' } ], responses: { 200: { description: 'Deleted' }, 404: { description: 'Not found' } } }
 */
const router = require('express').Router();
const Model = require('./auditLog.model');
const Repo = require('./auditLogs.repo');
const Service = require('./auditLogs.service');
const Controller = require('./auditLogs.controller');
const v = require('./auditLogs.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list); router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create); router.put('/:id', v.validateUpdate, ctrl.update); router.delete('/:id', ctrl.remove);
module.exports = router;
