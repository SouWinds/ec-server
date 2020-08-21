/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_ec_categories', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    target: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ctime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    utime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gaokao_ec_categories'
  });
};
