/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_attachments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '附件 id'
    },
    uuid: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      comment: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '用户 id'
    },
    type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '类型数据ID(post_id,dialog_message_id…)'
    },
    order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '附件排序'
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '附件类型(0帖子附件，1帖子图片，2帖子视频，3帖子音频，4消息图片)'
    },
    is_approved: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: '是否合法'
    },
    attachment: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '文件系统生成的名称'
    },
    file_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '文件路径'
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '文件原名称'
    },
    file_size: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '文件大小'
    },
    file_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '文件类型'
    },
    is_remote: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否远程附件'
    },
    ip: {
      type: DataTypes.STRING(45),
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
    tableName: 'gaokao_attachments'
  });
};
