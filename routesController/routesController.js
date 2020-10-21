// 路由控制器层

class RoutesController {
  // 注册
  register(req, res) {
    // req: 请求对象
    // res: 响应对象
    res.send({msg: '注册成功', code: 100});
  }
}

// 导出实例
module.exports = new RoutesController();