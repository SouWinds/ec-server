'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE, BIGINT } = app.Sequelize

  const User = app.model.define('gaokao_user', {
    id: {
      autoIncrement: true,
      type: BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '用户 id'
    },
    username: {
      type: STRING,
      allowNull: false,
      comment: '用户名',
      unique: true
    },
    password: {
      type: STRING,
      allowNull: false,
      comment: '密码'
    },
    pay_password: {
      type: STRING,
      allowNull: false,
      defaultValue: "",
      comment: '支付密码'
    },
    mobile: {
      type: STRING,
      allowNull: false,
      defaultValue: "",
      comment: '手机号'
    },
    signature: {
      type: STRING,
      allowNull: false,
      defaultValue: "",
      comment: '签名'
    },
    last_login_ip: {
      type: STRING,
      allowNull: false,
      defaultValue: "",
      comment: '最后登录 ip 地址'
    },
    last_login_port: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '最后登录端口'
    },
    register_ip: {
      type: STRING,
      allowNull: false,
      defaultValue: "",
      comment: '注册ip'
    },
    register_port: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '注册端口'
    },
    register_reason: {
      type: STRING,
      allowNull: false,
      defaultValue: "",
      comment: '注册原因'
    },
    username_bout: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '用户名修改次数'
    },
    thread_count: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '主题数'
    },
    follow_count: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '关注数'
    },
    fans_count: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '粉丝数'
    },
    liked_count: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '点赞数'
    },
    status: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '用户状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略'
    },
    avatar: {
      type: STRING,
      allowNull: false,
      defaultValue: "",
      comment: '头像地址'
    },
    identity: {
      type: BIGINT(18),
      allowNull: false,
      defaultValue: "",
      comment: '身份证号码'
    },
    realname: {
      type: STRING,
      allowNull: false,
      defaultValue: "",
      comment: '身份证姓名'
    },
    avatar_at: {
      type: DATE,
      allowNull: true,
      comment: '头像修改时间'
    },
    login_at: {
      type: DATE,
      allowNull: true,
      comment: '最后登录时间'
    },
    joined_at: {
      type: DATE,
      allowNull: true,
      comment: '付费加入时间'
    },
    expired_at: {
      type: DATE,
      allowNull: true,
      comment: '付费到期时间'
    },
    created_at: {
      type: DATE,
      allowNull: false,
      comment: '创建时间'
    },
    updated_at: {
      type: DATE,
      allowNull: false,
      comment: '更新时间'
    }
  })

  return User
}
