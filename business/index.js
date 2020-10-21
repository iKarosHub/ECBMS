const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

// -----------html渲染--------------------------
// 设置模板路径(ps: 第一个参数为views)
app.set('views', path.resolve(__dirname, 'views'));
// 设置模板引擎类型为HTML
app.set('view engine', 'html');
// 设置ejs模板引擎解析 .html 文件
app.engine('.html', ejs.__express);

// -----------加载静态资源-----------------------
app.use(express.static(path.resolve(__dirname, 'public')));



// 路由配置
app.get('/', (req, res) => {
  // 渲染页面
  res.render('register');
})

app.listen(8080, () => {
  console.log('The business server running at http://localhost:8080');
})