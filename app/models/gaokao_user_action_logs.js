/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_user_action_logs', {
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
      comment: '操作用户 id'
    },
    action: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: "",
      comment: '操作'
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '备注'
    },
    log_able_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '模型 id'
    },
    log_able_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '模型'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '创建时间'
    }
  }, {
    sequelize,
    tableName: 'gaokao_user_action_logs'
  });
};
