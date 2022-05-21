//选中要操做的dom元素
var container = document.querySelector('.container');
//给图片定义宽度
var widthImg = 220;

//此方法得到了列数和间隙的值
function cal() {
    var containerWidth = container.clientWidth;//得到容器的宽度
    //列数 = 容器的宽度 / 图片的宽度；
    var columns = Math.floor(containerWidth / widthImg);//向下取整
    //还需要计算图片之间的间隙
    //总间隙 = 容器宽度 - （列数 * 图片宽度）；
    var clearance = columns + 1;//间隙的数量 = 列数 + 1；
    var clearanceLeft = containerWidth - columns * widthImg;//计算剩余空间
    var everyClearance = clearanceLeft / clearance; //每个间隙的空间；

    //最后把得到的每个间隙的值和列数返回；
    return{
        everyClearance:everyClearance,
        columns:columns
    }

}

//此方法得到数组ARR的最小值；
function getMin(arr) {
    var min = arr[0];//假设第一项最小
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
//此方法得到数组ARR的最大值；
function getMax(arr) {
    var max = arr[0];//假设第一项最大
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

//此方法用于设置每一张图片的位置； 
function setPosition() {
    // 在设置图片位置之前，我们需要的到几列；
    var method = cal();//通过此方法我们可以得到列数和列数；

    //接下来需要创建一个数组，数组里面保存每一项的高度；
    var arr = new Array(method.columns)//声明数组的长度
    //fill此方法为ES6的新方法，方法用于将一个固定值替换数组的元素；
        arr.fill(0);//数组里面每一项填充0；

    //接下来，需要计算一张一张的图片的 top和left;
    for(var i = 0; i < container.children.length; i++){
        //得到每一张图片
        var img = container.children[i];

        //获取数组里面的最小值
          var minTop =  getMin(arr);
          img.style.top = minTop + 'px';

        //接下来，还需要改变当前列的高度；
        //indexof返回数组里最小值的下标
        //得到最小数的列数
        var index = arr.indexOf(minTop);
        //新的高度 = 图片的高度 + 间隙的高度；
        arr[index] += img.height + method.everyClearance;

        //接下来设置lfet值
        //left = 当前最小列数下标 + 1 * 每个间隙的值 + 当前最小列数下标 * 图片的宽度；
        var left = (index + 1) * method.everyClearance + index * widthImg;
        img.style.left = left + 'px';
    }

    //由于给图片设置了绝对定位，脱离了标准流，所以无法撑开盒子的高度
    //这里需要手动计算盒子高度
    var max = getMax(arr);
    container.style.height = max + 'px';
}


//初始化函数
function init() {
    for(var i = 0; i <= 40; i++){
        var src = "./img/"+ i + ".jpg";//生成图片路劲
        var img = document.createElement('img');//创建img标签
        img.src = src;//给创建好的img标签添加图片路劲
        img.style.width = widthImg;//给图片设置宽度
        container.appendChild(img);//把img标签添加到容器里面去

        //接下来，需要排列每一张图片；
        //当图片排列完成后，都需要进行重新排列；
         img.onload = setPosition;
    }
    
}

//事件
var timeID = null;
function bindingEvent() {
    //改事件会在窗体大小发生改变时触发；
    window.onresize = function () {
        //由于resize这个事件，它会不停的触发，所以这里需要函数防抖；
        if(timeID){
            clearTimeout(timeID);
        }
        timeID = setTimeout(setPosition,500);
    }
}


//主函数
function main() {
    //1，初始化，完成图片添加
    init();

    //2,绑定事件
    bindingEvent();
}

main();