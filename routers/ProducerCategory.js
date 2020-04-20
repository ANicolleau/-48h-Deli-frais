const router = require('express').Router()
const { ProducerCategory } = require('../models/database')

router.get('/', async(req, res, next)=> {
    const producercategories = await ProducerCategory.findAll();
    res.format({
        html: () => {
            
        },
        json: ()=>{
            res.send(producercategories)
        }
    })
})

router.get('/:id', async (req, res, next)=> {
    const producerCategory = await ProducerCategory.findAll({
        where: {
            id: req.params.id
        }
    });
    res.format({
        html: () => {

        },
        json: ()=>{
            res.send(producerCategory)
        }
    })
})



router.post('/', async (req, res, next)=> {
    console.log(req)
    const producerCategory = await ProducerCategory.create({  
        label:  req.params.label,
    })
    res.format({
        html: () => {
            res.redirect("/")
        },
        json: ()=>{
            res.send(producerCategory)
        }
    })
})

router.patch('/:id', async (req, res, next)=> {
    let tmp_producer_category = {}


    if(req.params.label)
        tmp_producer_category.label = req.params.label

    const producer_category_updated = await ProducerCategory.update(obj, {
        where: {
          id: req.params.id
        }
    })
    res.format({
        html: () => {
            res.redirect('/')
        },
        json: ()=>{
            res.send(producer_category_updated)
        }
    })
})

router.delete('/:id', async (req, res, next)=> {
    await ProducerCategory.destroy({
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