//获取dom元素
var right = document.querySelector('.right');
(function(){
//第一步，拿到right的第一个子元素并且进行克隆
function clone(){
    var lastfirst = right.children[0];
    //cloneNode 克隆的方法，括号里面不传参数代表浅克隆，
    //里面的值为booler，传true代表深度克隆；
    var clon = lastfirst.cloneNode(true);
    right.appendChild(clon);
}
clone();

//第二步，让滚动条滚动
    var index = 0;//当前下标为0；
    var index2 = 30;//滚动下一项的高度
function scroll(){
    var one = index * index2//开始的滚动高度 0 -50-100
    index ++;
    var two = index * index2//滚动到下一项的高度 50-100-150
    //让one开始的慢慢滚动到two下一项；
    //在一段时间内，每个一段时间滚动多少次；
    var tt = 500; //总时间
    var inr = 10 //每隔10毫秒
    var tot = tt / inr //滚动10次
    var efl = (two - one) / tot //每一次滚动多少量
    var timeID = setInterval(function(){
        one += efl;//开始滚动，每次滚动多少
        if(one >= two){
            clearInterval(timeID);
            //滚动结束，当它的下标到达最后一项的时候
            if(index === right.children.length-1){
                index = 0;
                one = 0;
            }
        }
        right.scrollTop = one;
    },inr)

}
//第三步，动画滚动
var inr = 2000;
setInterval(scroll,inr);

}())
