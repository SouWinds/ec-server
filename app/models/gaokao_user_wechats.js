/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_user_wechats', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '用户 id',
      references: {
        model: {
          tableName: 'gaokao_users',
        },
        key: 'id'
      }
    },
    mp_openid: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: '公众号openid'
    },
    dev_openid: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: '开放平台openid'
    },
    min_openid: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: '小程序openid'
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: '微信昵称'
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '性别'
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: '省份'
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: '城市'
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: '国家'
    },
    headimgurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: '头像'
    },
    privilege: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "",
      comment: '用户特权信息'
    },
    unionid: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: '只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段'
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
    tableName: 'gaokao_user_wechats'
  });
};
