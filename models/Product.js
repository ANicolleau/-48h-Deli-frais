module.exports = (Sequelize, sequelize) => {
    return sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        categoryId: {
            type: Sequelize.INTEGER,
            field: 'category_id'
        },
        producerId: {
            type: Sequelize.INTEGER,
            field: 'producer_id'
        }
    })
}