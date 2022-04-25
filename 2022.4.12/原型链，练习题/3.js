// 创建一个没有隐式原型的用户对象，随意添加一些属性
var obj = {
    a:1,
    b:2,
}
Object.setPrototypeOf(obj,null);//设置Obj的原型为空