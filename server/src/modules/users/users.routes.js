/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated MongoDB ID
 *           example: 507f1f77bcf86cd799439011
 *         username:
 *           type: string
 *           description: Unique username
 *           example: johndoe
 *         email:
 *           type: string
 *           format: email
 *           description: Unique email address
 *           example: john.doe@example.com
 *         password:
 *           type: string
 *           description: User password (auto-generated if not provided)
 *           minLength: 6
 *           example: SecurePass123
 *         name:
 *           type: string
 *           description: Full name of the user
 *           example: John Doe
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           default: user
 *           description: User role
 *           example: admin
 *         org:
 *           type: string
 *           description: Organization name
 *           example: TechCorp Inc
 *         profile:
 *           type: object
 *           description: User profile information (flexible schema)
 *           example:
 *             fullName: John Doe
 *             timezone: Asia/Kolkata
 *             department: Engineering
 *         isActive:
 *           type: boolean
 *           default: true
 *           description: Whether the user is active
 *           example: true
 *         roles:
 *           type: array
 *           items:
 *             type: string
 *           description: List of user roles
 *           example: ["ADMIN", "USER"]
 *         mobilenumber:
 *           type: string
 *           description: Primary mobile number
 *           example: "+1234567890"
 *         alternateemail:
 *           type: string
 *           format: email
 *           description: Alternate email address
 *           example: john.alternate@example.com
 *         alternatemobilenumber:
 *           type: string
 *           description: Alternate mobile number
 *           example: "+0987654321"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *           example: 2025-10-29T10:30:00.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *           example: 2025-10-29T10:30:00.000Z
 *     
 *     UserCreateRequest:
 *       type: object
 *       required:
 *         - username
 *         - email
 *       properties:
 *         username:
 *           type: string
 *           example: johndoe
 *         email:
 *           type: string
 *           format: email
 *           example: john.doe@example.com
 *         name:
 *           type: string
 *           example: John Doe
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           example: admin
 *         org:
 *           type: string
 *           example: TechCorp Inc
 *         profile:
 *           type: object
 *           description: Flexible user profile data
 *           example:
 *             fullName: John Doe
 *             timezone: Asia/Kolkata
 *             department: Engineering
 *         isActive:
 *           type: boolean
 *           example: true
 *         roles:
 *           type: array
 *           items:
 *             type: string
 *           example: ["ADMIN", "USER"]
 *         mobilenumber:
 *           type: string
 *           example: "+1234567890"
 *         alternateemail:
 *           type: string
 *           format: email
 *           example: john.alternate@example.com
 *         alternatemobilenumber:
 *           type: string
 *           example: "+0987654321"
 *     
 *     UserUpdateRequest:
 *       type: object
 *       properties:
 *         password:
 *           type: string
 *           minLength: 6
 *           example: NewSecurePass123
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           example: admin
 *         org:
 *           type: string
 *           example: TechCorp Inc
 *         profile:
 *           type: object
 *           description: Flexible user profile data
 *           example:
 *             fullName: John Updated Doe
 *             timezone: UTC
 *             department: Marketing
 *         isActive:
 *           type: boolean
 *           example: false
 *         roles:
 *           type: array
 *           items:
 *             type: string
 *           example: ["USER", "EDITOR"]
 *         mobilenumber:
 *           type: string
 *           example: "+1234567890"
 *         alternateemail:
 *           type: string
 *           format: email
 *           example: john.alternate@example.com
 *         alternatemobilenumber:
 *           type: string
 *           example: "+0987654321"
 *       description: Note - username, email, and name cannot be updated
 *     
 *     SuccessResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         statusCode:
 *           type: integer
 *           example: 200
 *         message:
 *           type: string
 *           example: Success
 *         data:
 *           type: object
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: 2025-10-29T10:30:00.000Z
 *     
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         statusCode:
 *           type: integer
 *           example: 400
 *         message:
 *           type: string
 *           example: An error occurred
 *         errors:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *               message:
 *                 type: string
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: 2025-10-29T10:30:00.000Z
 *   
 *   parameters:
 *     idParam:
 *       name: id
 *       in: path
 *       required: true
 *       description: MongoDB ObjectId
 *       schema:
 *         type: string
 *         example: 507f1f77bcf86cd799439011
 *
 * tags:
 *   - name: Users
 *     description: User management operations
 *
 * /api/users:
 *   get:
 *     summary: List all users
 *     description: Retrieve a list of all users (passwords excluded)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successfully retrieved users
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new user
 *     description: Create a new user; password is auto-generated on the server and must not be provided in the payload
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreateRequest'
 *           examples:
 *             full:
 *               summary: Full user creation
 *               value:
 *                 username: janedoe
 *                 email: jane.doe@example.com
 *                 name: Jane Doe
 *                 role: admin
 *                 org: TechCorp Inc
 *                 profile:
 *                   fullName: Jane Doe
 *                   timezone: Asia/Kolkata
 *                   department: Engineering
 *                 isActive: true
 *                 roles: ["ADMIN", "USER"]
 *                 mobilenumber: "+1234567890"
 *                 alternateemail: jane.alternate@example.com
 *                 alternatemobilenumber: "+0987654321"
 *               minimal:
 *                 summary: Minimal user creation
 *                 value:
 *                   username: johndoe
 *                   email: john.doe@example.com
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     statusCode:
 *                       example: 201
 *                     message:
 *                       example: User created successfully
 *                     data:
 *                       $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request - validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               statusCode: 400
 *               message: Email already in use
 *               timestamp: 2025-10-29T10:30:00.000Z
 *       422:
 *         description: Validation failed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               statusCode: 422
 *               message: Validation failed
 *               errors:
 *                 - field: email
 *                   message: Valid email required
 *               timestamp: 2025-10-29T10:30:00.000Z
 *
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a single user by their MongoDB ObjectId (password excluded)
 *     tags: [Users]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               statusCode: 404
 *               message: User not found
 *               timestamp: 2025-10-29T10:30:00.000Z
 *   put:
 *     summary: Update a user
 *     description: Update user information (username, email, and name cannot be updated)
 *     tags: [Users]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdateRequest'
 *           examples:
 *             partial:
 *               summary: Partial update
 *               value:
 *                 isActive: false
 *                 mobilenumber: "+9876543210"
 *             full:
 *               summary: Full update
 *               value:
 *                 role: admin
 *                 org: NewOrg Inc
 *                 profile:
 *                   fullName: Updated Name
 *                   timezone: UTC
 *                 isActive: true
 *                 roles: ["ADMIN", "EDITOR"]
 *                 mobilenumber: "+1234567890"
 *                 alternateemail: updated.email@example.com
 *                 alternatemobilenumber: "+0987654321"
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     message:
 *                       example: User updated successfully
 *                     data:
 *                       $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               statusCode: 400
 *               message: Cannot update email field
 *               timestamp: 2025-10-29T10:30:00.000Z
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   delete:
 *     summary: Delete a user
 *     description: Permanently delete a user by their ID
 *     tags: [Users]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     message:
 *                       example: Resource deleted successfully
 *                     data:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: 507f1f77bcf86cd799439011
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

const router = require('express').Router();
const Model = require('./user.model');
const Repo = require('./users.repo');
const Service = require('./users.service');
const Controller = require('./users.controller');
const v = require('./users.validators');

const ctrl = new Controller(new Service(new Repo(Model)));

router.get('/', ctrl.list);
router.get('/:id', v.validateIdParam, ctrl.get);

router.post('/', v.validateCreate, ctrl.create);
router.put('/:id', v.validateIdParam, v.validateUpdate, ctrl.update);
router.delete('/:id', v.validateIdParam, ctrl.remove);

module.exports = router;
