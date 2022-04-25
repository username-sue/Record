/**
 * 从一个数组中随机取出一项
 * @param {any[]} arr 数组
 * @return {any} 数组的随机一项
 */
function getRandomItem(arr) {
    var index = (getRandom(0,arr.length));
    return arr[index];
}
var arr = [1,2,3,'aa','cc','wew',6,8];
console.log(getRandomItem(arr));


/**
 * 得到一个指定范围内的随机整数
 * @param {number} min 范围的最小值
 * @param {number} max 范围的最大值（无法取到最大值）
 * @return {number} 范围内的随机整数
 */
 function getRandom(min, max) {
    //Math.random， 取0-1之间的随机数
    //Math.floor， 向下取整
    return Math.floor(Math.random() * (max - min) + min);
}