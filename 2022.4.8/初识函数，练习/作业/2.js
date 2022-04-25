// 完成下面的函数

/**
 * 在arr中寻找是否存在target
 * @param {Array} arr 要遍历寻找的数组
 * @param {any} target 要寻找的目标
 * @return {boolean} 是否找到
 */
function includes(arr, target) {
    // var find = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === target){
            // find = true;
            //简化写法
            return true;
        }
    }
    //简化写法
    return false;
    // if(find){
    //     return true;
    // }else{
    //     return false;
    // }
}
// console.log(includes([1,2,3,4,5],2));


// 利用上面的函数，完成下面的练习题
var nums = [1, 3, 8, 2, 5, 1, 9];
/* 
1. 判断nums中是否存在8，输出是或否
*/
// includes(nums,8) ? console.log('是') :console.log('否');

var nums2 = [6, 3, 2, 7, 11, 33];
/* 
2. 判断数字2是否同时存在于nums和nums2中，输出是或否
*/

// if(includes(nums,2) && includes(nums2,2)){
    //&&并且，当与&&两边都为true时，就为true，否则为falst
//     console.log('是');
// }else{
//     console.log('否');
// }


var nums3 = [2, 5, 1];
/* 
3. 思考题：判断nums3中是否所有数字都在nums中存在，输出是或否
*/
var find = false;
for(var i = 0; i < nums3.length; i++){
    if(!includes(nums,nums3[i])){
        find = true;
    }
}
if(find){
    console.log('否');
}else{
    console.log('是');
}
