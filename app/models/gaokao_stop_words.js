/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_stop_words', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '敏感词 id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '创建用户 id'
    },
    ugc: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: '用户内容处理方式'
    },
    username: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: '用户名处理方式'
    },
    find: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '敏感词或查找方式'
    },
    replacement: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '替换词或替换规则'
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
    tableName: 'gaokao_stop_words'
  });
};
