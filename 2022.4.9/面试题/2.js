// 下面的代码输出什么（京东）？
var foo = {
  n: 1,//4
};

var arr = [foo];//这里定义一个数组把foo传进去，{n:1}；

function method1(arr) {
  var bar = arr[0];// 定义一个bar，把数组arr[0]下标里面的第零位赋给bar,{n:1}
  arr.push(bar);//然后把bar:{n:1}赋给数组arr，这时候数组里面就变成了[{n:1},{n:1}]
  bar.n++;//然后bar里面的n加1 {n:2}
  arr = [bar];//然后bar变成了一个新数组，把它赋给了数组arr，打印；[{n:2}]
  arr.push(bar);//这时候再把bar赋给数组, 打印：[{n:2},{n:2}]
  //这里由于arr数组里的{n:2}相当于bar，他们指向的是同一个地址，
  arr[1].n++;//所以arr[1].n++，，打印[{n:3},{n:3}]
}
function method2(foo) {
  foo.n++;
  // console.log(foo)
}  
function method3(n) {
  n++;
}
method1(arr);
method2(foo);
method3(foo.n);
// console.log(foo.n);

console.log(foo.n, arr.length);//4,2
