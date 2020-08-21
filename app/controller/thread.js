'use strict'

const Controller = require('egg').Controller
class ThreadController extends Controller {
  async getThread() {
    const { ctx } = this
    ctx.body = await ctx.model.Thread.findAll({
      where: {
        type: 1,
      },
    })
  }
}
module.exports = ThreadController
