'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT, GEOGRAPHY } = app.Sequelize

  const Post = app.model.define('gaokao_post', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER },
    thread_id: { type: INTEGER },
    reply_post_id: { type: INTEGER },
    reply_user_id: { type: INTEGER },

    content: { type: TEXT },
    ip: { type: STRING },
    port: { type: INTEGER },
    reply_count: { type: INTEGER },
    like_count: { type: INTEGER },

    is_first: { type: INTEGER },
    is_comment: { type: INTEGER },
    is_approved: { type: INTEGER },

    created_at: { type: DATE },
    updated_at: { type: DATE },
    deleted_at: { type: DATE },

    deleted_user_id: { type: INTEGER },

    longitude: { type: GEOGRAPHY },
    latitude: { type: GEOGRAPHY },
  })

  return Post
}
