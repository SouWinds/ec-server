'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/user/:id', controller.user.info)
  router.get('/api/v1/swiper', controller.swiper.getSwiper)
}
