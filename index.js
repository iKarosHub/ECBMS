// 入口层

global.__basename = __dirname;  //当前文件绝对路径

// 导入配置文件
global.config = require(__basename + '/config/config.js');

// 导入express模块
const express = require('express');

// 导入数据库连接
global.sequelize = require(__basename + '/db/connect.js');
// 导入模型
global.Model = require(__basename + '/db/model/model.js');

// 导入路由层
const routes = require(__basename + '/routes/routes.js');

// 创建express实例
const app = express();

// 加载所有路由
routes(app);

// 处理404
app.use((req, res) => {
  res.status(404).send("找不到资源");
})

// 处理500
app.use((err, req, res) => {
  if(err){
    res.status(500).send("后台服务器出错");
  }
})

// 监听端口
app.listen(config.serverOptions.port, () => {
  console.log(`The server running at ${config.serverOptions.host}:${config.serverOptions.port}`);
})