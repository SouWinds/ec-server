'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize

  const Attachment = app.model.define('gaokao_attachment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    uuid: { type: INTEGER },
    user_id: { type: INTEGER },
    type_id: { type: INTEGER },

    order: { type: INTEGER },
    type: { type: INTEGER },

    attachment: { type: TEXT },
    ip: { type: STRING },
    file_path: { type: STRING },
    file_name: { type: STRING },
    file_type: { type: STRING },
    file_size: { type: INTEGER },

    is_remote: { type: INTEGER },
    is_approved: { type: INTEGER },

    created_at: { type: DATE },
    updated_at: { type: DATE },
    // deleted_at: { type: DATE },
  })

  return Attachment
}
