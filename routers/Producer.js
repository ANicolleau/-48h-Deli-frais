const router = require('express').Router()
const { Producer } = require('../models/database')

router.get('/', async(req, res, next)=> {
    const producers = await Producer.findAll();
    res.format({
        html: () => {
            
        },
        json: ()=>{
            res.send(producers)
        }
    })
})

router.get('/:id', async (req, res, next)=> {
    const producer = await Producer.findAll({
        where: {
            id: req.params.id
        }
    });
    res.format({
        html: () => {

        },
        json: ()=>{
            res.send(producer)
        }
    })
})



router.post('/', async (req, res, next)=> {
    const producer = await Producer.create({    
        description : req.params.description,
        categoryId : req.params.categoryId,
    })
    res.format({
        html: () => {
            res.redirect("/")
        },
        json: ()=>{
            res.send(producer)
        }
    })
})

router.patch('/:id', async (req, res, next)=> {
    let tmp_producer = {}

    if(req.params.description)
        tmp_producer.description = req.params.description
    if(req.params.categoryId)
        tmp_producer.categoryId = req.params.categoryId
    
    const producer_updated = await Producer.update(tmp_producer, {
        where: {
          id: req.params.id
        }
    })
    res.format({
        html: () => {
            res.redirect('/')
        },
        json: ()=>{
            res.send(producer_updated)
        }
    })
})

router.delete('/:id', async (req, res, next)=> {
    await Producer.destroy({
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
