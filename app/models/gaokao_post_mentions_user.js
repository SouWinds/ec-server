/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_post_mentions_user', {
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'gaokao_posts',
        },
        key: 'id'
      }
    },
    mentions_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'gaokao_users',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gaokao_post_mentions_user'
  });
};
