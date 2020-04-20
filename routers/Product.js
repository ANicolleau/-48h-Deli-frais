const router = require('express').Router()
const { Product } = require('../models/database')

router.get('/', async(req, res, next)=> {
    const products = await Product.findAll();
    res.format({
        html: () => {
            
        },
        json: ()=>{
            res.send(products)
        }
    })
})

router.get('/:id', async (req, res, next)=> {
    const product = await Product.findAll({
        where: {
            id: req.params.id
        }
    });
    res.format({
        html: () => {

        },
        json: ()=>{
            res.send(product)
        }
    })
})



router.post('/', async (req, res, next)=> {
    const product = await Product.create({  
        name:  req.params.name,
        description : req.params.description,
        categoryId : req.params.categoryId,
        producerId : req.params.producerId,
        price : req.params.price,
    })
    res.format({
        html: () => {
            res.redirect("/")
        },
        json: ()=>{
            res.send(product)
        }
    })
})

router.patch('/:id', async (req, res, next)=> {
    let tmp_product = {}


    if(req.params.name)
        tmp_product.name = req.params.name
    if(req.params.description)
        tmp_product.description = req.params.description
    if(req.params.categoryId)
        tmp_product.categoryId = req.params.categoryId
    if(req.params.producerId)
        tmp_product.producerId = req.params.producerId
    if(req.params.price)
        tmp_product.price = req.params.price

    const product_updated = await Product.update(tmp_product, {
        where: {
          id: req.params.id
        }
    })
    res.format({
        html: () => {
            res.redirect('/')
        },
        json: ()=>{
            res.send(product_updated)
        }
    })
})

router.delete('/:id', async (req, res, next)=> {
    await Product.destroy({
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

module.exports = router