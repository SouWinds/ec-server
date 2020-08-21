'use strict'

/* egg_folder/app/contract/format.js */
module.exports = {
  info: { // 这个名字对应上面 Controller 注释的@response 的 JsonBody。
    // result: { type: 'string' }, // 服务器返回的数据。    
    id: { type: 'string', description: 'id 唯一键', required: true, example: '1' },
  },
}
