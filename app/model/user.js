'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const User = app.model.define('gaokao_user', {
    // id
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: STRING },
    signature: { type: STRING },
    avatar: { type: STRING },
    mobile: { type: STRING },
  })

  return User
}
