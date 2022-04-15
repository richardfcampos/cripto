const { getCrypto } = require('../api/cryptoApi')
class CrytoServices {

    async getAllWithReward() {
        const response = await getCrypto()
        return response.data.filter((coins) => coins.reward > 0 )
    }

    async getCoins() {
        const response = await getCrypto()
        return response.data.filter((coins) => coins.type === 'pool').map((coins) => {
           return coins.reward_unit
        })
            .filter((v, i, a) => a.indexOf(v) === i)
    }

    async getBestRewardFromCoin(rewardName) {
        const rewardUnit = await this.getCoins()
        //if it has rewardName, it checks if it exists, if not, empty array as a return
        if (!!rewardName && !rewardUnit.includes(rewardName)) {
            return []
        }
        const response = await this.getAllWithReward()
        //if it's not filtered, it returns all the results sorted
        if (!rewardName) {
            return response.sort(this.compareByReward)
        }
        return response.filter((coin) => coin.reward_unit === rewardName).sort(this.compareByReward)
    }

    //sort greater rewards first
    compareByReward( a, b ) {
        if ( a.reward > b.reward ){
            return -1;
        }
        if ( a.reward < b.reward ){
            return 1;
        }
        return 0;
    }
}

module.exports = new CrytoServices
