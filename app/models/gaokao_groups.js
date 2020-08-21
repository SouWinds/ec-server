/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_groups', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '用户组 id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '用户组名称'
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: '类型'
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: '颜色'
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: 'icon'
    },
    default: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否默认'
    },
    is_display: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否显示在用户名后'
    },
    is_paid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否收费：0不收费，1收费'
    },
    fee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00,
      comment: '收费金额'
    },
    days: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '付费获得天数'
    }
  }, {
    sequelize,
    tableName: 'gaokao_groups'
  });
};
