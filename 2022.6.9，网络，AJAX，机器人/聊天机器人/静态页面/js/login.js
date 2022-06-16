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

//针对密码的验证规则
const txtLoginPwd = new FieldValidator('txtLoginPwd', async function (val) {
if (!val){
    return '请填写密码'
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
        txtLoginPwd,
        );
    if(!result) {
        return;
    }
    const data = {
        loginId: login.input.value,
        loginPwd: txtLoginPwd.input.value,
    }
    const resp = await API.logIn(data);
    // debugger
    if(resp.code === 0) {
        //弹出框
        alert('登录成功');
        //跳转登录
        location.href = './index.html';
    }else {
        login.p.innerHTML = '账号或密码错误';
        txtLoginPwd.input.value = '';
    }
}