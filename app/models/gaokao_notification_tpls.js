/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_notification_tpls', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '模板状态:1开启0关闭'
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '通知类型:0系统1微信2短信'
    },
    type_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '类型名称'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '标题'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '内容'
    },
    vars: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '可选的变量'
    },
    template_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '模板ID'
    }
  }, {
    sequelize,
    tableName: 'gaokao_notification_tpls'
  });
};
