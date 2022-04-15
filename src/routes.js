const app = require('express').Router()
app.use(require('./config/routes'))
/*
    Event route has a middleware with cache to avoid duplicated events
*/

app.use('/cripto',  require('./routes/crypto'))

app.use('/*', (req, res) => res.status(404).send('<h1>Page Not Found</h1>'))

module.exports = app
