const express = require('express')
const router = require('./router')
const session = require('express-session')
const sequelize = require('./models/database')
const User = require('./models/User')

const app = express()
app.use(express.json())
//app.use(express.urlencoded({extended: true}))
app.use(router)
app.set('view engine', 'pug')
app.set('trust proxy', 1)

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 86400000  }
  }))

User.sync({force: true}).then(async () => {
    const caribou = await User.create({
        firstname: "Jean",
        lastname: "Bon"
    })
    console.log(caribou)
    return caribou
})

// Access the session as req.session
app.get('/', function(req, res, next) {
    console.log(req.session)
  if (req.session.views) {
    req.session.views++
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

/*
app.get('/', function(req, res) {
    res.send('hello world');
});

/*app.get('/', (request, response) => {
    response.format({
        html: () => {
            response.render('resource1/home')
        },
        json: () => {
            response.send("Zut")
        }
    })
});*/

app.listen(4000, () => {
    console.log('Example app listening on port 4000!')
})