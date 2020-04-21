const router = require('express').Router()
const { User, Contain, Basket, Product } = require('../database/database')

router.get('/', async(req, res, next)=> {
    const users = await User.findAll();
    res.format({
        html: () => {
            res.redirect("/")
        },
        json: ()=>{
            res.send(users)
        }
    })
})

router.get('/:id', async (req, res, next)=> {
    const user = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    res.format({
        html: () => {
            res.render("resources/users/user", {
                user: user[0]
            })
        },
        json: ()=>{
            res.send(user)
        }
    })
})

router.get('/:id/edit', async (req, res, next)=> {
    const user = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    res.format({
        html: () => {
            res.render("resources/users/edit", {
                user: user[0]
            })
        },
        json: ()=>{
            res.send(user)
        }
    })
})


router.post('/', async (req, res, next)=> {
    const user = await User.create({    
        email : req.params.email,
        firstname : req.params.firstname,
        lastname : req.params.lastname,
        password : req.params.password,
        city : req.params.city,
        zip_code : req.params.zip_code,
        street : req.params.street,
        phone_number : req.params.phone_number,
    })
    res.format({
        html: () => {
            res.redirect("/")
        },
        json: ()=>{
            res.send(user)
        }
    })
})

router.patch('/:id', async (req, res, next)=> {
    let tmp_user = {}

    if(req.body.email)
        tmp_user.email = req.body.email
    if(req.body.firstname)
        tmp_user.firstname = req.body.firstname
    if(req.body.lastname)
        tmp_user.lastname = req.body.lastname
    if(req.body.password)
        tmp_user.password = req.body.password
    if(req.body.city)
        tmp_user.city = req.body.city
    if(req.body.zip_code)
        tmp_user.zip_code = req.body.zip_code
    if(req.body.street)
        tmp_user.street = req.body.street
    if(req.body.phone_number)
        tmp_user.phone_number = req.body.phone_number

    const user_updated = await User.update(tmp_user, {
        where: {
          id: req.params.id
        }
    })
    res.format({
        html: () => {
            res.redirect('/')
        },
        json: ()=>{
            res.send(user_updated)
        }
    })
})

router.delete('/:id', async (req, res, next)=> {
    await User.destroy({
        where: {
          id: req.params.id
        }
    });
    res.format({
        html: () => {
            res.redirect('/')
        },
        json: ()=>{
            res.redirect('/')
        }
    })
})

router.post('/:user_id/buy/:product_id', async (req, res, next)=> {
    let basket = await Basket.findAll(
        {
            where: {
                user_id: req.params.user_id
            }
        }
    )
    if (basket.length === 0 ) {
        await Basket.create(
            {
                userId: req.params.user_id,
                price: 0
            }
        )
        basket = await Basket.findAll(
            {
                where: {
                    user_id: req.params.user_id
                }
            }
        )
    }
    basket = basket[0]
    const contain = await Contain.create(
        {
            basketId: basket.id,
            productId: req.params.product_id,
            quantity: 1
        }
    )
    const product = await Product.findAll(
        {
            where: {
                id: req.params.product_id
            }
        }
    )
    await Basket.update(
        {
            price: basket.price + product[0].price*contain.quantity
        },
        {
            where: {
                id: basket.id
            }
        }
    )

    res.format({
        html: () => {
            res.redirect(`/users/${req.params.user_id}/basket/`)
        },
        json: ()=>{
            res.send(user)
        }
    })
})

router.get('/:id/basket', async (req, res, next)=> {
    const user = await User.findAll({
        where: {
            id: req.params.id
        }
    })
    const basket = await Basket.findAll({
        where: {
            userId: req.params.id
        }
    });
    console.log(basket[0])
    const contains = await Contain.findAll({
        where: {
            basketId: basket[0].id
        }
    })
    let product_ids = []
    for (let product of contains) {
        product_ids.push(product.productId)
    }
    const products = await Product.findAll({
        where: { 
            id: product_ids
        }
    })
    
    res.format({
        html: () => {
            res.render("resources/users/basket", {
                user: user[0],
                price: basket[0].price,
                products: products
            })
        },
        json: ()=>{
            res.send(user)
        }
    })
})
module.exports = router
