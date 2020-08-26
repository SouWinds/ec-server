'use strict'

const Controller = require('egg').Controller


/**
 * @Controller 首页主题
 */
class ThreadController extends Controller {
  /**
   * @summary 获取首页主题列表
   * @description 获取首页主题列表
   * @router get /api/v1/thread
   * @request body info *body
   * @response 200 baseResponse 创建成功
   */
  async getThread() {
    const { ctx } = this
    const threads = await ctx.model.Thread.findAll({
      where: ctx.query,
      limit: 20,
      include: [{
        model: ctx.model.Category,
        as: 'category',
      }, {
        model: ctx.model.Attachment,
        as: 'attachment',
      }, {
        model: ctx.model.User,
        as: 'user',
      }],
    })
    ctx.body = threads
  }
  /**
   * @summary 获取单个主题
   * @description 获取单个主题
   * @router get /api/v1/thread/:id
   * @request body info *body
   * @response 200 baseResponse 创建成功
   */
  async getThreadById() {
    this.getThread.bind(this)
  }
}
module.exports = ThreadController
