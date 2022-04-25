// 输入待办事项，按下回车后，添加事项到列表
var input = document.querySelector('.txt');
var ul = document.querySelector('.todo-list');
//给input注册鼠标按下事件
input.addEventListener('keydown',function(e){
    //判断用户按下的键是不是回车键
    if(e.key === 'Enter'){
    //判断文本框里是否有值
    if(!this.value){
        return;
    }
    //创建标签
    var li = document.createElement('li');
    var span = document.createElement('span');
    var but = document.createElement('button');
    //把创建好的标签加到ul里面去
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(but);
    //获取文本内容
    span.innerText = this.value;
    but.innerText = '删除';

    //清空文本框
    this.value = '';
    }
  
    
})

// 使用事件委托的方式完成删除事件
//给ul注册事件
var ul = document.querySelector('.todo-list');
ul.addEventListener('click',function(e){
    //判断事件源对象的名字 是不是 button，按钮
    //如果是那就删除事件源对象的父元素；
    // console.log(e.target);
    if(e.target.tagName === 'BUTTON'){
       e.target.parentElement.remove();
    }
})


