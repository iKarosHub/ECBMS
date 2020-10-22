// 工具库

// 导入加密模块
const crypto = require('crypto');

class Utils{
  // 加密字符串
  encodeString(value){
    // 以md5加密
    let md5 = crypto.createHash('md5');
    return md5.update(value).digest('hex');
  }
}

module.exports = new Utils();