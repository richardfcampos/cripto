const express = require('express');

//organize app with class, stays clean and easy to add features
class appController {
    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }


    middlewares() {
        this.express.use(express.json())
    }

    //routes should be on a diff folder, neat and easy to maintain
    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new appController().express
