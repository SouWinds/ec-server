/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_operation_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '日志 id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '用户 id'
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: 'url路径'
    },
    method: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: '请求方式'
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      comment: 'ip 地址'
    },
    input: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'body请求数据'
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '日志类型:0后台操作'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '创建时间'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '更新时间'
    }
  }, {
    sequelize,
    tableName: 'gaokao_operation_logs'
  });
};
