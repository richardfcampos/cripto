const app = require('express').Router()
//all configuration of routes are on this file
app.use(require('./config/routes'))

//separate sections of routes the make it more organized
app.use('/cripto',  require('./routes/crypto'))

app.use('/*', (req, res) => res.status(404).send('<h1>Page Not Found</h1>'))

module.exports = app
