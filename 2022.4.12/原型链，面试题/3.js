// 下面的代码输出什么？（京东）
Function.prototype.a = 1;
Object.prototype.b = 2;

function A() {}

var a = new A();

//a是属于new 实例的，它所指向的原型是object，
//所以它自身没有的属性会上Object里面去找，没有就打印，undefined

console.log(a.a, a.b);//1 2 错误  //正确undefined，2
console.log(A.a, A.b);//1 und 错误  //正确1，2

//这里的A是自定义函数，它所指向的原型是function，所以它自身没有的属性
//就会上它的原型上面去找，而function的隐式原型__proto__最终指向Oject原型，
//所以它会继续向它上面的原型去找。故此，打印：1，2