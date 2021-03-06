'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/user/:id', controller.user.info)
  // 首页轮播
  router.get('/api/v1/swiper', controller.swiper.getSwiper)
  router.get('/api/v1/grid', controller.grid.getGrid)

  router.get('/api/v1/thread', controller.thread.getThread)
}
