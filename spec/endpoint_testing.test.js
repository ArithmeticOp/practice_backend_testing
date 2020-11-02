const express = require('express')
const app = express()
const request = require('supertest')
const express_app = require('../services')({ app }).express_app

describe('TEST GRAPHQL ENDPOINT IS WORK!!', () => {

})

describe('TEST EXPRESS ENDPOINT IS WORK!!', () => {
    it('ENDPOINT PING/PONG IS WORK!!', async () => {
        const res = await request(express_app)
            .get('/ping')
        expect(res.statusCode).to.equal(200)
        expect(res.text).to.equal('pong')
    })
})

describe('TEST SENECA ENDPOINT IS WORK!!', () => {

})