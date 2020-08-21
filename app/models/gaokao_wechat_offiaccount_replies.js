/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_wechat_offiaccount_replies', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '规则名'
    },
    keyword: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '关键词'
    },
    match_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '匹配类型:0全匹配1半匹配'
    },
    reply_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '消息回复类型'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '回复文本内容'
    },
    media_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '素材ID'
    },
    media_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '素材类型:1图片2视频3语音4图文'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
      comment: '数据类型:0被关注回复1消息回复2关键词回复'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '是否开启:0关闭1开启'
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
    tableName: 'gaokao_wechat_offiaccount_replies'
  });
};
