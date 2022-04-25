/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
function setSubmitButtonStatus() {
    var input = document.querySelector('.policy input');
    var but = document.querySelector('button[type = "submit"]');
    if(input.checked){
        but.disabled = false;
    }else{
        but.disabled = true;
    }
    // console.log(input,but);
}
setSubmitButtonStatus();
/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
    var txt = document.querySelector('#txtPhone');
    var  but = document.querySelector('.captcha button');
    //判断输入的手机号是不是11位
    if(txt.value.length === 11){
        but.disabled = false;
    }else{
        but.disabled = true;
    }
    // console.log(txt,but);
}
setSendCodeButtonStatus();
/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
    var loves = document.querySelector('.form-item select');
    var text  = document.querySelector('#selChoose');
    //循环下拉框里面的子元素，拿到每一项
    var arr = [];
    for(var i = 0; i< loves.children.length;i++){
        //判断里面的元素有没有被选中
        if(loves.children[i].selected){
            arr.push(loves.children[i].innerHTML);
        }
    }
    //把数组里面的属性按照逗号来连接，并返回字符串；
    var str = arr.join(',');
    text.innerHTML = '已选择的爱好：'+ arr;
    // console.log(loves,text);
}
setSelectedLoves();



// 将上面的函数和用户事件连接
//给文本框绑定事件,电话验证码
var text = document.querySelector('#txtPhone');
text.addEventListener('input',function(){
    setSendCodeButtonStatus();
})

//给复选框绑定事件
//当鼠标点击文本框选中时，注册按钮会自动发生变化
var input = document.querySelector('.policy input');
input.addEventListener('click',function(){
    setSubmitButtonStatus();
})

//给下拉框绑定事件
 //注：当点击选中下拉框里面的属性时，选中的属性会添加到爱好选中栏；
var loves = document.querySelector('.form-item select');
loves.addEventListener('click',function(){
    setSelectedLoves();
})

// 给所有的文本框注册事件，若用户在输入的过程中按下了ESC，则将文本框清空
var texts = document.querySelectorAll('.txt');
    for(var i = 0; i< texts.length;i++){
        //事件处理函数
        texts[i].addEventListener('keydown',function(e){
            //判断事件处理函数里面的事件对象 是否 等于ESC；
            if(e.key === "Escape"){
                //这里this,谁调用它就指向谁，当在某一个文本框里输入文字并按下ESC键的时候
                //这事this就指向当前按下esc的文本框。
                //把文本框的值设为空
                this.value = null;
            }

        })
    }
    /**
     * 思路；
     * 第一步，获取到所有文本框dom元素，
     * 第二部，for循环文本框，拿到每一项文本框，
     * 第三步，给每一项文本框注册事件，然后判断事件对象是否等于esc，
     * 如果等于就清空当前用户按下ESC的文本框的值。
     * 注；事件处理函数里面传一个形参值e表示为事件对象，
     * 里面包含了事件发生的相关信息，比如鼠标位置、键盘按键等等；
     * 事件处理对象：当事件发生时，会自动调用事件处理函数，并向函数传递一个参数
     */