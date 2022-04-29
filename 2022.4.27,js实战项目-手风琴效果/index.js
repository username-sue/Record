//选中dom元素
var h2 = document.querySelectorAll('.h2');

// console.log(h2,ul);
//思路当点击h2的时候ul的高度消失
//for循环每一个标题元素，给每一个元素注册事件
for (var i = 0; i < h2.length;i++){
    h2[i].onclick = function(){
       var nex = document.querySelector('.continer-item[state=open]');
       
       //判断ul里面有没有open这个自定义属性值，如果有就让它为关闭状态；
        if(nex){
            closeItem(nex);
            console.log(nex);
        }
        switchItem(this.nextElementSibling);
    }
}

//打开子菜单
 //把子菜单高度从0变到？（子菜单元素数量*菜单每一项的高度）；
var itemHeight = 30;//菜单的每一项的高度
function openItem(ul){
    //判断子菜单状态是关闭，正在播放，开启状态；
    //开启open, 关闭；close, 正在播放；playing
    var state = ul.getAttribute('state');
    // console.log(state);
    //判断state 是不是不是关闭状态
    if(state !== 'close' && state){
        //如果是啥也不做
        return;
    }
    //判断它不是关闭状态后，给它的状态赋值为正在播放状态
    ul.setAttribute('state','playing');
    acPub({
        beg: 0 ,
        finish: itemHeight * ul.children.length,
        tt: 300,
        inr:10,
        last:function(n){//n这一次变化的值
            ul.style.height = n + 'px';
        },
        ate:function(){//变化完成后运行改函数
            //变化完成后给它的状态赋值为开启状态；
            ul.setAttribute('state','open');
        }

    })

}
var ul = document.querySelector('.continer-item');//子菜单



//关闭子菜单
function closeItem(ul){
    var state = ul.getAttribute('state');
    // console.log(state);
    //判断state 不是打开状态
    if(state !== 'open'){
        //如果是什么也不干
        return
    }
    //判断它不是关闭状态后，给它的状态赋值为正在播放状态
    ul.setAttribute('state','playing');
    acPub({
        beg: itemHeight * ul.children.length ,
        finish: 0,
        tt: 300,
        inr:10,
        last:function(n){//n这一次变化的值
            ul.style.height = n + 'px';
        },
        ate:function(){//变化完成后运行改函数
            //变化完成后给它的状态赋值为开启状态；
            ul.setAttribute('state','close');
        }

    })
}
//切换子菜单s
function switchItem(ul){
    var state = ul.getAttribute('state');
    if(state === 'playing'){
        return;
    }else if(state === 'open'){
        closeItem(ul);
    }else{
        openItem(ul);
        // state = playing;
    }
}