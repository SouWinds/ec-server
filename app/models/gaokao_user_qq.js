/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_user_qq', {
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
    openid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: 'openid'
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: 'qq昵称'
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '性别'
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '省份'
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '城市'
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
    tableName: 'gaokao_user_qq'
  });
};
