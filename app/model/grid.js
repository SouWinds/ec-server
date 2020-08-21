'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Grid = app.model.define('gaokao_ec_grid', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: STRING },
    img_src: { type: STRING },
    category: { type: STRING },
    order: { type: INTEGER },
    target: { type: STRING },
    status: { type: INTEGER },
  })

  return Grid
}
