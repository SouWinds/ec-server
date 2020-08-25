'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 开启数据库连接插件
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  swaggerdoc: {
    enable: true, // 是否启用。
    package: 'egg-swagger-doc', // 指定包名称。
  },
}
