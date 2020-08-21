/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_dialog', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '自增ID'
    },
    dialog_message_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '最新消息ID'
    },
    sender_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '发送人UID'
    },
    recipient_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '收信人UID'
    },
    recipient_read_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '收信人阅读时间'
    },
    sender_read_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '发送人阅读时间'
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
    tableName: 'gaokao_dialog'
  });
};
