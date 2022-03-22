//事件
//如何绑定事件处理函数
//1、列：div.onxxxx = function (){};
//兼容性很好，但是一个元素的同一个事件上只能绑定一个事件
//基本等同于写在HTML行间上

//2、obj.addEventListener(type---事情类型,fn--- 处理函数,false);
//IE9以下不兼容，可以为一个事件绑定多个处理程序

//3、obj.attachEvent('on' + type---事件类型 ,fn --- 处理函数);
//IE独有，同样一个事件可以绑定多个处理程序


//事件处理程序的运行环境
//1、列：div.onxxxx = function (){};
//程序this指向是dom元素本身

//2、obj.addEventListener(type---事情类型,fn--- 处理函数,false);
//程序this指向是dom元素本身

//obj.attachEvent('on' + type---事件类型 ,fn --- 处理函数);
//程序this指向window


//解除事件处理程序
//ele.onclick = false/null  --- 解除事件
//ele.removeEventListener(type,fn,false);
//ele.detachEvent('on' + type,fn);
//注：若绑定匿名函数，则无法解除


//事件处理模型 --- 事件冒泡，捕获
//事件冒泡
//结构上（非视觉上）嵌套关系的元素，会存在事件冒泡的功能，即同一事件，自子元素冒泡向父元素。（自底向上）
//事件捕获
//结构上（非视觉上）嵌套关系的元素，会存在事件捕获的功能，即同一事件，自父元素捕获至子元素（事件源元素）。（自顶向下）
//IE没有捕获事件
//触发顺序，先捕获，后冒泡
//focus,blur,change,submit,reset,select ---等事件不能冒泡


//取消冒泡和阻止默认事件
//取消冒泡
//W3C标准，event.stopPropagation();不支持IE9以下版本
//IE独有 event.cancelBubble = true;
//封装取消冒泡函数stopBubble(event);

//阻止默认事件
//默认事件一表单提交，a标签跳转，右键菜单等
//1.return false; 以对象的属性方式注册的事件才会生效；
//2.event.preventDefault();  W3C标注，IE9以下不兼容
//3.event.returnValue = false; 兼容IE


//事件对象
//event || window.event 用于IE
//事件源对象
//event.target   火狐浏览器只有这个
//event.srcElement   IE只有这个
//以上两个谷歌都有
//兼容性写法


//事件委托
//利用事件冒泡，和事件源对象进行处理
//优点：性能； 不需要循环所有的元素一个个的绑定事件
//优点；灵活  当有新的子元素时不需要重新绑定事件