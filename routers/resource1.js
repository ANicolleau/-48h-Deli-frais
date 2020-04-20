const express = require('express')

const router = express.Router()


router.get('/connection', async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('login/connection')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

router.get('/register', async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('login/register')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

router.get('/', async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('home')
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