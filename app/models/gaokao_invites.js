/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_invites', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '邀请 id'
    },
    group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '默认用户组 id'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '类型:1普通用户2管理员'
    },
    code: {
      type: DataTypes.BIGINT(32),
      allowNull: false,
      defaultValue: "",
      comment: '邀请码'
    },
    dateline: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '邀请码生效时间'
    },
    endtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '邀请码结束时间'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '邀请用户 id'
    },
    to_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '被邀请用户 id'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '邀请码状态:0失效1未使用2已使用3已过期'
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
    tableName: 'gaokao_invites'
  });
};
