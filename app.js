const express = require('express')
const session = require('express-session')
const { User } = require('./database/database')
const {ProducerCategory} = require('./database/database')
const methodOverride =  require('method-override')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'pug')
app.set('trust proxy', 1)
app.use(methodOverride('_method'))

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 86400000  }
  }))

app.use('/contains', require('./routers/Contain'))
app.use('/producers', require('./routers/Producer'))
app.use('/producercategories', require('./routers/ProducerCategory'))
app.use('/products', require('./routers/Product'))
app.use('/productcategories', require('./routers/ProductCategory'))
app.use('/users', require('./routers/User'))


app.get('/', function(req, res, next) {
    res.format({
        html: () => {
            res.render("home")
        }
    })
})

app.get('/about', function(req, res, next) {
    res.format({
        html: () => {
            res.render("about/about")
        }
    })
})

app.get('/connection', function(req, res, next) {
    res.format({
        html: () => {
            res.render("login/connection")
        }
    })
})

app.get('/select_state', function(req, res, next) {
    res.format({
        html: () => {
            res.render("login/select_state")
        }
    })
})

app.get('/register', function(req, res, next) {
    res.format({
        html: () => {
            res.render("login/customer_register")
        }
    })
})

app.get('/producer_register', async function(req, res, next) {
    const producer_category = await ProducerCategory.findAll()
    console.log(producer_category)
    res.format({
        html: () => {
            res.render("login/producer_register", {
                producer_category: producer_category
            })
        }
    })
})

app.listen(4000, () => {
    console.log('Déli\'Frais app listening on port 4000!')
})