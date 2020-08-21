'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async find(uid) {
    // const { app, app: { model } } = this.ctx
    // const user = await model.User
    // console.log('UserService -> find -> this.ctx', user)
    // return user
  }
}

module.exports = UserService
