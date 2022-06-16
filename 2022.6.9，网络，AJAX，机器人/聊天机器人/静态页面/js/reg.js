    //针对账号的验证规则
    const login = new FieldValidator('txtLoginId', async function (val) {
            if (!val){
                return '请填写账号'
            }
            const resp = await API.exists(val);
            //判断账号是否存在
            if(resp.data){
                //账号已存在
                return '账号已存在，请重新输入账号';
            }
    })

    //针对昵称的验证规则
    const txtNicknameLogin = new FieldValidator('txtNickname', async function (val) {
        if (!val){
            return '请填写昵称'
        }
})

   //针对密码的验证规则
   const txtLoginPwd = new FieldValidator('txtLoginPwd', async function (val) {
    if (!val){
        return '请填写密码'
    }
})

   //针对再次确认密码的验证规则
   const txtLoginPwdConfirm = new FieldValidator('txtLoginPwdConfirm', async function (val) {
    if (!val){
        return '请再次填写确认密码'
    }
    if(val !== txtLoginPwd.input.value) {
        return '两次密码不一致'
    }
})

    const from = $('.user-form');

//给form表单注册 提交事件
    from.onsubmit = async function (e) {
        //阻止事件默认行为
        e.preventDefault();
        // console.log('tijiao ');
        const result = await FieldValidator.validate(
            login,
            txtNicknameLogin,
            txtLoginPwd,
            txtLoginPwdConfirm
            );
        if(!result) {
            return;
        }
            // console.log(result);
        const data = {
            loginId: login.input.value,
            nickname: txtNicknameLogin.input.value,
            loginPwd: txtLoginPwd.input.value,
        }
        // console.log(data);
        const resp = await API.register(data);
        // debugger
        if(resp.code === 0) {
            //弹出框
            alert('注册成功,点击确定，跳转到登录页面');
            //跳转登录
            location.href = './login.html';
        }
    }