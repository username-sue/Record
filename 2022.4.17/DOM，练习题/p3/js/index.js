/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
//当不选中时按钮颜色变暗
/**
 * 思路；
 * 第一步，在html文件里面找到对应的input多选框，和按钮，获取对应的dom元素
 * 第二步，判断input里面的checked属性是否选中，
 * 如果选中就给注册按钮里的disabled的‘禁用’属性，设置false不禁用；
 * else如果不选中，则就给按钮的disabled，设置禁用；
 * 这样不选中时，按钮颜色就不会变，选中时按钮颜色变暗；
 * 第三步，在浏览器页面里面调用函数验证。
 * 
 */
function setSubmitButtonStatus() {
    // var input = document.querySelector('.policy input');
    // var but = document.querySelector('button[type = "submit"]');
    // //错误；这里的input.checked的这个单词写错了checkbox这是错的
    // if(input.checked){
    //     but.disabled = false;
    // }else{
    //     but.disabled = true;
    }
    // console.log(checkbox,but);

// }
// setSubmitButtonStatus();




/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */

/**
 * 思路；
 * 第一步，获取对应的手机号文本和验证码按钮 ;
 * 第二步，判断手机号是不是11位，判断input里面的value值的长度是不是等于 11；
 * 第三步，如果相等时就让它的验证码按钮的disabled ‘禁用’属性，设置不禁用
 * 如果不相等就设置disabled ‘禁用’；
 * 这样当不输入手机号或许输入的手机超过11位时调用函数时，它的按钮颜色就会变暗
 * 当输入11位手机号时 调用函数它的按钮颜色就不会变；
 */
function setSendCodeButtonStatus() {
//     var tel = document.querySelector('#tel');
//     var but = document.querySelector('.captcha button');
//     //这里写错了，是让它的值的长度 等于11。
//     if(tel.value.length === 11){
//         but.disabled = false;
//     }else{
//         but.disabled = true;
//     }
//     // console.log(tel ,but);
}







/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */

/**
 * 思路；
 * 第一步，选中需要操作的dom元素；
 * 第二步，由于这里select下拉框里面有多个子元素，
 * 所以这里需要循环下拉框里面的子元素的，拿到每一个子元素；.children获取dom子元素方法；
 * 第三步，判断下拉框的子元素的每一项是否有选中的 .selected选中
 * 第四步，这里需要创建一个数组来接收它的结果，
 * 判断如果有选中的元素就把它的子元素里获取到的内容‘文字’扔到数组里面去；
 * 注；这里如果用户在页面中的下拉菜单里面选中的爱好，就会在新数组中
 * 第五步，把数组里的数组转化成字符串并通过逗号来连接，
 * 最后把字符串赋给text的内容；
 * 
 */
function setSelectedLoves() {
    var loves = document.querySelector('.form-item select');
    var text = document.querySelector('.text');
    var arr = [];
    for(var i = 0; i < loves.children.length; i++){
        if(loves.children[i].selected){
            arr.push(loves.children[i].innerHTML);
        }
    }
    var str = arr.join(',');
    text.innerHTML = '已选择的爱好：'+ str;
    // console.log(loves,text);
}
