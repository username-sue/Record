// 下面代码输出什么？
var foo = {
  n: 0, //1
  k: {
    n: 0, //1
  },
};
var bar = foo.k; //把foo里面的k赋给bar ，这时候的bar指向的是foo里面k的地址
bar.n++; //这里的bar.n++相当于foo里面的k n加1，这里的bar和fool指向的是同一个地址
bar = { //这里bar又重新赋值了一个对象 {n:10}
  n: 10, //1
};
bar = foo; //这里又重新把foo赋给ber,原本bar里面的值又被赋值了
bar.n++; //这里的ber.n和foo.n指向的是同一个地址，里面的n都加1，
bar = foo.n; //这里是把foo里面的n也就是1赋给了bar
bar++; // 这里的bar++，就是它原本的结果1 在加1，结果为2
//所以最后结果打印 1，1
console.log(foo.n, foo.k.n); //2，1 这是之前理解错误的结果



// bar = 1

