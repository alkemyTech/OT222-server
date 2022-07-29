const express = require('express');
const router = express.Router();

const swaggerDefinition = require('../docs/swaggerDef');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const specs = swaggerJsdoc({
    swaggerDefinition,
    apis: ['docs/*.yml', 'routes/*.js', 'models/*.js'],
});

router.use('/', swaggerUi.serve);
router.get(
    '/',
    swaggerUi.setup(specs, {
        explorer: true,
    })
);

module.exports = router;