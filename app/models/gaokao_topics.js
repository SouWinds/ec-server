/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_topics', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '话题ID'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: 'user_id'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '话题名称'
    },
    thread_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '主题数'
    },
    view_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '阅读数'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '更新时间'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '创建时间'
    }
  }, {
    sequelize,
    tableName: 'gaokao_topics'
  });
};
