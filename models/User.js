module.exports = (Sequelize, sequelize) => {
  return sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    producerId: {
      type: Sequelize.INTEGER,
      field: 'producer_id'
    },
    email: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    zipCode: {
      type: Sequelize.INTEGER,
      field: 'zip_code'
    },
    street: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING,
      field: 'phone_number'
    }
  }, {
    freezeTableName: true
  })
}
