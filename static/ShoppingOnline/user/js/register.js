$(function () {
    var $username = $('#username_input');

    $username.change(function () {

        var username = $username.val().trim();  //去掉空格

        if(username.length){
            //将用户名发送给服务器进行预校验
            $.getJSON('/app/checkuser/', {'username': username}, function (data) {
                // console.log(data);
                var $username_info = $('#username_info');

                if(data['status'] === 200){
                    $username_info.html('用户名可用').css('color', 'green');
                }else if(data['status'] === 901){
                    $username_info.html('用户名已存在').css('color', 'red');
                }
            })
        }
    })
})

function check() {

    var $username = $('#username_input');

    var username = $username.val().trim();

    if(!username){
        return false
    }

    var $email = $('#email_input');

    var email = $email.val().trim();

    if(!email){
        return false
    }

    var $password = $('#password_input');
    var password = $password.val();
    var $password_confirm = $('#password_confirm_input');
    var password_confirm = $password_confirm.val();
    if(password != password_confirm){
        return false
    }

    var info_color = $("#username_info").css('color');

    if(info_color == 'rgb(255, 0, 0)'){
        return false
    }

    var password_md = $password.val().trim();

    $password.val(hex_md5(password_md));

    return true
}












