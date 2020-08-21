/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_categories', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '分类 id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '分类名称'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '分类描述'
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '分类图标'
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '显示顺序'
    },
    property: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '属性：0 正常 1 首页展示'
    },
    thread_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '主题数'
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: 'ip 地址'
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
    tableName: 'gaokao_categories'
  });
};
