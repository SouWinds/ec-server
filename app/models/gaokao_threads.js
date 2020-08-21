/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_threads', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '主题 id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '创建用户 id',
      references: {
        model: {
          tableName: 'gaokao_users',
        },
        key: 'id'
      }
    },
    last_posted_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '最后回复用户 id',
      references: {
        model: {
          tableName: 'gaokao_users',
        },
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '分类 id'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '类型：0普通 1长文 2视频 3图片'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '标题'
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00,
      comment: '价格'
    },
    free_words: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '付费主题可免费阅读字数'
    },
    post_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '回复数'
    },
    view_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '查看数'
    },
    rewarded_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '打赏数'
    },
    paid_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '付费数'
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
    is_approved: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '是否合法'
    },
    is_sticky: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '是否置顶'
    },
    is_essence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '是否加精'
    }
  }, {
    sequelize,
    tableName: 'gaokao_threads'
  });
};
