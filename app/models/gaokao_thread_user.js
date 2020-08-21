/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_thread_user', {
    thread_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '主题 id',
      references: {
        model: {
          tableName: 'gaokao_threads',
        },
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '用户 id',
      references: {
        model: {
          tableName: 'gaokao_users',
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
    tableName: 'gaokao_thread_user'
  });
};
