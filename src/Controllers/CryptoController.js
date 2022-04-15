const CrytoServices = require('../Services/CrytoServices')
class CryptoController {

    async getAllWithReward(req, res) {
        const data = await CrytoServices.getAllWithReward()
        return res.json(data)
    }

    async getCoins(req, res) {
        const { coin } = req.query
        const data = await CrytoServices.getBestRewardFromCoin(coin)
        return res.json(data)
    }
}

module.exports = new CryptoController
