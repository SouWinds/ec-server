/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_emoji', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '表情 id'
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '表情分类'
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '表情地址'
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '表情符号'
    },
    order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '显示顺序'
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
    tableName: 'gaokao_emoji'
  });
};
