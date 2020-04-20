const router = require('express').Router()
const { Contain } = require('../models/database')

router.get('/', async(req, res, next)=> {
    const contains = await Contain.findAll();
    res.format({
        html: () => {
            
        },
        json: ()=>{
            res.send(contains)
        }
    })
})

router.get('/:id', async (req, res, next)=> {
    const contain = await Contain.findAll({
        where: {
            id: req.params.id
        }
    });
    res.format({
        html: () => {

        },
        json: ()=>{
            res.send(contain)
        }
    })
})



router.post('/', async (req, res, next)=> {
    const contain = await Contain.create({    
        basketId : req.params.basketId,
        productId : req.params.productId,
        quantity : req.params.quantity,
    })
    res.format({
        html: () => {
            res.redirect("/")
        },
        json: ()=>{
            res.send(contain)
        }
    })
})

router.patch('/:id', async (req, res, next)=> {
    let tmp_contain = {}

    if(req.params.basketId)
        tmp_contain.basketId = req.params.basketId
    if(req.params.productId)
        tmp_contain.productId = req.params.productId
    if(req.params.quantity)
        tmp_contain.quantity = req.params.quantity

    const contain_updated = await Contain.update(tmp_contain, {
        where: {
          id: req.params.id
        }
    })
    res.format({
        html: () => {
            res.redirect('/')
        },
        json: ()=>{
            res.send(contain_updated)
        }
    })
})

router.delete('/:id', async (req, res, next)=> {
    await Contain.destroy({
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
