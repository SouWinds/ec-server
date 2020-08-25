'use strict'

const Controller = require('egg').Controller
/**
 * @Controller 官网首页配置信息
 */
class OfficalController extends Controller {
  /**
   * @summary 获取所有配置信息
   * @description 获取所有配置信息
   * @router get /api/v1/official/setting
   * @request body getGrid *body
   * @response 200 baseResponse 获取成功
   */
  async getSetting() {
    const { ctx } = this
    const result = await ctx.model.Official.findAll({})
    this.ctx.body = result
  }
}
module.exports = OfficalController
