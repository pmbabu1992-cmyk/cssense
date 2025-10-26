/**
 * @openapi
 * tags:
 *   - name: "SensorDatas"
 *     description: "SensorDatas (collection: sensordatas)"
 *
 * /api/sensordatas:
 *   get:
 *     summary: List sensordatas
 *     tags: ["SensorDatas"]
 *     responses:
 *       200:
 *         description: OK
 *   post:
 *     summary: Create sensordatas record
 *     tags: ["SensorDatas"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorDatas'
 *     responses:
 *       201:
 *         description: Created
 *
 * /api/sensordatas/{id}:
 *   get:
 *     summary: Get sensordatas record
 *     tags: ["SensorDatas"]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 *   put:
 *     summary: Update sensordatas record
 *     tags: ["SensorDatas"]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorDatas'
 *     responses:
 *       200:
 *         description: Updated
 *       404:
 *         description: Not found
 *   delete:
 *     summary: Delete sensordatas record
 *     tags: ["SensorDatas"]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: Not found
 */
const router = require('express').Router();
const Model = require('./sensorDatas.model');
const Repo = require('./sensorDatas.repo');
const Service = require('./sensorDatas.service');
const Controller = require('./sensorDatas.controller');
const v = require('./sensorDatas.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create);
router.put('/:id', v.validateUpdate, ctrl.update);
router.delete('/:id', ctrl.remove);
module.exports = router;
