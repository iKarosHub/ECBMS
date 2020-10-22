// 工具库

// 导入加密模块
const crypto = require('crypto');

// 导入发邮件模块
const nodemailer = require('nodemailer');
// 创建发邮件配置
let transport = nodemailer.createTransport({
  //主机
  host: 'smtp.163.com',

  //端口, 25端口在阿里云服务器禁用的
  port: 465,

  //当端口为465，secure需要设置为true
  secure: true,

  //身份授权
  auth: {
    //发件地址
    user: 'ikaroshub@163.com',

    //授权码
    pass: 'MOSJQSBXYRMTLSRF'
  }

})

class Utils{
  // 加密字符串
  encodeString(value){
    // 以md5加密
    let md5 = crypto.createHash('md5');
    return md5.update(value).digest('hex');
  }

  // 发邮件
  sendEmail(emails, code, fn){
    // fn:发邮件完成后，执行的回调函数，fn(err, data){}
    //    如果fn的err存在，则表明发邮件失败
    //emails: string, 123@qq.com,abc@126.com,...
    transport.sendMail({
      //发件地址
      from: 'ikaroshub@163.com',

      //接收地址
      to: emails,
      // cc: 'ikaroshub@163.com',

      //主题
      subject: '一封来自iKarosHub的邮件',

      //邮箱内容
      text: `    你好！
              这是一封来自iKarosHub的邮件！
              接收好给您的线索${code}，
              时效性仅5分钟，
              请按时使用`
    }, fn)
  }

}

module.exports = new Utils();