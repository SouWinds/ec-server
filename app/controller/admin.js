'use strict'

const Controller = require('egg').Controller
/**
 * @Controller 后端接口
 */
class AdminController extends Controller {
  /**
   * @summary 上传文件
   * @description /密码/类型
   * @router post /api/v1/admin/file/upload
   * @request body uploadFile *body
   * @response 200 baseResponse 创建成功
   */
  async uploadFile() {
    const { ctx } = this
    const result = await ctx.model.Grid.findAll({})
    this.ctx.body = "result"
  }
}
module.exports = AdminController


// // // 在 app/controller/user.js
// // 'use strict';
// // const Controller = require('egg').Controller;
// // // var COS = require('cos-nodejs-sdk-v5');
// // const path = require('path');
// // var cos = new COS({
// //     SecretId: 'XXXXXXXXXXXX',
// //     SecretKey: 'XXXXXXXXx',//私钥
// // });
// // class Uploadcontroller extends Controller {
// //     async upload(){
// //         const { ctx,app} = this;
// //         const stream = await this.ctx.getFileStream();
// //         const filename = Date.now() + path.extname(stream.filename).toLocaleLowerCase();
// //         cos.putObject({
// //             Bucket: 'XXXXXXXXX', /* Bucket,名称 必须 */
// //             Region: 'ap-beijing',    /* 所属地域 必须 */
// //             Key: filename,            /* 必须 */
// //             Body:stream, // 上传文件对象
// //             onProgress: function(progressData) {
// //                 console.log(JSON.stringify(progressData));//返回信息，包括路径
// //             }
// //         }, function(err, data) {
// //             console.log(err || data);
// //         });
// //     }
// // }
// // module.exports = Uploadcontroller;