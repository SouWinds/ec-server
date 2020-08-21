/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_group_paid_users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '自增id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '所属用户'
    },
    group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '用户组 id'
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '订单 id'
    },
    operator_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '操作人'
    },
    delete_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '删除类型：1到期删除，2管理员修改，3用户复购'
    },
    expiration_time: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '用户组到期时间'
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
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '删除时间'
    }
  }, {
    sequelize,
    tableName: 'gaokao_group_paid_users'
  });
};
