const router = require('express').Router()
const { ProductCategory } = require('../models/database')

router.get('/', async(req, res, next)=> {
    const productCategories = await ProductCategory.findAll();
    res.format({
        html: () => {
            
        },
        json: ()=>{
            res.send(productCategories)
        }
    })
})

router.get('/:id', async (req, res, next)=> {
    const productCategory = await ProductCategory.findAll({
        where: {
            id: req.params.id
        }
    });
    res.format({
        html: () => {

        },
        json: ()=>{
            res.send(productCategory)
        }
    })
})



router.post('/', async (req, res, next)=> {
    const productCategory = await ProductCategory.create({  
        label:  req.params.label,
    })
    res.format({
        html: () => {
            res.redirect("/")
        },
        json: ()=>{
            res.send(productCategory)
        }
    })
})

router.patch('/:id', async (req, res, next)=> {
    let tmp_productCategory = {}


    if(req.params.label)
        tmp_productCategory.label = req.params.label

    const productCategory_updated = await ProductCategory.update(tmp_productCategory, {
        where: {
          id: req.params.id
        }
    })
    res.format({
        html: () => {
            res.redirect('/')
        },
        json: ()=>{
            res.send(productCategory_updated)
        }
    })
})

router.delete('/:id', async (req, res, next)=> {
    await ProductCategory.destroy({
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