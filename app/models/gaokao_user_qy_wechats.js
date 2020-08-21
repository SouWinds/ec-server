/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_user_qy_wechats', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '用户 id'
    },
    qy_userid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '企业微信企业用户id, corpid_userid联合全局唯一'
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '企业微信昵称'
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '性别'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '邮箱'
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '电话'
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '地址'
    },
    headimgurl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '头像'
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
    tableName: 'gaokao_user_qy_wechats'
  });
};
