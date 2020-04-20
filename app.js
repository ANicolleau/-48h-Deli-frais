const express = require('express')
const session = require('express-session')
const { User } = require('./models/database')

const app = express()
app.use(express.json())
//app.use(express.urlencoded({extended: true}))
app.set('view engine', 'pug')
app.set('trust proxy', 1)

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 86400000  }
  }))

console.log("test")
app.use('/contains', require('./routers/Contain'))
app.use('/producers', require('./routers/Producer'))
app.use('/producercategories', require('./routers/ProducerCategory'))
app.use('/products', require('./routers/Product'))
app.use('/productcategories', require('./routers/ProductCategory'))
app.use('/users', require('./routers/User'))


app.get('/', function(req, res, next) {
    res.send("Hello World")
})


app.listen(4000, () => {
    console.log('Example app listening on port 4000!')
})