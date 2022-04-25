// 完成下面的函数

/**
 * 得到某个数的阶乘
 * 如果数小于了1，则得到0
 * @param {number} n 要求阶乘的数
 * @return {number} 阶乘结果
 */

//n*(n-1)
function factorial(n) {
    if(n == 1){
        return n = 1;
    }else if(n < 1){
        return n = 0;
    }
   return n*factorial(n-1);
}
 

// 利用上面的函数，完成下面的练习题

/* 
1. 输出5的阶乘
*/
// console.log(factorial(5));
/* 
2. 求5和6的阶乘之和，然后输出
*/
// console.log(factorial(5) + factorial(6));
/* 
3. 输出阶乘结果不超过1000的所有数字
*/
//错误1：factorial[i] 函数传参这里不应该用方括号，用（）就代表把i的值传到函数里面去进行运算。
// for(var i = 0; i< 1000; i++){
//     if(factorial(i) <= 1000){
//         console.log((i));
//     }else{
//         break;
//     }
// }
