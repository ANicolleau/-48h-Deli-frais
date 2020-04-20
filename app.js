const express = require('express')
const router = require('./router')

const app = express()
// TODO: database connection
app.use(express.json())
//app.use(express.urlencoded({extended: true}))
app.use(router)
app.set('view engine', 'pug')

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

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})