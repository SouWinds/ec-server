/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597920257392_9854'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  // 数据库配置信息
  config.sequelize = {
    dialect: 'mysql',
    host: '114.67.208.187',
    port: 3306,
    database: 'gaokao',
    // 数据库连接的用户和密码
    username: 'gaokao',
    password: 'gaokao',
    // 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
    underscored: true,
    // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
    timezone: '+08:00',
  }
  return {
    ...config,
    ...userConfig,
  }
}
