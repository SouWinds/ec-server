'use strict'

const Controller = require('egg').Controller
class SwiperController extends Controller {
  async getSwiper() {
    const { ctx } = this
    ctx.body = await ctx.model.Swiper.findAll({})
  }
}
module.exports = SwiperController
