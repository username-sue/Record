//编写一个计时器结构

var  timerID ;
//开始计时
function timer(){
    //程序第一次运行到这里时，timerID里面还没有值，所以会继续执行后面的程序。
    //当程序第二次运行到这里时，这是timerID里面已经有值了，所以就不会运行后面的代码了。
    if(timerID){//判断当前timerID里面是否有值，如果有就结束。
        return;
    }
    // console.log('新开计时器');
    timerID = setInterval(function(){
        console.clear();//清空浏览器控制台
        console.log(new Date().toLocaleString());
    }, 1000);
    
}
// timer();
//停止计时
function stop (){
    clearTimeout(timerID);
    //这里把计时器id设为空，方便下一次能再次调用计时器；
    timerID = null;
}

/**
 * 缺陷；多次调用函数时timer();每一次调用函数，它里面都会重新开一次计时器，
 * 这样就导致了后面覆盖前面的问题，
 * 然后停止计时器里面的timerID它保存的永远是最后一个计时器的ID
 * 注；平时写程序时如果只要求开一个计时器时，这样写就不好
 * 解决；在函数体的最前面写一个if判断，判断当前timerID有没有值，有就停止。
 * 
 * 注，在停止计时器这个函数体里，要把计时器ID设置为空，
 * 如果不这样做，那就会导致，下一次调用启动计时器时，就会启动不了。
 */