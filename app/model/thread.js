'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Thread = app.model.define('gaokao_thread', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER },
    last_posted_user_id: { type: INTEGER },
    category_id: { type: INTEGER },
    title: { type: STRING },
    price: { type: INTEGER },
    free_words: { type: INTEGER },
    post_count: { type: INTEGER },
    view_count: { type: INTEGER },
    rewarded_count: { type: INTEGER },
    paid_count: { type: INTEGER },
    is_approved: { type: INTEGER },
    is_sticky: { type: INTEGER },
    is_essence: { type: INTEGER },
    created_at: { type: DATE },
    updated_at: { type: DATE },
    deleted_user_id: { type: INTEGER },
  })

  return Thread
}
