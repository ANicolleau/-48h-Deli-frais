const express = require('express')

const router = express.Router()

router.get('/', async (request, response) => {
    response.format({
        html: () => {
            response.render('resource2/home')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 2"
            })
        }
    })
})

module.exports = router