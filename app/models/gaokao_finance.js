/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_finance', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '自增ID'
    },
    income: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '用户充值金额'
    },
    withdrawal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '用户提现金额'
    },
    order_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: '订单数量'
    },
    order_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '订单金额'
    },
    total_profit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '平台盈利'
    },
    register_profit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '注册收入'
    },
    master_portion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '打赏贴的分成'
    },
    withdrawal_profit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '提现手续费收入'
    },
    created_at: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: '创建时间'
    }
  }, {
    sequelize,
    tableName: 'gaokao_finance'
  });
};
