/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_user_wallet_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '钱包明细 id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '明细所属用户 id'
    },
    change_available_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '变动可用金额'
    },
    change_freeze_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '变动冻结金额'
    },
    change_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '10：提现冻结，11：提现成功，12：撤销提现解冻； 31：打赏收入，32：人工收入； 50：人工支出'
    },
    change_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '变动描述'
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '关联订单记录ID'
    },
    user_wallet_cash_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '关联提现记录ID'
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
    tableName: 'gaokao_user_wallet_logs'
  });
};
