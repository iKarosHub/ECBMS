// 模型

// 收集所有模型
const User = require(__basename + '/db/model/user.js');
const Code = require(__basename + '/db/model/code.js');

// 导出模型
module.exports = {
  User,
  Code
}