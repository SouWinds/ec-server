'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/api/v1/user/:id', controller.user.info)
  // 首页轮播
  router.get('/api/v1/swiper', controller.swiper.getSwiper)
  router.get('/api/v1/grid', controller.grid.getGrid)

  router.get('/api/v1/thread', controller.thread.getThread)
  router.get('/api/v1/thread/:id', controller.thread.getThread)

  // 官网接口
  router.get('/api/v1/official/setting', controller.official.getSetting)
}
