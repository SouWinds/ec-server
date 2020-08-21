/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_pay_notify', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '支付通知 id'
    },
    payment_sn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: '支付编号'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '付款人 id'
    },
    trade_no: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: "",
      comment: '商户平台交易号'
    },
    status: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '0未接受到通知，1收到通知'
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
    tableName: 'gaokao_pay_notify'
  });
};
