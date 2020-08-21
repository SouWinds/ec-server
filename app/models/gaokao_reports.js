/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_reports', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '举报 id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '用户 id'
    },
    thread_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '主题 id'
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '回复 id'
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '举报类型:0个人主页 1主题 2评论/回复'
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '举报理由'
    },
    status: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '举报状态:0未处理 1已处理'
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
    tableName: 'gaokao_reports'
  });
};
