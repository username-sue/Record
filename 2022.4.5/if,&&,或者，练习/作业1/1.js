/* 
编写一个完美的求和函数：
1. 若两个数据都是普通数字，求和即可
2. NaN的数据需要变为0
3. 其他类型的数据需要转换为数字
*/

function sum(a, b) {
  // code here
  if(typeof(a) == Number || typeof(b) == Number){
    console.log(`a=${a},是${typeof(a)}类型`);
    console.log(`a=${b},是${typeof(b)}类型`);
    return a + b;
  }
  if(isNaN(a)) {
    a = 0;
    console.log(`a=${a},是${typeof(a)}类型`);
    console.log(`a=${b},是${typeof(b)}类型`);
  }
  if(isNaN(b)){
    b = 0;
    console.log(`a=${a},是${typeof(a)}类型`);
    console.log(`a=${b},是${typeof(b)}类型`);
  }
  a = Number(a);
  b = Number(b);
    return a + b;
  // return a + b;

}
 
console.log(sum('abc',2));  // 3  3 0
