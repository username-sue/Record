//思路；
//图片存储
var storageImg = {
    small:['imgA_1.jpg', 'imgB_1.jpg', 'imgC_1.jpg'],
    medium:['imgA_2.jpg', 'imgB_2.jpg', 'imgC_2.jpg'],
    big:['imgA_3.jpg', 'imgB_3.jpg', 'imgC_3.jpg']
}


//第一步，当鼠标点击小图片，让被点击的图片尺寸放大，
//并且被点击的图片要在框里面展示；
var container = document.querySelector('.container');
var img1 = container.querySelector('.img1');
var mantle = img1.querySelector('.Mantle');
var img2 = document.querySelector('.img2');
var cont = document.querySelector('.cont');
var contImg = cont.querySelector('.cont-img');

//循环数组里的小图片，通过字符串拼接的方式把小图片加到li里面去；
var str = '';
for(var i = 0; i < storageImg.small.length;i++){
    // console.log(storageImg.small[i]);
    str += '<li style = "background-image:url(./images/'+ storageImg.small[i] +');" </li>'
}
//把小图片加入到li里面去
contImg.innerHTML = str;
//默认选中第一个样式；
var firstImg = contImg.querySelector('li');
//给第一个选中样式设置外边框
firstImg.style.border = '2px solid #000';

//注册点击事件
//用事件委托，
cont.onclick = function (e) {
    // console.log(e.target);
    //判断当鼠标点击的是不是li
    if(e.target.tagName === 'LI'){
    //如果是让所有的li取消边框
        var overLi = contImg.querySelectorAll('li');
        for (var i = 0; i < overLi.length; i++) {
            overLi[i].style.border = 'none';
        }

    //让选中的li添加边框
        e.target.style.border = '2px solid #000';

    //接下来，点击图片后，框里大的图片也要随之改变
    //利用数组的一个方法。indexOF();里面传值它会返回当前的下标；
    //这里是调用了数组的方法然后用call改变指向把参数传进去
        var index = [].indexOf.call(overLi,e.target);
        // console.log(index);//打印鼠标点击后的下标，0,1,2

    //设置点击事件的框里面的图片显示
        img1.style.backgroundImage = 'url(./images/'+ storageImg.medium[index] +')';
    //设置点击小图片时，让它的的背景图变为大图；
        img2.style.backgroundImage = 'url(./images/'+ storageImg.big[index] +')';
    }
}


//第二步，当鼠标移入到框里的图片时，图片要随之放大
//并且在另一个文本框里展示出来；
//当鼠标移动事件
img1.onmousemove = function (e){
    //设置蒙层让它显示
    mantle.style.opacity = 1;
    img2.style.opacity = 1;

    //根据鼠标位置计算出蒙层的位置
    //鼠标的位置 减去 img1元素左边距离 减去 蒙层的宽度 除以 2；
    var left = e.clientX - img1.offsetLeft - mantle.offsetWidth / 2;
    var top = e.clientY - img1.offsetTop - mantle.offsetHeight / 2;
    //判断最小值
    if(left <= 0){
        left = 0;
    }
    if(top <= 0){
        top = 0;
    }
    //判断最大值
    //如果left 大于等于 img1元素的宽度 减去 蒙层的元素宽度；
    //那就把left赋值为：img1元素的宽度 减去 蒙层的元素宽度；
    if(left >= img1.offsetWidth - mantle.offsetWidth){
        left = img1.offsetWidth - mantle.offsetWidth;
    }
    if(top >= img1.offsetHeight - mantle.offsetHeight){
       top = img1.offsetHeight - mantle.offsetHeight;
    }
    //最后的计算出来的left和top值赋给蒙层样式
    mantle.style.left = left + 'px';
    mantle.style.top = top + 'px';

    //根据left,top修改大图的位置，background-positionX
    img2.style.backgroundPositionX = -left + 'px';
    img2.style.backgroundPositionY = -top + 'px';
}
//当鼠标移出事件
img1.onmouseleave = function (e){
    //设置蒙层让它显示
    mantle.style.opacity = 0;
    img2.style.opacity = 0;
}
