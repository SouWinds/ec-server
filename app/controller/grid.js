'use strict'

const Controller = require('egg').Controller
class GridController extends Controller {
  async getGrid() {
    const { ctx } = this
    ctx.body = await ctx.model.Grid.findAll({})
  }
}
module.exports = GridController
