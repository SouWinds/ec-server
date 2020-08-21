/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_session_tokens', {
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: 'token'
    },
    scope: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '作用域'
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '负载'
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: '用户 id'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '创建时间'
    },
    expired_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '过期时间'
    }
  }, {
    sequelize,
    tableName: 'gaokao_session_tokens'
  });
};
