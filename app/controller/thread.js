'use strict'

const { sequelize } = require('../../config/plugin')

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
    // 查出所有符合条件的 thread
    let threads = await ctx.model.Thread.findAll({
      where: ctx.query,
      limit: 10,
      order: [['updated_at', 'DESC']],
      attributes: ['id', 'title', 'post_count', 'view_count', 'rewarded_count', "is_approved", "is_sticky", "is_essence"],
      // note: 这是用来过滤不需要展示的字段的
      // attributes: {
      //   exclude: [],
      // },
      include: [{
        model: ctx.model.Post,
        as: 'posts',
        where: {
          is_first: 1,
        },
        attributes: ['id', 'is_first', 'thread_id'],
      }, {
        model: ctx.model.Category,
        as: 'category',
        attributes: ['id', 'name'],
      }, 
      {
        model: ctx.model.User,
        attributes: ['id', 'username', 'avatar'],
        as: 'user',
      }],
    })


    // post.id === attachment.type_id
    let attachment = []
    let keyValue = {}
    await threads.forEach((v, i) => {
      v.posts.is_first && attachment.push(v.posts.id)
      keyValue[v.posts.id] = {...JSON.parse(JSON.stringify(v)), attachment: {}}
    })

    // 找出对应匹配的数据
    attachment = await ctx.model.Attachment.findAll({
      where: {
        type_id: attachment,
      }
    })

    attachment.map(v => {
      // attachment.push({[v.type_id]: v})
      try {
        keyValue[v.type_id].attachment = v
      } catch (err) {
        console.log(`attachment数据处理错误：${err}`)
      }
    })

    // 返回最终数据
    ctx.body = keyValue
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
