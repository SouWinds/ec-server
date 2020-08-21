/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_thread_video', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '自增ID'
    },
    thread_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '主题 id'
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '帖子 id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '用户 id'
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '类型：0 视频 1 音频'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '视频状态 0:转码中 1转码完成 2转码失败'
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '转码失败原因'
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '文件名'
    },
    file_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '媒体文件唯一标识'
    },
    height: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '视频高'
    },
    width: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '视频宽'
    },
    duration: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00,
      comment: '视频时长'
    },
    media_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '媒体播放地址'
    },
    cover_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '媒体封面地址'
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
    tableName: 'gaokao_thread_video'
  });
};
