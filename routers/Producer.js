const router = require('express').Router()
const {Producer} = require('../database/database')
const {User} = require('../database/database')
const {ProducerCategory} = require('../database/database')
const {Product} = require('../database/database')

router.get('/', async (req, res, next) => {
  const producers = await Producer.findAll();
  const users = []
  for (let producer of producers) {
    const user = await User.findAll(
      {
        where: {
          id: producer.userId
        }
      }
    )
    users.push(user[0])
  }

  res.format({
    html: () => {
      res.render('resources/producers/producers.pug', {
        producers: producers,
        users: users
      })
    },
    json: () => {
      res.send(producers)
    }
  })
})

router.get('/:id', async (req, res, next) => {
  const producer = await Producer.findAll({
    where: {
      id: req.params.id
    }
  });

  const user = await User.findAll(
    {
      where: {
        id: producer[0].userId
      }
    }
  )
  const products = await Product.findAll(
    {
      where: {
        producer_id: producer[0].id
      }
    }
  )
  res.format({
    html: () => {
      res.render('resources/producers/producer.pug', {
        producer: producer[0],
        user: user[0],
        products: products
      })
    },
    json: () => {
      res.send(producer)
    }
  })
})

router.post('/', async (req, res, next) => {
  const user = await User.create({
    email : req.body.email,
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    password : req.body.password,
    city : req.body.city,
    zip_code : req.body.zip_code,
    street : req.body.street,
    phone_number : req.body.phone_number
  })
  const user_in_database = await User.findAll({
    where: {firstname: req.body.firstname, lastname : req.body.lastname}
  })
  const producer = await Producer.create({
    description: req.body.description,
    categoryId: req.body.category,
    userId: user_in_database[0].id
  })

  res.format({
    html: () => {
      res.redirect("/")
    },
    json: () => {
      res.send(producer, user)
    }
  })
})

router.patch('/:id', async (req, res, next) => {
  let tmp_producer = {}

  if (req.params.description)
    tmp_producer.description = req.params.description
  if (req.params.categoryId)
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
    json: () => {
      res.send(producer_updated)
    }
  })
})

router.delete('/:id', async (req, res, next) => {
  await Producer.destroy({
    where: {
      id: req.params.id
    }
  });
  res.format({
    html: () => {
      res.redirect('/')
    },
    json: () => {
      res.redirect('/')
    }
  })
})

module.exports = router
