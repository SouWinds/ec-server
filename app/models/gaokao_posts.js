/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '回复 id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '发表用户 id',
      references: {
        model: {
          tableName: 'gaokao_users',
        },
        key: 'id'
      }
    },
    thread_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '关联主题 id'
    },
    reply_post_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '回复 id'
    },
    reply_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '回复用户 id'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '内容'
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      comment: 'ip 地址'
    },
    port: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '端口'
    },
    reply_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '关联回复数'
    },
    like_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '喜欢数'
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0000000,
      comment: '经度'
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0000000,
      comment: '纬度'
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
    },
    deleted_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '删除用户 id',
      references: {
        model: {
          tableName: 'gaokao_users',
        },
        key: 'id'
      }
    },
    is_first: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否首个回复'
    },
    is_comment: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否是回复回帖的内容'
    },
    is_approved: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: '是否合法'
    }
  }, {
    sequelize,
    tableName: 'gaokao_posts'
  });
};
