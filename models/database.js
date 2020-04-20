const filename = "./database.sqlite"
const Sequelize = require("sequelize")

const sequelize = new Sequelize('database', '', '', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    storage: filename
});

module.exports = sequelize