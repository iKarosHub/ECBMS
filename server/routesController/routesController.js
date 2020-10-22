// 路由控制器层

// 导入工具库
const utils = require(__basename + '/utils/utils.js');

// 导入api 
const api = require(__basename + '/api/api.js');

class RoutesController {
  // 注册
  register(req, res) {
    // req: 请求对象
    // res: 响应对象
    console.log('req.body ==> ', req.body);

    // 加密密码
    let password = utils.encodeString(req.body.password);
    // console.log(password);

    // 生成用户id
    let userId = '_u' + new Date().getTime();
    // console.log(userId);

    // 用户数据
    let o = {
      password,
      userId,
      email: req.body.email,
      nickname: req.body.nickname
    }

    // 检查邮箱是否被注册
    api.findData("User", {
      email: req.body.email
    }, ['userId']).then(result =>{
      console.log("result ==> ", result);
      if(result.length === 0){
        // 没有被注册
        // 将用户数据写入mysql数据库中
        api.createData('User', o).then(result => {
          res.send({msg: '注册成功', code: 100, result});
        }).catch(err => {
          console.log('err ==> ', err);
          res.send({msg: '注册失败', code: 101});
        })
      }else{
        // 邮箱已经被注册
        res.send({msg: '邮箱已经被注册', code: 102});
      }
    }).catch(err => {
      console.log("err ==> ", err);
      res.send({msg: '注册失败', code: 101});
    })


  }
}

// 导出实例
module.exports = new RoutesController();