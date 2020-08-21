/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_notifications', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '通知 id'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '通知类型'
    },
    notifiable_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notifiable_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '通知内容'
    },
    read_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '通知阅读时间'
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
    tableName: 'gaokao_notifications'
  });
};
