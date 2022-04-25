/* 
1. 1~100求和
// */
//     var sum = 0;
//     for(var i = 1; i <= 100; i++){
//         sum += i;

//     }
//     console.log(sum);
/*  




2. 求某个数的阶乘
*/ 
 //n*(n-1)
 //错误1：sum赋值为0,计算不出结果，因为乘任何数都为0，所有要赋值为1
 //错误2，for循环的i也要赋值为1；
   var sum = 1;
   var n = 5;
    for(var i = 1; i <= n ; i++){
        sum = sum *i;
    }
    console.log(sum);
/* 




3. 数组求和
// */
//     var arr = [1,2,3,4,5];
//     var  arr1 = 0;
//     for(var i = 0; i <= arr.length ; i++){
//         arr1 += i;
//     }
//     console.log(arr1);
/* 
4. 求数组中的奇数的个数
*/
    // var arr = [1,3,5,6,7,8,9];
    // var arr1 = 0;
    //     for(var i = 1; i <= arr.length; i++){
    //         if(arr[i] % 2 !== 0){
    //            arr1++;
               
    //         }
    //     }
    //     console.log(arr1);


/* 
5. 求数组中的奇数和
*/
//     var arr = [1,3,5,6,7,8,9];
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             sum +=arr[i];
//         }
//     }
// console.log(sum);