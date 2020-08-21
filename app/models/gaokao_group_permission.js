/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_group_permission', {
    group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '用户组 id'
    },
    permission: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '权限名称'
    }
  }, {
    sequelize,
    tableName: 'gaokao_group_permission'
  });
};
