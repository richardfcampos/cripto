const app = require("express").Router()

const CryptoController = require('../Controllers/CryptoController')


app.route('')
    .get(CryptoController.getAllWithReward)

app.route('/best-pools')
    .get(CryptoController.getBestRewardFromCoin)



module.exports = app
