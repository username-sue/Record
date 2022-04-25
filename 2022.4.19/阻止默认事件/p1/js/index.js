// 完成表单验证
/**
 * 思路；
 * 第一步；创建一个函数，验证账号是否为空，是否输入正确；
 * 1，获取要操作的dom元素；
 * 2，判断文本框里面是否有值，如果为空，那就给P元素插入文字为；账号不能为空
 * 同时设置div的类样式为报错的颜色，
 * 3,接着再次判断，文本框里面的值是否是小于三位数或者大于12位的，
 * 如果不是那就给p标签里面插入文字为；账号是3-12位；
 * 4，以上判断中如果都为正确那就，else，让div的类样式恢复正常；
 * 5，最后返回一个boolen值,判断错误返回；false, 正确返回；true；
 * 
 * 第二步；创建一个函数，验证密码是否为空，是否输入正确；
 * 1，验证密码同验证账号是一样的步骤；
 * 
 * 第三步；创建一个函数，这里为登录框；
 * 1；也就是需要把账号和密码的验证都结合起来；
 * 2，在函数体里调用验证账号和密码的函数，并且定义一个变量把把函数调用赋给变量；
 * 3，通过定义好的变量，把验证好的账号和密码做比较 
 * && 如果两边都为true，那就为true,否则为false，译为验证不通过
 * 4，最后结果return 返回。
 * 
 * 第四步；给账号和密码框注册input事件，给form表单注册submit提交事件
 * 注；给form表单注册事件，
 * form元素的submit事件，浏览器会提交表单，最终导致页面刷新
 * 也就就是说当点击登录按钮时，不管密码账号是否正确，浏览器都会提交表单
 * 所以，这里需要判断函数登录框这里验证结果是否都为true,
 * 如果为false，那就需要阻止默认事件；e.preventDefault();
 */

//第一验证账号；
function magID(){
    var div = document.querySelector('#magid');
    var input = document.querySelector('#magid input');
    var p  = document.querySelector('.msg');
    //判断文本框的值是否为空
    if(!input.value){
        p.innerText = '账号不能为空';
        div.className = 'form-item err';
        return false;
    }else if(input.value.length < 3 || input.value.length > 12){
        p.innerText = '账号为3-12位';
        div.className = 'form-item err';
        return false;
    }else{
        div.className = 'form-item';
        return true;
    }


    //判断错误信息  老师写法
    // var err = '';
    // var value = input.value.trim();
    // if(!value){
    //     err = '账号不能为空';
    // }else if(value.length < 3 || value.length > 12){
    //     err = '账号为3-12位';
    // }
    // //把错误信息加到P元素里
    // p.innerText = err;
    // //判断信息是否有误
    // if(err){
    //     div.className = 'form-item err';
    // }else{
    //     div.className = 'form-item';
    // }
    // console.log(div,input,p);
}

//第二步验证密码
function password(){
    var div = document.querySelector('#password');
    var input = document.querySelector('#password input');
    var p = document.querySelector('.pas');
    //判断密码是否正确
    if(input.value === ''){
        p.innerText = '密码不能为空';
        div.className = 'form-item err';
        return false;
    }else if(input.value.length < 6 || input.value.length > 16){
        p.innerText = '密码为6-16位';
        div.className = 'form-item err';
        return false;
    }else{
        div.className = 'form-item';
        return true;
    }
}

//第三步，验证密码和账号
function signIn(){
    var one = magID();
    var tow = password();
    return one && tow ;
}

//第四步，添加事件
var mag = document.querySelector('#magid input');
var pas = document.querySelector('#password input');
var from = document.querySelector('.form-container');
mag.addEventListener('input',magID);
pas.addEventListener('input',password);
from.addEventListener('submit',function(e){
//老师写法
//  var vfy = signIn();
//  if(!vfy){
//     e.preventDefault();
//  }

//自己写的 组织默认事件
if(signIn() === false){
    e.preventDefault();
}else{
    signIn();
}
})
