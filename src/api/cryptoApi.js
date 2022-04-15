const axios = require('axios')

const  http = axios.create({
    baseURL: 'https://api.minerstat.com/v2/coins',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer f2b0156f-cf95-4e29-9f57-51296a481c6a'
    }

});

class cryptoApi {
    async getCrypto() {
        const response = await http.get('')
        return response
    }

}

module.exports = new cryptoApi
