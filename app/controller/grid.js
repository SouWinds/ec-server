'use strict'

const Controller = require('egg').Controller
/**
 * @Controller grid
 */
class GridController extends Controller {
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router get /api/v1/grid
   * @request body getGrid *body
   * @response 200 baseResponse 创建成功
   */
  async getGrid() {
    const { ctx } = this
    const result = await ctx.model.Grid.findAll({})
    this.ctx.body = result
  }
}
module.exports = GridController
