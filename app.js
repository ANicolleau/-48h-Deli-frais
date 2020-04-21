const express = require('express')
const session = require('express-session')
const { User } = require('./database/database')
const methodOverride =  require('method-override')
const passport = require('passport')
const Strategy = require('passport-local').Strategy;
const { Op } = require("sequelize");

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'pug');

passport.use(new Strategy(
    async function(username, password, cb) {
        const user = await User.findAll({
            where: {
                [Op.and]: [{ email: username }, { password: password }],
            }
        })
        if(user[0].email == username && user[0].password == password)
            return cb(null, user[0]);
        else
            return cb(null, false, {message: "incorrect"})
}));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
passport.deserializeUser( async function(id, cb) {
    const user = await User.findAll({
        where: {
            id: id,
        }
    }, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
    });
});

app.use(passport.initialize())
app.use(passport.session({
    secret: 'cookie_secret',
    name: 'cookie_name',
    proxy: true,
    resave: true,
    saveUninitialized: true
}))


app.use('/contains', require('./routers/Contain'))
app.use('/producers', require('./routers/Producer'))
app.use('/producercategories', require('./routers/ProducerCategory'))
app.use('/products', require('./routers/Product'))
app.use('/productcategories', require('./routers/ProductCategory'))
app.use('/users', require('./routers/User'))

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

app.get('/register', function(req, res, next) {
    res.format({
        html: () => {
            res.render("login/register")
        }
    })
})

app.post('/login',
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/connection' }));

app.get('/', function(req, res, next) {
    console.log(req.body)
    res.format({
        html: () => {
            res.render("home")
        }
    })
})

app.listen(4000, () => {
    console.log('Déli\'Frais app listening on port 4000!')
})