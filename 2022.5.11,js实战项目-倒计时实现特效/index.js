//定义一个动画执行函数
//传入第一个形参，dom元素的获取，
//传入第二个形参，time动画时间的控制
var changeTime = function (domItem,time) {
    //定义一个定时器
    setInterval(function () {
    //获取第一个字节点元素
    var first = domItem.children[0];
    // console.log(first);
    //添加动画效果
    domItem.style.transition = 'all .5s linear';
    domItem.style.top = -120 + 'px';
    //给dom绑定动画完成后事件函数
    domItem.addEventListener('transitionend',function () {
        //动画完成后，清除动画属性
        domItem.style.transition = 'none';
        //把选中的第一个字节点元素添加到选中的dom元素中去
        domItem.appendChild(first);
        //把top值设为初始化
        domItem.style.top = 0;
    })
    },time);


}
changeTime(document.getElementsByClassName('time-item')[5].getElementsByTagName('ul')[0],1000);
changeTime(document.getElementsByClassName('time-item')[4].getElementsByTagName('ul')[0],10000);
changeTime(document.getElementsByClassName('time-item')[3].getElementsByTagName('ul')[0],60000);
changeTime(document.getElementsByClassName('time-item')[2].getElementsByTagName('ul')[0],600000);
changeTime(document.getElementsByClassName('time-item')[1].getElementsByTagName('ul')[0],36000000);
changeTime(document.getElementsByClassName('time-item')[0].getElementsByTagName('ul')[0],108000000);