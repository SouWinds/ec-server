/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gaokao_post_mod', {
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: '帖子 id',
      references: {
        model: {
          tableName: 'gaokao_posts',
        },
        key: 'id'
      }
    },
    stop_word: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '触发的敏感词，半角逗号隔开'
    }
  }, {
    sequelize,
    tableName: 'gaokao_post_mod'
  });
};
