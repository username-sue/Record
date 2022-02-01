//DOM结构树---- structure (结构)
//document ---- HTMLDocument.prototype ---- Document.prototype

//DOM基本操作
//1、getElementByld方法定义在Document.prototype上，即Element节点上不能使用。
//2、getElementsByName方法定义在HTMLDocument.prototype上，即非html中的document不能使用（xml document,Element)。
//3、getElementsByTagName方法定义在Document.prototype和Element.prototype上。
//4、HTMLDocument.prototype定义了一些常用属性，body ,head,分别指代HTML文档中的<body> <head>标签。
//5、Document.prototype上定义了documentElement属性，指代文档的根元素，在HTML文档当中，它总是指代<html>元素。
//*5、document.documentElement ----- 值整个<html>元素
//6、getElementsByClassName、querySelectorAll、querySelector在Document.prototype、Element.prototype类中均有定义。



//dom元素节点
//增
//1、*document.createElement('div');  在js里面增加标签---- 创建元素节点
//2、document.createTextNode(‘等宝宝’);  ------- 创建文本节点
//3、document.createComment('hhhh写注释');  ----- 创建注释节点
//4、document.createDocumentFragment();

//插
//1、*PARENTNODE.appendChild(); ----- div.appendChild('123')
//*1、往标签或文本里面扔内容进去相当于push方法--有剪切的作用，可以把标签或内容剪切到另一个标签文本里面去
//2、PARENTNODE.insertBefore(a,b); div.insertBefore(a,b),--- div.insert(a)在div.Before(b)前面，把标签插入到什么位置


//删
//1、parent.removeChild();--- div.removeChild('div') --- 把一个标签剪切出来
//2、child.remove(); --- div.remove('div') ---- 把一个标签从页面彻底删除掉

//替换
//1、parent.replaceChild(new,origin); --- 拿新的元素替换老的元素


//Element节点的一些属性
//innerHTML  ---- div.innerHTML =  ---- 能赋值也可以取值 ---改变一个元素里面的HTML内容
//innerText(火狐不兼容) /textContent(老版本IE不好使) ---- 取文本内容

//Element节点的一些方法
//ele.setAttribute(); -- div.setAttribute('class','dome'); --- 给div加css选择器和属性值 
//ele.getAttribute(); -- div.getAttribute('class'); --- 把div的class属性值给取出来 ---- 取行间属性的值