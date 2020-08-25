'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Category = app.model.define('gaokao_categorie', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING },
    description: { type: STRING },
    icon: { type: STRING },
    // category: { type: STRING },
    sort: { type: INTEGER },
    property: { type: STRING },
    thread_count: { type: INTEGER },
  })
  

  return Category
}
