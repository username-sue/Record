// 下面的代码输出什么（字节）？

//注：这里的foo是作为一个地址，arr1和arr2都是指向这一个地址
var foo = { bar: 1 };//4

//1，由于下面的arr2[1].bar++; 他们执行的是同一个地址所以这里也加1 打印：{ bar: 2}
//2，由于下面的foo.bar++;自身加1，所以这时候 打印：{ bar: 3}
//3，由于下面的arr1[2].bar++; 他们执行的是同一个地址所以这里也加1 打印：{ bar: 4}
//最后由于arr1和arr2都指向同一个地址，所以程序运行完最后一步，arr2也变成了{ bar: 4}

var arr1 = [1, 2, foo];
//定义一个数组arr1，数组里面把foo对象传进去，打印[1,2,{bar:1}]

var arr2 = arr1.slice(1);
//3，slice ， 意思是从该位截取，截取到该位。列 arr.slice()
//在定义一个数组arr2，把数组arr1里面内容截取掉1位，然后把arr1在赋给arr2，打印：[2,{bar:1}]

arr2[0]++;
//然后arr2下标指向的第0位加1，打印：[3,{bar:1}]

arr2[1].bar++;
//然后arr2下标指向的第一位.bar++，打印：[3,{bar:2}]

foo.bar++;
//这里的foo.bar++，是指对象foo里面的bar加1 打印：[3,{bar:3}]

arr1[2].bar++;
//这里的数组arr1下标第2位.bar++，打印[1,2,{bar:4}]

console.log(arr1[1] === arr2[0]); //打印结果 false
//arr1[1] 也就是2 [1,2,{bar:1}] ； arr2[0]也就是3 [3,{bar:1}] ；2和3不等于；

console.log(arr1[2] === arr2[1]);//打印结果 true
//arr1[2] 也就是bar [1,2,{bar:4}] ； arr2[1] 也就是bar [3,{bar:4}] ；
//由于arr1里面的bar和arr2里面的bar他们都指向同一个地址，所以相等；

console.log(foo.bar);//打印结果 4
