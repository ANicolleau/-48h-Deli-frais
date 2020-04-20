const express = require('express')

const router = express.Router()


//
// Users
//

router.get(`/basket/:id`, async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('resources/users/basket')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

router.get(`/users/:id/edit`, async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('resources/users/edit')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

router.get(`/users/:id`, async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('resources/users/user')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

//
// Producers
//

router.get(`/producers/:id`, async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('resources/products/product')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

router.get('/producers', async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('resources/products/products')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

//
// Products
//

router.get(`/product/:id`, async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('resources/products/product')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

router.get('/products', async (request, response) => {
    console.log("Hello")

    response.format({
        html: () => {
            response.render('resources/products/products')
        },
        json: () => {
            response.send({
                bienvenue: "à toi",
                jesuis: "la réponse json 1"
            })
        }
    })
})

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