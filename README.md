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
6. 解决CORS 跨域资源共享
    ```javascript
    //------------------CORS 跨域资源共享----------------------------
//app.all(*)表示所有请求路径必须经过
app.all('*', (req, res, next) => {

  //允许跨域地址
  // res.header("Access-Control-Allow-Origin", req.headers.origin);

  //*表示允许所有域请求，在实际开发中，一般指定允许某个域请求，如上面设置
  res.header("Access-Control-Allow-Origin", "*");

  //如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  //该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  //该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可
  //res.header('Access-Control-Allow-Credentials', true);

  //允许通过
  next();

});
// ==========================================================================
    ```
7. 安装body-parser请求体解析模块，将post请求体参数解析为json
   > npm i body-parse --save
8. 安装密码加密模块
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

