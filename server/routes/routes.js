// 路由层

// 导入路由控制器层
const routesController = require(__basename + '/routesController/routesController.js');

// 导出模块
module.exports = (app) => {
  // 路由
  app.post('/register', routesController.register);
  // 获取验证码
  app.post('/code', routesController.getCode);
}