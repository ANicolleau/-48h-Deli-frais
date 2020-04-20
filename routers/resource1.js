const express = require('express')

const router = express.Router()

router.get('/', async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('resource1/home')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

module.exports = router