$(function(){

  // 创建表单验证实例
  let validForm = new ValidForm();

  // 重新获取验证码时间
  let time = 5;
  // 获取邮箱验证码
  $('#getcode').on('click', function(){

    $(this).text(time + 's 后重新发送').prop('disabled', true);

    const timer = setInterval(() => {
      if(time == 0){
        clearInterval(timer);
        $(this).text('获取邮箱验证码').prop('disabled', false);
        time = 5;
      }else{
        time--;
        $(this).text(time + 's 后重新发送');
      }
    }, 1000)
  })

  //验证表单控件方法 
  function valid(fnName){
    // 获取控件的输入信息
    let value = $(this).val();
    // console.log("value ==>", value);

    // 如果不正确显示错误信息
    if(!validForm[fnName](value)){
      $(this).next().show().attr('name', 1);
    }else{
      // 如果正确，收集信息
      $(this).next().hide().removeAttr('name');
    }
  }

  // 验证邮箱
  $('#email').on('change', function(){
    // console.log('this--->', this);
    // this: 指向当前控件
    valid.call(this, 'isEmail');
  })

  // 验证昵称
  $('#nickname').on('change', function(){
    valid.call(this, 'isNickname');
  })

  // 验证密码
  $('#password').on('change', function(){
    valid.call(this, 'isPassword');
  })

  // 验证验证码
  $('#code').on('change', function(){
    valid.call(this, 'isCode');
  })

  // 注册
  $('#register').on('click', function(){
    // 是否为空
    let isEmpty = false;

    // 检查表单是否填写完整
    $('.form-control').each(function(){
      // 获取元素的值
      let value = $(this).val();
      // console.log('value ==> ', value);

      if(value == ''){
        isEmpty = true;
        $(this).next().show().attr('name', 1);
        // 返回false不再遍历后面元素
        // 打断终止
        return false;
      }
    })

    // 表单存在空，则拦截
    if(isEmpty){
      return ;
    }

    // 验证表单是否存在错误信息
    let isHasErr = $('.err-msg[name="1"]').length > 0;
    // console.log('isHasErr ==> ', isHasErr);
    
    // 如果没有错误，则发送注册请求
    if(!isHasErr) {
      // 获取表单信息
      let userInfo = {};
      $('.form-control').each(function(){
        // 获取id
        let id = $(this).attr('id');
        userInfo[id] = $(this).val();
      })

      // 发起注册请求
      console.log('发起注册请求');
      $.ajax({
        // 请求方式
        type: "POST",
        // 请求路径
        url:'http://localhost:9090/register',
        // 请求参数
        data: userInfo,
        // 成功后执行
        success: function(resule){
          console.log('result ==> ', resule);
        }

      })

    }
  })
})
