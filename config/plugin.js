'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 开启数据库连接插件
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
}
