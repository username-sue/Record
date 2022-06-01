// 得到一个随机数组成的数组，数组长度为10，随机数的范围在0-1之间
// 结果类似于：[0.262, 0.167, 0.841, ...]
//     const arr = Array(10).fill(0).map(function (){
//     return Math.random();
// })
// console.log(arr);

// 得到一个随机数组成的数组，数组长度为10，随机数的范围在10-100之间
// 结果类似于：[35, 66, 45, ...]

// const arr = Array(10).fill(0).map(function (){
//     return Math.floor(Math.random()* 90 + 10);
// })
// console.log(arr);
// 判断某个字符串s是否为 .jpg、.png、.bmp、.gif 中的一个

//第一种写法
    // const str = '.jpg .png .bmp .gif ';
    // let s = '.jpg';
    // if(str.includes(s)){
    //    console.log('是');
    // }else{
    //     console.log('否');
    // }

//第二种写法
//     const s = '.jpg'
//     const arr = ['.jpg','.png','.bmp','.gif'];
//    const result = arr.includes(s);
//    console.log(result);

// let arr = [5];
// function num(n){
//     if(n === 1){
//         return 1
//     }
//     return  n * num (n - 1);
// }
// console.log(num(arr));
//数组求和，递归
const arr = [1,2,3,4,5];
function num(arr) {
    let timp = 0;
    let result = function (n){
        if(n.length > 0){
            timp += n.pop();
            result(n);
        }
    }
    result(arr);
    return timp;
}
console.log(num(arr));
