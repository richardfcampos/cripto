const app = require("express").Router()

const CryptoController = require('../Controllers/CryptoController')
/*
    this is the only route and it has a validation middleware the check if it is getting a correct request
 */
app.route('')
    .get(CryptoController.getAllWithReward)

//
app.route('/best-pools')
    .get(CryptoController.getCoins)



module.exports = app
