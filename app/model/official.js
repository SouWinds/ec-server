'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Official = app.model.define('ec-official-setting', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    key: { type: STRING },
    description: { type: STRING },
    value: { type: STRING },
    json: { type: STRING },
    created_at: { type: DATE },
    updated_at: { type: DATE },
    deleted_at: { type: DATE },
  })
  

  return Official
}
