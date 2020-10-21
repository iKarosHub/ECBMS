// sequelize连接mysql数据库

// 导入sequelize模块
const Sequelize = require('sequelize');

// 导出连接
module.exports = new Sequelize(
  config.mysqlOptions.database, 
  config.mysqlOptions.username, 
  config.mysqlOptions.password, 
{
  // 连接地址
  host: config.mysqlOptions.host,
  // 连接数据库类型
  dialect: config.mysqlOptions.dialect,
  // 时区
  timezone: config.mysqlOptions.timezone,
  // 数据库连接池
  pool: config.mysqlOptions.pool
})