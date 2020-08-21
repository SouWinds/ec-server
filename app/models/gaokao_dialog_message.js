/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_dialog_message', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '自增ID'
    },
    dialog_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '会话ID'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '用户ID'
    },
    attachment_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '附件ID'
    },
    message_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '内容'
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
    tableName: 'gaokao_dialog_message'
  });
};
