module.exports = (Sequelize, sequelize) => {
    return sequelize.define('producer', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING
        },
        categoryId: {
            type: Sequelize.INTEGER,
            field: 'category_id'
        }
    })
}
