//事件分类
//鼠标事件
//click,---- 敲击鼠标事件
//click = mousedown + mouseup
//mouseover  ---- 当鼠标移入/覆盖时发生什么事
//mouseout  ----  当鼠标移开时发生什么事
//mouseenter , mouseleave --- 这两个功能同上一样，也是当鼠标移入/离开时发生什么事
//contextmenu --- 右键产生菜单事件 ---- 右键取消菜单事件
//mousemove  ---- 鼠标移动事件
//mousedown,mouseup, ---- 唯一能够区分鼠标左右键的
//用button来区分鼠标的按键
//DOM3标准规定；click事件只能监听左键，只能通过mousedown和mouseup来判断鼠标键
//如何解决mousedown和click的冲突


//键盘事件
//keydown   keyup   keypress
//keydown > keypress >  keyup 
//keydown和keypress的区别
//keydown 可以响应任意键盘按键 ，keypress 只可以响应字符类键盘按键
//keypress返回ASCII码，可以转换成相应字符


//文本类操作事件
//input,focus,blur,change --- 失去焦点事件----- 聚焦事件


//事件分类
//窗体操作类（window上的事件）
//scroll  --- 当滚动条一滚动事件触发
//load  ---- 等程序都加载完才触发load的事件，，慢







//json  ---- {}
//json是一种传输数据的格式，（以对象为样板，本质上就是对象，但用途有区别，对象就是本地用的，json是用来传输的
//JSON.parse(obj); string --- json  ---- 把字符串转换成对象/json传输
//JSON.stringify(obj);  json --- string  ---- 把对象/json转换成字符串传输

//异步加载js
//js加载的缺点：加载工具方法没必要阻塞文档，过多js加载会影响页面效率，
//一旦网速不好，那么整个网站将等待js加载而不进行后续的渲染等工作。
//有些工具方法需要按需加载，用到在加载，不用到不加载。

//javascript异步加载的三种解决方案
//1、defer 异步加载，但要等到dom文档全部解析完才会被执行，只有IE能用，也可将代码写到内部
//列： <script src="./click.js" defer = 'defer'></script>
//2、async 异步加载，加载完就执行，async只能加载外部脚本，不能写在script标签里面。---- W3C标准方法，兼容性好
//注、以上两种方法执行时也不会阻塞页面
//3、创建script，插入到DOM中，加载完毕后callBack




//js时间线
//1，创建document对象，开始解析web页面。解析HTML元素和他们的文本内容添加Element对象和Text节点到文档中
//   阶段document.readyState = 'loading'
//2，遇到link外部css，创建线程加载，并继续解析文档。
//3，遇到script外部js，并且没有设置async,defer，浏览器加载，并阻塞，等待JS执行完并加载改脚本，然后继续解析
//4，遇到script外部js，并且没有设置async,defer，浏览器创建线程加载，并继续解析文档
//   对于async属性的脚本，脚本加载后立即执行。（异步禁止使用document.write)
//5，遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档。
//6，当文档解析完，document.readyState = 'interactive'。
//7，文件解析完后，所有设置的defer的脚本会按照顺序执行，注：与async的不同，但同样禁止使用document.write
//8，document对象触发DOMContentLoaded事件，这也标志着程序从同步脚步执行阶段，转换为事件驱动阶段
//9，当所有的async的脚本加载完成并执行后，img等加载完成后，document.readyState = 'complete',window对象触发事件
//10，从此，以异步方式处理用户输入，网络事件等；