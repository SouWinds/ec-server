/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '用户 id'
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '用户名',
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '密码'
    },
    pay_password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: '支付密码'
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: '手机号'
    },
    signature: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '签名'
    },
    last_login_ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      comment: '最后登录 ip 地址'
    },
    last_login_port: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '最后登录端口'
    },
    register_ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      comment: '注册ip'
    },
    register_port: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '注册端口'
    },
    register_reason: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: '注册原因'
    },
    username_bout: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '用户名修改次数'
    },
    thread_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '主题数'
    },
    follow_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '关注数'
    },
    fans_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '粉丝数'
    },
    liked_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '点赞数'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '用户状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略'
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '头像地址'
    },
    identity: {
      type: DataTypes.CHAR(18),
      allowNull: false,
      defaultValue: "",
      comment: '身份证号码'
    },
    realname: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: '身份证姓名'
    },
    avatar_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '头像修改时间'
    },
    login_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '最后登录时间'
    },
    joined_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '付费加入时间'
    },
    expired_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '付费到期时间'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '创建时间'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '更新时间'
    }
  }, {
    sequelize,
    tableName: 'gaokao_users'
  });
};
