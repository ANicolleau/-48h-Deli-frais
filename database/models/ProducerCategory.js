module.exports = (Sequelize, sequelize) => {
  return sequelize.define('producer_category', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,

    },
    label: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  })
}