module.exports = (Sequelize, sequelize) => {
    return sequelize.define('contain', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        basketId: {
            type: Sequelize.INTEGER,
            field: 'basket_id'
        },
        productId: {
            type: Sequelize.INTEGER,
            field: 'product_id'
        },
        quantity: {
            type: Sequelize.INTEGER
        }
    }, {
        freezeTableName: true
    })
}