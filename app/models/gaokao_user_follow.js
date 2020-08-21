/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_user_follow', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '自增ID'
    },
    from_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '关注人',
      references: {
        model: {
          tableName: 'gaokao_users',
        },
        key: 'id'
      }
    },
    to_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '被关注人',
      references: {
        model: {
          tableName: 'gaokao_users',
        },
        key: 'id'
      }
    },
    is_mutual: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '是否互相关注：0否 1是'
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
    tableName: 'gaokao_user_follow'
  });
};
