const router = require('express').Router()
const { User } = require('../database/database')

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
        email : req.body.email,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        password : req.body.password,
        city : req.body.city,
        zip_code : req.body.zip_code,
        street : req.body.street,
        phone_number : req.body.phone_number,
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

module.exports = router
