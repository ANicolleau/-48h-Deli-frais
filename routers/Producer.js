const router = require('express').Router()
const {Producer} = require('../database/database')
const {User} = require('../database/database')

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
  console.log(producer)
  const user = await User.findAll(
    {
      where: {
        id: producer[0].userId
      }
    }
  )
  console.log(user)
  res.format({
    html: () => {
      res.render('resources/producers/producer.pug', {
        producer: producer[0],
        user: user[0]
      })
    },
    json: () => {
      res.send(producer)
    }
  })
})

// ANDEV(LA)

router.post('/', async (req, res, next) => {
  const producer = await Producer.create({
    description: req.params.description,
    categoryId: req.params.categoryId,
  })
  res.format({
    html: () => {
      res.redirect("/")
    },
    json: () => {
      res.send(producer)
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
