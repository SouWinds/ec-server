'use strict'

const Controller = require('egg').Controller

/**
 * @Controller 用户
 */
class UserController extends Controller {
  /**
   * @summary 获得用户
   * @description 获得用户，记录用户账户/密码/类型
   * @router get /api/v1/user/:id
   * @request body info *body
   * @response 200 baseResponse 创建成功
   */
  async info() {
    const { ctx } = this
    ctx.body = await ctx.model.User.findAll({ where: ctx.params })
  }
}
module.exports = UserController
