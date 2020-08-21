/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_mobile_codes', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '验证码 id'
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: '手机号'
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: '验证码'
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: '验证类型'
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '验证状态'
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      comment: 'ip'
    },
    expired_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '验证码过期时间'
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
    tableName: 'gaokao_mobile_codes'
  });
};
