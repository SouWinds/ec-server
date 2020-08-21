/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_post_goods', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '商品 id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '用户 id'
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: '帖子 id'
    },
    platform_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '平台商品 id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '商品标题'
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00,
      comment: '价格'
    },
    image_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '商品封面图'
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '商品来源:0淘宝 1天猫 2京东 等'
    },
    status: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '商品状态:0正常 1失效/下架'
    },
    ready_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '预解析内容'
    },
    detail_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '解析详情页地址'
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
    tableName: 'gaokao_post_goods'
  });
};
