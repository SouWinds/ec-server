/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_ec_swipers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    img_src: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order: {
      type: DataTypes.STRING,
      allowNull: true
    },
    target: {
      type: DataTypes.STRING,
      allowNull: true
    },
    opentime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deadtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gaokao_ec_swipers'
  });
};
