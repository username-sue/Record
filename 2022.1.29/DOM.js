//DOM
//1,DOM ---- Document Objcet Model----文本 对象 模型  ---- 全称
//译：DOM提供了一系列方法，有利于操作html和xml的，这一系列方法的集合就叫做DOM；
//DOM定义了表示修改文档所需的方法，DOM对象即为宿主对象，由浏览器厂商定义，用来操作html和xml功能的一类对象集合
//也有人称DOM是对html和xml的标准编程接口。


//DOM基本操作
//对节点的增删改查
//查
//查看元素节点
//document 代表整个文档
// document.getElementById() --- 选一个标签，元素id在le8以下的浏览器，不区分id大小写，而且也返回匹配name属性的元素
// document.getElementsByTagName()[0]   ---- 标签名 选一组标签，这个在什么浏览器中都可以使用，没有不兼容或不支持情况
// document.getElementsByName()  ----- 需注意，只有部分标签name可生效，（表单，表单元素，img,iframe)
// document.getElementsByClassName() ---- 类名，ie8和ie8以下的版本中没有，可以多个class一起
// document.querySelector() ---- css 选择器，在IE7和IE7以下的版本中没有
// document.querySelectorAll() ---- css 选择器，在IE7和IE7以下的版本中没有


//遍历节点树
//parentNode ---- div.parentNode ---- 父节点 （最顶端的parentNode为#Document);
//childNodes ---- 子节点们
//firstChild --- 第一个子节点
//lastChild --- 最后一个子节点
//nextSibling --- 最后一个兄弟节点，
//previousSibling --- 前一个兄弟节点


//基于元素节点树的遍历
//parentElement --- 返回当前元素的父元素节点（IE不兼容）
//*children --- 只返回当前元素的元素子节点
//node.childElementCount === node.children.length  --- 当前元素节点的子元素节点
//firstElementChild --- 返回的是第一个元素节点 （IE不兼容）
//lastElementChild --- 返回的是最后一个元素节点 （IE不兼容）
//nextElementSibling / previousElementSibling  --- 返回后一个/前一个兄弟元素节点


//节点的四个属性
//nodeName
//元素的标签名以大写的形式表示，只读

//nodeValue
//Text节点或Comment(注释）节点的文本内容，可读写

//nodeType （重点）
//它能分辨一个节点到底是什么节点
//改节点内容，只读

//attributes
//Element 节点的属性集合
//节点的一个方法，Node.hasChildNodes();


//节点类型
//元素节点 ----- 1
//属性节点 ----- 2
//文本节点 ----- 3
//注释节点 ----- 8
//Document ----- 9
//DocumentFragment ----- 11

