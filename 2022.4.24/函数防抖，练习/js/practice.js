// 当窗口尺寸变化后，调用layout函数
//这里要使用函数防抖来完成
function debounce(fn,delay){
    var timeID;
    return function (){
        var arg = Array.prototype.slice.call(arguments);
        clearTimeout(timeID);
        timeID = setTimeout(function(){
            fn.apply(this,arg);
        },delay);
    }
}

var newlay = debounce(layout,500);

//给window注册事件
//resize ,当窗口变化时触发事件
window.addEventListener('resize',newlay);

/**
 * 函数防抖思路；
 * 第一步，定义一个函数，里面传两个形参，第一个作为一个函数，第二个作为延迟的时间
 * 第二步，函数体里面return 返回一个新的函数，在函数体里调用fn第一个形参函数
 * 第三步，往调用的函数里面传递实参，但由于我们并不知道有多少实参，
 * 所以这里需要用到arguments实参列表，把实参列表转化成真数组，传到调用的函数里
 * 第四步，定义一个计时器来控制延时调用函数，里面的延时时间把把形参delay传进去
 * 最后在在外层函数体里定义变脸，把retuen里面的计时器赋给这个变量，以方便清除计时器id。
 */

 function throttle(fn, delay){
    var timeID;//记录计时器最后ID

     //这里返回的函数就是throttle调用时要返回的函数
    return function(){
        //在这里调用fn函数，实际就是调用的sum函数，
        //所以要调用fn（sum)函数就要往里面传递实参，
        //由于我们也不知道fn里面具体有多次个参数，所以这里要用实参列表
        //由于实参列表不是真数组，所以这里需要先把它转化为真数组。
        var arg = Array.prototype.slice.call(arguments);
        //这里调用fn函数，为什么要用apply呢？
        //由于arg是一个实参列表，所以这里就利用了apply第二个参数是一个数组，这样的特点把实参传进去
        //如何让函数延时执行呢？这里需要定义一个计时器，在计时器里面调用函数，把形参delay传进去。
        clearTimeout(timeID);//清除最后一个id
        timeID = setTimeout(function(){
            fn.apply(this,arg);
        },delay);
    }
 }

 //这里调用throttle函数，它会返回一个新的函数，所以这里需要定义一个变量来接收
var newSum = throttle(sum,3000);

 function sum(a,b){
     console.log(a + b);
 }