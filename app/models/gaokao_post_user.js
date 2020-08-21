/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_post_user', {
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '帖子 id',
      references: {
        model: {
          tableName: 'gaokao_posts',
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
    tableName: 'gaokao_post_user'
  });
};
