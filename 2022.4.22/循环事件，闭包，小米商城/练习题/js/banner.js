var test = (function () {
  // 完成横幅区的图片切换
  // 横幅区数据
  var datas = [
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15c05b32cf948b594477dfc3eb69fb69.jpg?w=2452&h=920',
      link: 'https://www.mi.com/mi11le-5g-ne',
    },
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=2452&h=920&f=webp&q=90',
      link: 'https://www.mi.com/xiaomipad5',
    },
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
      link: 'https://www.mi.com/a/h/22033.html?sign=b60a6ca9167bce2d1ed8ee319cf83c75',
    },
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af7be8f65065f405f57f46a02731f78d.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
      link: 'https://www.mi.com/a/h/22812.html?sign=aab397a7ecf2ae4c1765e9d11fdccca6',
    },
  ];

/**
 * 要做的事，
 * 编写横幅区域的图片切换，
 * 设置超链接地址和图片地址
 * 动态生成span标签
 * 动态控制span样式，
 */
//选中要操作的dom元素
  var div = document.querySelector('.banner-dots');
  var a = document.querySelector('.banner-cover');
  var img = document.querySelector('.banner-cover img');
  var lef = document.querySelector('.banner-pointer-left');
  var rig = document.querySelector('.banner-pointer-right');
  var banner = document.querySelector('.banner');


/**
 * 第一步，定义一个函数，在函数体里循环数组里面的每一项，在循环体里创建span元素，
 * (1)，在div里插入shan标签，把span的类样式加上。
 * 注；在循环数组里面加span标签，是因为只要一调用这个函数，
 * 哪数组里面有几张图片它就会对应的创建几个span元素，
 * 所以这里要把创建span元素写在循环体里
 * 动态生成span只需要做一次即可，所以这里叫做初始化
 */
  function init(){
    for(i = 0; i < datas.length; i++){
      var span = document.createElement('span');
      div.appendChild(span);
      span.className = 'fl';
    }
//在这里调用函数是让图片和小圆点，一开始显示第一张图片和选中第一个小圆点
//注；为什么要在这里调用？因为这个初始化函数只执行一遍，
//也就是说这个函数要等它里面的for循环循环结束后，才调用函数执行
//所以这里在循环体外调用change这个函数，外层的函数只执行一次init()；
//这样就能达到一开始页面就显示第一张图片的原因；
    change(0);
  }
  init();



/**
 * 第二步，定义一个函数，用来设置A标签链接和图片元素，
 * 给函数添加一个形参作为数组的下标，调用函数时，实参对应传进去，
 * 就可以获取数组中对应的值
 * @param {number} index 这里的形参作为数组的下标，
 * 1，函数体里，定义一个变量把数组的下标赋给这个变量，方便后续操作
 * 2，把获取到的a标签和img,分别设置他们链接
 * 3，给span标签（小圆点）设置选中状态，
 * 注；给span标签设置选中样式，需要先清除它之前的选中样式
 * 4，先获取div（父元素）下面的选中css样式；用一个变量接收
 * 5，然后判断div下面的选中的样式，如果有选中样式，就清除
 * 直接给它的类样式赋值为浮动，这样做它就不是选中的样式了
 * 6，在给它设置选中的样式，
 * 7，看看div子元素的下标，这里之所以用下标是为了调用函数时，
 * 实参传几它就会对应显示几。
 * 8，给它的span元素的类样式赋值为选中状态；
 */
    function change(index){
      var arr = datas[index];
      a.href = arr.link;
      img.src = arr.img;
  //给span标签设置选中样式；
  //清除之前的选中样式，
  var clr = div.querySelector('.banner-dots .banner-dots-selected');
  if(clr){
    clr.className = 'fl';
  }
  //设置选中小圆点
    var span = div.children[index];
    span.className = 'banner-dots-selected fl';
   
  }

/**
 * 第三步，定义两个函数，设置箭头向左翻页，向右翻页的样式
 * 1，首先定义一个变脸赋值为0；作为当前下标位
 * 2，在函数体里，给左边设置下标减减，给右边设置加加
 * 3，判断左边的下标是不是小于0，如果小于就给下标赋值为数组长度减1
 * 4，判断右边的下标是不是大于数组的长度减1，如果是那就给下标赋值为0；
 * 最后在循环体外面调用change函数，把下标实参传进去。
 */
  var index = 0;//当前下标为0；
  //向左翻页
  function left(){
  index --;
  if(index < 0){
    index = datas.length - 1;
  }
  //在这里调用上面的函数把下标实参传进去
  change(index);
  }

//向右翻页
  function right(){
    index ++;
    if(index > datas.length - 1){
      index = 0;
    }
    change(index);
  }

//给左边翻页和右边翻页注册点击事件
  lef.addEventListener('click',left);
  rig.addEventListener('click',right);

  //小点注册事件
  //由于要给每一个小圆点都注册事件，所以要循环div下面包裹的子元素，拿到每一项
  //在循环体里注册事件
  //这里在循环体里添加事件产生了闭包
  //有两种解决办法
  //1，用let
  //2，用立即执行函数
  for(var i = 0; i < div.children.length;i++){
    //这里采用了立即执行函数解决闭包问题
  (function(i){
    var span = div.children[i];
    span.onclick = function (){
      // console.log(i);
      index = i;//当前下标
      change(i);
    }
  })(i);
  }

//自动播放
  var timeID
  function play(){
    //判断计时器里是否有值，有就停止
    if(timeID){
      return;
    }
    timeID = setInterval(function(){
      right();
    },1000);
  }
  // play();

  //停止计时器
  function stop(){
    clearInterval(timeID);
    timeID = null;
  }

  //注册鼠标移入，离开事件
  banner.onmouseenter = function(){
    stop();
  }
  banner.onmouseleave = function(){
    play();
  }

  return {
    play:play,
    stop:stop,
  };


})();
