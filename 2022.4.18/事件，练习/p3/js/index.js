// 输入待办事项，按下回车后，添加事项到列表
var input = document.querySelector('.txt');
var ul = document.querySelector('.todo-list')

//给文本框注册事件，监听键盘按下事件
input.addEventListener('keydown',function(e){
    //判断用户按下的键是不是回车键
    if(e.key === 'Enter'){
        //判断文本框里面是不是没有值，如果没有值就停止
        if(!this.value){
            return;
        }
        //创建dom元素，li span botton
        var li = document.createElement('li')
        var span = document.createElement('span')
        var but = document.createElement('button')

        //把创建好的标签添加到ul里面去
        li.appendChild(span);
        li.appendChild(but);
        ul.appendChild(li);
        //当按下回车键的时候span元素获取用户输入的值
        span.innerText = this.value;
        but.innerText = '删除';
        console.log(ul);

        // 点击删除后，删除对应的待办事项
        //监听按钮事件
but.addEventListener('click',function(){
    li.remove();
})

        //鼠标按下回车后文本框清空
        this.value = '';
    }
})





