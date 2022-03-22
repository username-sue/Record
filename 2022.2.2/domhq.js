//DOM/BOM基本操作
//查看滚动条的滚动距离
//window.pageXOffset / pageYOffset ----查看滚动条的距离
//IE8及IE8以下浏览器不兼容
//document.body  / documentElement.scrollLeft / scrollTop
// X: documnet.body.scrollLeft + document.documentElement.scrollLeft
// Y: documnet.body.scrollTop + document.documentElement.scrollTop
//兼容性比较混乱，用时取两个值相加，因为不可以能存在两个同时有值
//封装兼容性方法，求滚动条滚动距离 getScrollOffset()


//查看可视区的尺寸
// window.innerWidth  /  window.innerHeight
//IE8及IE8以下浏览器不兼容

//document.documentElement.clientWidth / chlienHeight
//标准模式下，任意浏览器都兼容

//document.body.clientWidth / chlienHeight
//适用于怪异模式下的浏览器

//封装兼容性方法，返回浏览器视口尺寸 getViewportOffset()
//document.compatMode  --- 这个属性是查看浏览器是在什么模式下
//返回：BackCompat ---译为在怪异模式下   /CSS1Compat ----- 译为在标准模式下



//查看元素的几何尺寸
//domEle.getBoundingClientRect();  不常用，了解就好
//兼容性很好
//改方法返回一个对象，对象里面有left,top,right,bottom等属性，left和top代表改元素左上角的X和Y坐标，
//right和bottom代表元素右下角的X和Y坐标。
//height和width属性老版本IE并未实现
//返回结果并不是实时的的。



//查看元素尺寸
//dom.offsetWidth   / dom. offsetHeight  ----- div.offsetWidth 查看宽

//查看元素的位置
//dom.offsetLeft   / dom.offsetTop
//对于无定位父级的元素，返回相对文档的坐标。对于有定位父级的元素，返回相对最近的有定位的父级坐标。
//dom.offsetParent
//返回最近的有定位的父级，如无，返回body,body.offsetParent返回null
//eg：求元素相对文档的坐标，getElementPosition




//让滚动条滚动
//window上有三个方法
//scroll() , scrollTo() , scrollBy();
//三个方法功能类似，用法都是将X,Y坐标传入，即实现让滚动条滚动到当前位置。
//区别：scrollBy(); 会在之前的数据基础上做累加
//列：利用scrollBy();方法，做快速阅读的功能。




//重要，脚本化CSS --- 控制
//读写元素css属性
//dom.style.prop  ---- div.style.width = "100px" ----可拿它的属性也可给他赋值
//可读写行间样式，没有兼容性问题，碰到float这样的保留字属性，前面应该加css
//列：float  ---- >cssFloat
//复合属性必须拆解，组合单词变成小驼峰式写法。
//写入的值必须式字符串格式

//查询计算样式
//window.getComputedStyle(div,null);   ---- /window.getComputedStyle(div,null).width 获取的式css最终的显示样式
//window.getComputedStyle(div,null) --- null 这个第二个参数填的就是伪元素的东西，可以获取伪元素的方法
//计算样式只读
//返回的计算样式的值都是绝对值，没有相对单位
//IE8及IE8以下不兼容

//查询样式
//ele.currentStyle
//计算样式只读
//返回计算样式的值不是经过转换的绝对值
//IE独有的属性
//封装兼容性方法，getStyle();

