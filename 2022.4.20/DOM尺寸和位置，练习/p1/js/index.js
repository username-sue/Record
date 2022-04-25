// 让便签可被拖动，但不能超出视口
//第一步，绑定鼠标事件;
// var move = document.querySelector('.move-bar');
// var note = document.querySelector('.note');
// move.onmousedown = function(e){
//     //当鼠标按下后要获取它的横坐标和纵坐标
//     var x = e.clientX;
//     var y = e.clientY;

//     //当鼠标按下时获取要移动元素的可视区窗口坐标；
//     var dom = move.getBoundingClientRect();
//     var ex = dom.left,
//         ey = dom.top;

//     //当鼠标按下时，获取可视区宽高和元素宽高；
//     var w = document.documentElement.clientWidth,
//         h = document.documentElement.clientHeight;
//     //元素宽高
//     var ew = note.offsetWidth,
//         eh = note.offsetHeight;

//     //算出left和top的最大宽高；
//     //可视区宽高 减去 元素宽高；
//     var maxX = w - ew,
//         maxY = h - eh; 

//     //这里用window是监听整个屏幕的鼠标移动事件
//     window.onmousemove = function(e){
//     //当鼠标按下时，鼠标移动时的坐标；
//     //当鼠标移动时的坐标 减去 鼠标按下时的坐标，就得到了鼠标移动时的坐标
//     var moveX = e.clientX - x,
//         moveY = e.clientY - y;
//     //当鼠标按下时要移动元素的 加上 鼠标移动时的坐标，就得到了鼠标移动时元素的坐标
//     var left = ex + moveX,
//         top = ey + moveY;

//     //要对left和top，有效移动区域进行控制，不能超出可视区
//     if(left < 0){
//         left = 0;
//     }
//     if(left > maxX){
//         left = maxX;
//     }

//     if(top < 0){
//         top = 0;
//     }
//     if(top > maxY){
//         top = maxY;
//     }
//     //把得到的距离赋值给要移动的元素
//     note.style.left = left + 'px';
//     note.style.top = top + 'px';

//         // console.log('鼠标移动')

//     }

//     //当鼠标抬起后监听整个屏幕的事件
//     window.onmouseup = function(){
//         // console.log('鼠标不移动')
//         //当鼠标抬起后，清除鼠标移动事件
//         window.onmousemove = null;
//         //当鼠标抬起后，清除鼠标抬起事件
//         window.onmouseup = null;
//     }
// }


/**
 * 思路；
 * 第一步；选中需要操作的dom元素，进行绑定事件；
 * 事件；当鼠标按下触发时，当鼠标移动元素触发事件，当鼠标抬起后清除移动和抬起事件；
 * 
 * 第二步，当鼠标按下时的获取它相对于视口的横坐标和纵坐标；
 * 
 * 第三步，当鼠标按下时获取要移动元素相对于视口的横坐标和纵坐标；
 * 
 * 第四步；当鼠标移动的获取它的横坐标和纵坐标；并且获取元素随之移动时的坐标
 * 注；这时，就需要当鼠标移动时的坐标 减去鼠标按下时的坐标，
 * 这样就得到了鼠标移动时的坐标。
 * 
 * 第五步，当鼠标移动时要获取元素移动的坐标，所有这里就直接用；
 * 当鼠标按下时的元素坐标加上鼠标移动的坐标，就得到了鼠标移动时元素的坐标
 * 
 * 第六步；选中要移动的元素的类样式，给它的left和top；设置鼠标移动时元素的坐标；
 * 
 * 第六步；由于要求是不能超出可视区窗口移动，
 * 所以这里要给它的left和top设置有效移动区域进行控制，不能超出可视区
 * 注；这里要得到left和top的最小值和最大值
 * 
 * 第七步，当鼠标按下时，获取它的视口宽高，元素宽高，
 * 注；cument.documentElement.clientHeight 获取视口宽高
 * 注；note.offsetHeight; 获取元素宽高
 * 
 * 第八步；算出left和top的最大值；
 * 这里就用已获取到的视口宽高 减去 元素宽高，这样就得到了最大值，
 * 最小值是小于0为最小值；
 * 
 * 第九步；最后，在当鼠标移动时事件里面 
 * 1，判断一下当left最小值小于0时，那就给left赋值为0；
 * 用算出的left最大值判断
 * 2，判断当top最小值小于0时，那就给top赋值为0；
 * 用算出的top最大值判断
 */

var move = document.querySelector('.move-bar');
var note = document.querySelector('.note');
    //第一步注册事件
    //当鼠标按下时触发事件
    move.onmousedown = function(e){
    //获取鼠标按下时的坐标和按下时元素的坐标；
    var X = e.clientX,
        Y = e.clientY;
    //元素坐标；
    var dom = move.getBoundingClientRect();
    var ex = dom.left,
        ey = dom.top;


    //当鼠标按下时获取可视区宽高和元素宽高
    var w = document.documentElement.clientWidth,
        h = document.documentElement.clientHeight;
    //元素宽高
    var we = note.offsetWidth,
        he = note.offsetHeight;

    //算出left,top的最大值
    //将算出的值在鼠标移动元素事件里面进行判断，控制可视区
    var maxX = w - we,
        maxY = h - he;

    //当鼠标按下时移动元素时触发事件
    //注；由于这里单独给元素注册移动事件的话，那么当鼠标移出元素后，
    //系统就监听不到事件了，这样用户体验也不好
    //所以这里要给window注册事件，不管用户点击哪里移动都可以监听事件；
    window.onmousemove = function(e){
    //获取当按下时鼠标移动的坐标和元素移动的坐标
    var moveX = e.clientX - X,
        moveY = e.clientY - Y;
    //元素移动的距离 加上，元素本身的坐标
    var left = moveX + ex;
    var top = moveY + ey;


    //由于不能超出可视区，所以这里要设置left和top的最大最小值，进行控制
    //最小值
    if(left < 0){
        left = 0;
    }
    if(left > maxX){
        left = maxX;
    }
    if(top < 0){
        top = 0;
    }
    if(top > maxY){
        top = maxY;
    }

    //把获取到的坐标赋给要移动元素，
    note.style.left = left + 'px';
    note.style.top = top + 'px';

    }

    //当鼠标抬起时清除鼠标移动和抬起事件
    window.onmouseup = function(){
        // console.log('不移动')
        window.onmousemove = null;
        window.onmouseup = null;
    }
}   
