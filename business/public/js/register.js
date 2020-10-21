$(function(){
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
})
