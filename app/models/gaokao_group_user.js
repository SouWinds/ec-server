/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_group_user', {
    group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '用户组 id',
      references: {
        model: {
          tableName: 'gaokao_groups',
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
    expiration_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '用户组到期时间'
    }
  }, {
    sequelize,
    tableName: 'gaokao_group_user'
  });
};
