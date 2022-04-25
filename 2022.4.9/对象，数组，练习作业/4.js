/**
 * 修改对象，仅保留需要的属性
 * @param {Object} obj 要修改的对象
 * @param {Array<string>} keys 需要保留的属性名数组
 */
function pick(obj, keys) {
 //第一步，循环遍历对象，拿到对象obj里面的每一个之和属性；
    for(var prop in obj){
        //表示已经拿到了对象里面属性名和属性值
        //  console.log(obj[prop]);

        //第二步，遍历数组，拿到数组里面的每一项
        //includes 数组的一个方法，判断数组里面的是否包含某一项，如果包含返回true,不包含返回false；
        //判断；如果keys数组里面includes不包含obj对象里面的属性名prop，那么就删除对象里面的属性名和属性值。
        if(!keys.includes(prop)){
            delete obj[prop];
        }
    }
    console.log(obj);
}
 
var obj ={
    a:1,
    b:2,
    c:3
}
pick(obj,['a','b']);

// var arr = [1,2,3];
// function test (dome) {
//     dome = [1,2,3,4]
// }
// test(arr);
// console.log(arr);


// var a = 1;
// var b = 2;

// var c = a;
//     a = b;
//     b = c;

//     console.log(a,b);