/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_user_login_fail_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '日志 id'
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      comment: 'ip 地址'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '用户 id'
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '用户名'
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '错误次数'
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
    tableName: 'gaokao_user_login_fail_log'
  });
};
