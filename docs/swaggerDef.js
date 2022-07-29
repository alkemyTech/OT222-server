const { version, name } = require('../package.json');

const swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: name,
        version
    }
}


module.exports = swaggerDef;