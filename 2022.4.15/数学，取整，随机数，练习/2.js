/**
 * 得到一个指定长度的随机字符串
 * 字符串包含：数字、字母
 * @param {number} length 字符串的长度
 * @return {number} 随机字符串
 */

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
/**
 * 第一种写法；
 * 第一步；定义一个数字母的字符串，在定义一个空字符串；
 * 第二部for循环形参的长度，形参会根据传进去的实参进行循环
 * 第三步，调用之间写好的取随机数的函数，里面的最小值传0，最大值根据字符串的长度来取 str.length
 * 同时定义一个变量来接收；
 * 最后把得到的随机数赋给定义好的空字符串，在循环体外面把结果返回；
 */
function getRandomString(length) {
    //第一种写法
    // var str = '123456789abcdrfghijklmnopqrstuvwxyz'
    // var temp = '';
    // for(var i = 0; i < length; i++){
    //     var index = getRandom(0,str.length);
    //     temp += str[index];
    // }
    // return temp;


    /**第二种写法 
     * 思路为：先用 Math.random()得到一组随机小数，
     * 然后在用toString(36)方法把数字转换成字符串，里面传36译为让其取36进制的数
     * 最后由于用Math.random()方法得到的是随机小数，
     * 所有这里要用.substring(2,2+ length)方法从下标位第2位开始取它后面的数；
     * 后面传的2+length，是取它的长度，根据实参传进去的数
     * 最后return把结果返回；
    */
    return Math.random().toString(36).substring(2,2+ length);
}
console.log(getRandomString(8));


