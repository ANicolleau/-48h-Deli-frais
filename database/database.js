const filename = "./database.sqlite"
const Sequelize = require("sequelize")
const BasketModel = require('./models/Basket')
const ContainModel = require('./models/Contain')
const ProductModel = require('./models/Product')
const ProducerModel = require('./models/Producer')
const ProductCategoryModel = require('./models/ProductCategory')
const ProducerCategoryModel = require('./models/ProducerCategory')
const UserModel = require('./models/User')

const sequelize = new Sequelize('database', '', '', {
    host: 'localhost',
    dialect: 'sqlite',
    define: {
        timestamps: false
    },
    logging: false,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    storage: filename

});

const Basket = BasketModel(Sequelize, sequelize)
const Contain = ContainModel(Sequelize, sequelize)
const Product = ProductModel(Sequelize, sequelize)
const Producer = ProducerModel(Sequelize, sequelize)
const ProductCategory = ProductCategoryModel(Sequelize, sequelize)
const ProducerCategory = ProducerCategoryModel(Sequelize, sequelize)
const User = UserModel(Sequelize, sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database connection: OK`)
    })

module.exports = {
    Basket,
    Contain,
    Product,
    Producer,
    ProductCategory,
    ProducerCategory,
    User
}