module.exports = (Sequelize, sequelize) => {
    return sequelize.define('basket', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER,
            field: 'user_id'
        },
        price: {
            type: Sequelize.INTEGER
        }
    })
}