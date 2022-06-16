// var a = {n : 1};
// var b = a;
// a.x = a = {n: 2};       
// console.log(a.x)  //und
// console.log(b.x) //n:2


//地址1  a = {n : 1};

//


var a = {n:1}
var b = a; 
console.log(a); //n:1
a.n = a = {m:1};
console.log(a) //m;1
console.log(b) //{n:{m;1}