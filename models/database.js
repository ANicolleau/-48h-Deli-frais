const filename = "./database.sqlite"
const Sequelize = require("sequelize")
const BasketModel = require('./Basket')
const ContainModel = require('./Contain')
const ProductModel = require('./Product')
const ProducerModel = require('./Producer')
const ProductCategoryModel = require('./ProductCategory')
const ProducerCategoryModel = require('./ProducerCategory')
const UserModel = require('./User')

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

sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
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