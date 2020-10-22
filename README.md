# ECBMS
电商后台管理系统 E-commerce background management system

- 基于Nodejs
- 基于Bootstrap

# 后台服务器架构设计

**server**  
&nbsp;&nbsp;&nbsp;&nbsp;|- index.js 服务器入口  
&nbsp;&nbsp;&nbsp;&nbsp;|- config 配置  
&nbsp;&nbsp;&nbsp;&nbsp;|- whiteList 白名单  
&nbsp;&nbsp;&nbsp;&nbsp;|- routes 路由层  
&nbsp;&nbsp;&nbsp;&nbsp;|- routesController 路由控制器层  
&nbsp;&nbsp;&nbsp;&nbsp;|- utils 工具库  
&nbsp;&nbsp;&nbsp;&nbsp;|- api API层  
&nbsp;&nbsp;&nbsp;&nbsp;|- lib ORM层  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|- ORM api  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|- model 模型  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|- connect.js 连接配置  


## 开发步骤
1. 初始化package.json
   > npm init
2. 安装express服务器
   > npm i express --save
3. 安装sequelize模块，用于操作数据库
   > npm i sequelize --save
4. 安装你所使用的数据库驱动模块
   > npm install --save mysql2
5. 创建数据库: ecbmsdb

6. 安装body-parser请求体解析模块，将post请求体参数解析为json
   > npm i body-parse --save
7. 安装密码加密模块
   > npm i crypto --save



# 商家后台视图设计

**business**  
&nbsp;&nbsp;&nbsp;&nbsp;|- public 静态资源  
&nbsp;&nbsp;&nbsp;&nbsp;|- views 视图层   

## 开发步骤

1. 初始化package.json
   > npm init -y
2. 安装express、ejs模块
   > npm i express ejs --save
3. 添加Bootstap相关依赖

