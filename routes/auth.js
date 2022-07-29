const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { createUser, authMe, logIn, editUser } = require('../controllers/auth.controllers');
const userValidationSchema = require('../validations/userValidationSchema');

// auth me
router.get('/me', authMe);

// Create a new user
router.post('/register', userValidationSchema, createUser);
router.post('/edit/:userId', editUser)

// login user
router.post(
  '/login',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  logIn
);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication
 */

/**
* @swagger
* /auth/register:
*   post:
*     summary: Register as user
*     tags: [Auth]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - firstName
*               - lastName
*               - email
*               - password
*             properties:
*               name:
*                 type: string
*               email:
*                 type: string
*                 format: email
*                 description: must be unique
*               password:
*                 type: string
*                 format: password
*                 minLength: 8
*             example:
*               firstName: John
*               lastName: Doe
*               email: johndoe@example.com
*               password: password1
*     responses:
*       "200":
*         description: User registered successfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 auth:
*                   type: string
*                   example: "ok"
*                 token:
*                    type: string
*                    format: JWT
*                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
*       "422":
*         description: Validation error
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 errors:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                         msg:
*                           type: string
*                           example: "Email is already in use"
*                         para:
*                           type: string
*                           example: "email"
*                         location:
*                           type: string
*                           example: "body"
*       "500":
*         description: Internal server error
*         content:
*           application/json:
*             schema:
*                type: object
*                properties:
*                  ok:
*                    type: boolean
*                    example: false
 */

/**
* @swagger
* /auth/login:
*   post:
*     summary: Login as user
*     tags: [Auth]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - email
*               - password
*             properties:
*               email:
*                 type: string
*                 format: email
*               password:
*                 type: string
*                 format: password
*             example:
*               email: test@test.com
*               password: "123456"
*     responses:
*       "200":
*         description: User logged in successfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 ok:
*                   type: boolean
*                   example: true
*                 user:
*                   type: string
*                   format: JWT
*                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
*       "401":
*         description: Invalid credentials
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 ok:
*                   type: boolean
*                   example: false
*       "500":
*         description: Internal server error
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 ok:
*                   type: boolean
*                   example: false
*/

/**
* @swagger
* /auth/me:
*   get:
*     summary: Get user info
*     tags: [Auth]
*     security:
*       - bearerAuth: []
*     responses:
*       "200":
*         description: User info
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 id:
*                   type: number
*                   example: 1
*                 firstName:
*                   type: string
*                   example: John
*                 lastName:
*                   type: string
*                   example: Doe
*                 email:
*                   type: string
*                   example: test@test.com
*                 image:
*                   type: string
*                   example: https://example.com/image.jpg
*                 roleId:
*                   type: number
*                   example: 1 
*       "401":
*         description: Unauthorized
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 auth:
*                   type: boolean
*                   example: false
*                 message:
*                   type: string
*                   example: "No token provided"
*       "500":
*         description: Internal server error
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 ok:
*                   type: boolean
*                   example: false
 */