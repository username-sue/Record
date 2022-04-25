// 每隔1秒自动切换图片
var img = document.querySelector('.container img');
var time;
var count = 1;
//开始计时
function interval(){
    if(time){
        return;
    }
    time = setInterval(function(){
        count++;
       if(count === 5){
           count = 1;
       }  
    img.src = './img/'+ count +'.jpeg'
   } , 1000)
}
interval();

//停止计时器
function stop(){
    clearInterval(time);
    time = null;
}
    // console.log(img);

// 当鼠标移动到元素上时停止切换，移出后开始切换
//当鼠标移入清空计时器
   img.addEventListener('mouseenter',stop);

   //当鼠标离开重开计时器
   img.addEventListener('mouseleave',function(){
    // time();
    interval();
})