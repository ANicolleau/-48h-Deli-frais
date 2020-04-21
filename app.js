const express = require('express')
const session = require('express-session')
const { User } = require('./database/database')
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

app.listen(4000, () => {
    console.log('Déli\'Frais app listening on port 4000!')
})