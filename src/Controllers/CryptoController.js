// separate http logic from the business logic with services
const CryptoServices = require('../Services/CryptoServices')
class CryptoController {

    async getAllWithReward(req, res) {
        const data = await CryptoServices.getAllWithReward()
        return res.json(data)
    }

    async getBestRewardFromCoin(req, res) {
        const { coin } = req.query
        const data = await CryptoServices.getBestRewardFromCoin(coin)
        return res.json(data)
    }
}

module.exports = new CryptoController
