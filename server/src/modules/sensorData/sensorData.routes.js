/**
 * @openapi
 * tags:
 *   - name: "Sensor Data"
 *     description: "SensorData (collection: sensordata)"
 *
 * /api/sensor-data:
 *   get:
 *     summary: List sensor data
 *     tags: ["Sensor Data"]
 *     responses:
 *       200:
 *         description: OK
 *   post:
 *     summary: Create sensor data
 *     tags: ["Sensor Data"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorData'
 *     responses:
 *       201:
 *         description: Created
 *
 * /api/sensor-data/{id}:
 *   get:
 *     summary: Get sensor data
 *     tags: ["Sensor Data"]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 *   put:
 *     summary: Update sensor data
 *     tags: ["Sensor Data"]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorData'
 *     responses:
 *       200:
 *         description: Updated
 *       404:
 *         description: Not found
 *   delete:
 *     summary: Delete sensor data
 *     tags: ["Sensor Data"]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: Not found
 */
const router = require('express').Router();
const Model = require('./sensorData.model');
const Repo = require('./sensorData.repo');
const Service = require('./sensorData.service');
const Controller = require('./sensorData.controller');
const v = require('./sensorData.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create);
router.put('/:id', v.validateUpdate, ctrl.update);
router.delete('/:id', ctrl.remove);
module.exports = router;
