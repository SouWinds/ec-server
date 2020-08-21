/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_user_wallet_cash', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '提现 id'
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '提现用户 id'
    },
    cash_sn: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '提现交易编号'
    },
    cash_charge: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '提现手续费'
    },
    cash_actual_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '实际提现金额'
    },
    cash_apply_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '提现申请金额'
    },
    cash_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '提现状态：1：待审核，2：审核通过，3：审核不通过，4：待打款， 5，已打款， 6：打款失败'
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: '备注或原因'
    },
    trade_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '交易时间'
    },
    trade_no: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '交易号'
    },
    error_code: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '错误代码'
    },
    error_message: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '交易失败描叙'
    },
    refunds_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '返款状态，0未返款，1已返款'
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
    tableName: 'gaokao_user_wallet_cash'
  });
};
