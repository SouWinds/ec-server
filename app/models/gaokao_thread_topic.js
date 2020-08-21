/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_thread_topic', {
    thread_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '主题ID',
      references: {
        model: {
          tableName: 'gaokao_threads',
        },
        key: 'id'
      }
    },
    topic_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '话题ID',
      references: {
        model: {
          tableName: 'gaokao_topics',
        },
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '创建时间'
    }
  }, {
    sequelize,
    tableName: 'gaokao_thread_topic'
  });
};
