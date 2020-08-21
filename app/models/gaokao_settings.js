/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_settings', {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      comment: '设置项 key'
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '设置项 value'
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "default",
      primaryKey: true,
      comment: '设置项 tag'
    }
  }, {
    sequelize,
    tableName: 'gaokao_settings'
  });
};
