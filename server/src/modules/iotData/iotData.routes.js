/**
 * @openapi
 * tags:
 *   - name: "IoT Data"
 *     description: "IoT data operations (collection: iot-data)"
 *
 * /api/iot-data:
 *   get:
 *     summary: List IoT data
 *     tags: ["IoT Data"]
 *     responses:
 *       200:
 *         description: OK
 *   post:
 *     summary: Create IoT record
 *     tags: ["IoT Data"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IotData'
 *     responses:
 *       201:
 *         description: Created
 *
 * /api/iot-data/{id}:
 *   get:
 *     summary: Get IoT record
 *     tags: ["IoT Data"]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 *   put:
 *     summary: Update IoT record
 *     tags: ["IoT Data"]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IotData'
 *     responses:
 *       200:
 *         description: Updated
 *       404:
 *         description: Not found
 *   delete:
 *     summary: Delete IoT record
 *     tags: ["IoT Data"]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: Not found
 */
const router = require('express').Router();
const Model = require('./iotData.model');
const Repo = require('./iotData.repo');
const Service = require('./iotData.service');
const Controller = require('./iotData.controller');
const v = require('./iotData.validators');

const ctrl = new Controller(new Service(new Repo(Model)));
router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', v.validateCreate, ctrl.create);
router.put('/:id', v.validateUpdate, ctrl.update);
router.delete('/:id', ctrl.remove);
module.exports = router;
