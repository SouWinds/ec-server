/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '订单 id'
    },
    order_sn: {
      type: DataTypes.BIGINT(22),
      allowNull: false,
      defaultValue: "",
      comment: '订单编号'
    },
    payment_sn: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '支付编号'
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '订单总金额'
    },
    master_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00,
      comment: '站长分成金额'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '付款人 id'
    },
    payee_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '收款人 id'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '交易类型：1注册、2打赏、3付费主题'
    },
    group_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '用户组 id'
    },
    thread_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '主题 id'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '订单状态：0待付款；1已付款；2.取消订单；3支付失败；'
    },
    payment_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '付款方式：微信（10：pc扫码，11：h5支付，12：微信内支付'
    },
    is_anonymous: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '是否匿名(0否1是)'
    },
    expired_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '付费注册过期时长'
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
    tableName: 'gaokao_orders'
  });
};
