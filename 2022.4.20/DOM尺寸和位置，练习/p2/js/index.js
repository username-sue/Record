// 让小球向右下运动，遇到边缘后反弹
var ball = document.querySelector('.ball');
//随机数
function moth(min,max){
    return Math.floor(Math.random() *( max - min )+ min);
}
//随机颜色
function color(){
    var r = moth(0,256);
    var g = moth(0,256);
    var b = moth(0,256);
    ball.style.background = 'rgb('+ r +','+ g +','+ b +')'
}



//定义一个变量 = 1；做为元素移动时的距离坐标
var domX = 1;
var domY = 1;

//获取可视区宽高，元素宽高；
var w = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight;
//元素宽高；
var domW = ball.clientWidth,
    domH = ball.clientHeight;

//算出最大值。left,top;
var maxX = w - domW,
    maxY = h - domH;

//计时器
setInterval(function(){
    //获取元素的坐标
    var dom = ball.getBoundingClientRect();
    var X = dom.left,
        Y = dom.top;
    //元素移动时的距离 加上 元素本身的坐标；
    var left = domX + X,
        top = domY + Y;
    //控制元素，不让它超出可视区窗口，left,top;
    if(left < 0){
        left = 0;
    //这里设置元素移动时的距离为-1，由于原来domX设置的时正1
    //所以这里设置-1，就会让小球谈到滑倒边缘又会反弹回来；
        domX = -domX;
        color();
    }
    if(left > maxX){
        left = maxX;
        domX = -domX;
        color();
    }
    if(top < 0){
        top = 0;
        domY = -domY;
        color();
    }
    if(top > maxY){
        top = maxY;
        domY = -domY;
        color();
    }
    ball.style.left = left + 'px';
    ball.style.top = top + 'px';
    
},10)