//1，创建对象，图片地址存储
var deta = [
    {img:'./img/Wallpaper1.jpg'},
    {img:'./img/Wallpaper2.jpg'},
    {img:'./img/Wallpaper3.jpg'},
    {img:'./img/Wallpaper4.jpg'},
    {img:'./img/Wallpaper5.jpg'},
]
//选中dom元素
var contImg = document.querySelector('.cont-img');
var instruct = document.querySelector('.instructions');
var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');
var  container = document.querySelector('.container')
//当前下标
var curIndex = 0;
//获取元素宽度
var contWidth = container.clientWidth;
//2，初始化，创建图片，指示器，定义全局变量为当前索引
var init = function () {
    function _Subitem(arr){
        //创建图片
        var img = document.createElement('img');
        contImg.appendChild(img);
        img.src = arr.img;
        img.className = 'item-img';
    }
    for(var i = 0; i < deta.length; i++) {
       _Subitem(deta[i]);
       //闯将指示器
        var span = document.createElement('span');
        instruct.appendChild(span);
        instruct.className = 'instructions'
        span.className = 'instruct '
    }
    //多加一张图片到容器里
    _Subitem(deta[0]);
    //设置容器宽度
    contImg.style.width = contImg.children.length + '00%';
    //设置指示器的激活状态
    change();
}

 //设置指示器的激活状态
function change () {
    //清除之前选中样式
    var select = instruct.querySelector('.instruct.select');
    if(select){
        select.className = 'instruct'
    }
    //指示条设置选中样式 
    var index = curIndex;
    if(index > deta.length -1){
        index = 0
    }
    // console.log(instruct.children[index]);
    instruct.children[index].className = 'instruct select';
}
init();

//将轮播图从当前下标切换到下一张图片
var ifPlaying = false;//查看动画是否进行
function moveTo (newIndex,onend) {
    if(ifPlaying || newIndex === curIndex){
        return;
    }
    ifPlaying = true;
    var beg = parseFloat(instruct.style.marginLeft) || 0;
    var finish = -newIndex * contWidth;
    acPub({
        beg : beg,//起始值
        finish : finish,//结束值
        tt : 500,
        inr:15,
        onmove:function (n) {
            contImg.style.marginLeft = n + 'px';
        },
        onend:function () {
            ifPlaying = false;
            onend && onend();
        }
    });
    //更改当前图片索引
    curIndex = newIndex;
    change();
}

//指示器点击事件
for(var i = 0; i < instruct.children.length; i++){
    (function (i){
        var ins = instruct.children[i];
        ins.onclick = function () {
            moveTo(i);
        }
    })(i)
}

//无缝切换到下一张
function next () {
    var newIndex = curIndex + 1;
    var onend;
    if(newIndex === contImg.children.length - 1){
        onend = function () {
            contImg.style.marginLeft = 0;
            curIndex = 0;
        }
    }
    moveTo(newIndex ,onend);
}
//无缝切换到上一张
function prev () {
    var newIndex = curIndex - 1;
    if(newIndex < 0){
      var maxIndex = contImg.children.length - 1;
      contImg.style.marginLeft = -maxIndex * contWidth + 'px';
      newIndex = maxIndex - 1;
    }
    moveTo(newIndex);
}

arrowLeft.addEventListener('click',prev);
arrowRight.addEventListener('click',next);


//自动播放动画
var timeID
function play () {
    if(timeID){
        return;
    }
    timeID = setInterval(function (){
        next();
    },1000);
}
function stop(){
    clearInterval(timeID);
    timeID = null;
}

container.onmouseenter = function(){
    stop();
  }
container.onmouseleave = function(){
    play();
  }