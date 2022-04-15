const request = require('supertest')
const app = require('../../src/app')

describe("Crypto", () => {


    it("Should get 404", async () => {

        const response = await request(app)
            .get('/blabla')
        expect(response.status).toBe(404)

    })

    it("Should get all Crypto", async () => {

        const response = await request(app)
            .get('/cripto')

        expect(response.status).toBe(200)
        expect(response.body.length).toBeGreaterThan(0)

        const data = response.body
        for (let index = 0; index < data.length; index ++) {
            let reward = data[index].reward
            expect(reward).toBeGreaterThan(0)
        }

    })

    it ("Shouldn't get any crypto", async () => {
        const response = await request(app)
            .get('/cripto/best-pools')
            .query({
                coin: 'blablabla'
            })
        expect(response.body.length).toBe(0)
    })

    it ("Should get all crypto sorted by greatest rewards", async () => {
        const response = await request(app)
            .get('/cripto/best-pools')

        expect(response.body.length).toBeGreaterThan(0)
        const data = response.body
        for (let index = 0; index < data.length; index ++) {
            if (index > 0) {
                currentReward = data[index].reward
                lastReward = data[index-1].reward
                expect(currentReward).toBeLessThanOrEqual(lastReward)
            }
            let type = data[index].type
            expect(type).toBe('pool')
        }
    })

    it ("Should get crypto filtered by reward unit and sorted by greatest reward", async () => {
        const response = await request(app)
            .get('/cripto/best-pools')
            .query({coin: 'AE'})
        expect(response.body.length).toBeGreaterThan(0)
        const data = response.body
        for (let index = 0; index < data.length; index ++) {
            if (index > 0) {
                currentReward = data[index].reward
                lastReward = data[index-1].reward
                expect(currentReward).toBeLessThanOrEqual(lastReward)
            }
            let type = data[index].type
            expect(type).toBe('pool')
        }
    })


})
