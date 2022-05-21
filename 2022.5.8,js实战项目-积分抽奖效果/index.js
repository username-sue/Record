//思路
//1，获取抽奖次数
//2，点击抽奖按钮，给每一个获奖列表添加状态
//3，触发弹出框，显示抽奖信息
//4，给弹出框进行事件绑定，关闭弹出框进行下一次绑定；

//定义一个立即执行函数，防止污染变量
(function () {
//获取dom元素
var num = document.querySelector('.number');
var but = document.querySelector('.but-right');
var prizeList = document.querySelectorAll('.prize-list');
var mantle = document.querySelector('.Mantle');
var mantleSize = document.querySelector('.Mantle-size');
var sizeX = document.querySelector('.size');
var mantleBtn = document.querySelector('.Mantle-but');

console.log(prizeList);

//定义一个变量，作为抽奖次数
var number = 5;
// 定义一个变量，作为当前列表的索引值（下标）；
var index = -1
//定义一个空变量，
var lastIndex = null;
//定义一个变量，来控制计时器停止
var timeID = null;

//创建编程入口函数
 var  init = function () {
    // 在初始化函数里面把变量赋值给抽奖次数
    num.innerHTML = number;
    //在初始化函数里面调用事件函数
    initEvent();
}

//创建一个事件绑定的集合 函数
var initEvent = function () {
    but.addEventListener('click',onButClick);
    sizeX.addEventListener('click',onPopupClick);
    mantleBtn.addEventListener('click',onMantleBtnClick);
}

//事件1；鼠标点击抽奖事件函数处理
var onButClick = function () {
  //判断抽奖次数是否为0
  if(number === 0 || timeID){
    return;
  }
  multiplexingFn();
}

//事件2；给弹出框的关闭按钮绑定点击事件,让弹出框隐藏
var onPopupClick = function () {
  mantle.style.display = 'none';
}

//事件3；鼠标点击再来一次按钮事件处理函数；
var onMantleBtnClick = function () {
  //判断抽奖次数是否为0
  if(number === 0){
    return;
  }
  //点击在来一次后，先让弹窗关闭，在进行下一次抽奖函数运行；
  mantle.style.display = 'none';
  multiplexingFn();
}


//创建一个，获奖后弹出框信息展示函数
var awardPopup = function () {
  //当获奖时，减少抽奖次数
   num.innerHTML = --number;
  //判断一下抽奖次数是不是为0 如果为0把弹窗的'再来一次'按钮文本改成'确定’
  if(number === 0){
    mantleBtn.innerHTML = '确定';
  }
  
  //获取获奖文案处理
  var prizeConter = prizeList[lastIndex].querySelector('span').innerHTML;
  //判断一下，当前下标是不是'谢谢参与'它的下标为4；
  if(lastIndex != 4){
    mantleSize.innerHTML = '恭喜您获得' + prizeConter;
  }else{
    mantleSize.innerHTML = '加油！！！';
  }
   //让弹出框显示
   mantle.style.display = 'block';

}

//定义一个复用函数，方便调用执行,公用函数；
var multiplexingFn = function () {
    //定义一个变量，随机数，来控制抽奖
  //取0-3000的随机数；
  var prizeNum = 3000 + Math.floor(Math.random() * 3000);
  //定义一个计时器，点击抽奖按钮执行里面的函数；
  timeID = setInterval(function (){
    //控制抽奖停止,让它每次减200；
    prizeNum -= 200;
    //判断它小于等于200时停止计时器
    if(prizeNum <= 200){
      clearInterval(timeID);
      //这里停止计时器后，调用获取信息弹出框函数
      awardPopup();
      return;
    }
    //当index++执行到8最后一位的时候，
    //就让 % 列表的长度,结果就为0，所以这样就达到了一个反复循环的效果
    lastIndex = ++ index  % prizeList.length;
    //判断列表里面是否有active值，有就删除
    prizeList.forEach(function(node){
    // node.classList.remove('active');
    node.className='prize-list';
  })
  // prizeList[lastIndex].classList.add('active')
  prizeList[lastIndex].className='prize-list active'
},50);
}


  init();  
})()