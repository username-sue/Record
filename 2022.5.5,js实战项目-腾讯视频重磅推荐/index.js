//第一步分析结构
//需要动态添加的标签 img a span,
//选中需要操作的dom元素

var nav = document.querySelector('.nav-cont');
var img = document.querySelector('.container img');
var head = document.querySelector('.head');
var navBackground = document.querySelector('.nav');
var container = document.querySelector('.container');
// var a = document.querySelector('.nav-cont a');
// var span = a.querySelector('span');
// console.log(img, nav);

//循环数组，初始化
//动态创建，p,span
function inter () {
    for(var i = 0; i < data.length; i++){
        var index = data[i];
        //创建p标签
        var p = document.createElement('p');
        nav.appendChild(p);
        p.innerHTML = index.title;
       //创建span标签
        var span = document.createElement('span');
        p.appendChild(span);
        span.innerHTML = index.desc;
    } 
        change(0);
}
inter();

//定义一个函数，把数组的下标作为形参值传进去；
function change(index){
    var arr = data[index];
    img.src = arr.img;
    img.alt = "";
    head.style.background = arr.bg;
    navBackground.style.background = arr.bg;

    // 获取所有p元素
    var allP = nav.querySelectorAll('p');
    // 获取所有span元素
    var allSpan = nav.querySelectorAll('p span');
    // 下一个将要改变的p元素
    var nextP = allP[index];
    var preP = allP[index-1];
    var preSpan = allSpan[index-1];
    var nextSpan = allSpan[index];

    // 第一种：找到之前的设置过的元素，将其变回初始样式
    // var selected = nav.querySelector('.nav-cont .nav-cont-selected');
    // if (selected) {
    //     selected.className = 'nav-cont';
    // }

    // 第二种：将所有的p元素变回初始样式
    // for (var i = 0; i < allP.length; i++) {
    //     allP[i].className = 'nav-cont';
    // } 
    if (index != 0) {
        preP.className = 'nav-cont';
        preSpan.style.display = 'none';
    } else {
        allP[allP.length-1].className = 'nav-cont';
        allSpan[allSpan.length-1].style.display = 'none';
    }
    // 改变下一个的p元素的样式
    nextP.className = 'nav-cont-selected';
    nextSpan.style.display = 'inline-block';
}

//鼠标点击事件
// var allP = nav.querySelectorAll('p');
//   for(var i = 0; i < allP.length; i++){
//     //   console.log(nav.children[i]);
//     (function(i){
//         var pOnclick = allP[i];
//         var selected = nav.querySelector('.nav-cont-selected');
//         pOnclick.addEventListener('mouseleave',function(){
//             stop();
//             if (selected) {
//                 selected.className = 'nav-cont';
//                 index1 = 0;
//                 }else{
//                     selected.className = 'nav-cont-selected';
//                 }
//             index1 = i;
//             change(i);
//         })
//     })(i);
//   }

//控制元素图片轮播播放
var index1 = 0;//当前下标为0
function autoPlay(){
    index1++;
    if(index1 >= data.length){
        index1 = 0;
    }
    change(index1);
}
//自动播放
var timeID;
function play(){
    if(timeID){
        return;
      }
      timeID = setInterval(function(){
        autoPlay();
      },1000);
}

//停止计时器
function stop(){
    clearInterval(timeID);
    timeID = null;
}

//注册鼠标移入，离开事件
container.onmouseenter = function(){
    stop();
}

container.onmouseleave = function (){
    play();
}