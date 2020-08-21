/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_user_wallets', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '钱包所属人 id'
    },
    available_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '可用金额'
    },
    freeze_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '冻结金额'
    },
    wallet_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '钱包状态:0正常，1冻结提现'
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
    tableName: 'gaokao_user_wallets'
  });
};
