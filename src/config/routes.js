const app = require("express").Router()
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

module.exports = app
