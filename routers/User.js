const router = require('express').Router()
const { User } = require('../models/database')

router.get('/', async(req, res, next)=> {
    const users = await User.findAll();
    res.format({
        html: () => {
            
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

    if(req.params.email)
        tmp_user.email = req.params.email
    if(req.params.firstname)
        tmp_user.firstname = req.params.firstname
    if(req.params.lastname)
        tmp_user.lastname = req.params.lastname
    if(req.params.password)
        tmp_user.password = req.params.password
    if(req.params.city)
        tmp_user.city = req.params.city
    if(req.params.zip_code)
        tmp_user.zip_code = req.params.zip_code
    if(req.params.street)
        tmp_user.street = req.params.street
    if(req.params.phone_number)
        tmp_user.phone_number = req.params.phone_number


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

module.exports = router
