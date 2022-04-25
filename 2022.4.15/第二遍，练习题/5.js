// name转换成驼峰命名
var name = 'has own property'; // --> hasOwnProperty
var str = name.split(' ');
var temp = '';
for(var i = 0; i < str.length; i++){
    var s = str[i];
    if(i > 0){
        s = s[0].toUpperCase() + s.substring(1);
        //先把它的首字母大写，然后在拼接上后面的字母从第2位开始拼接，也就是下标第1位
    }
    temp += s;
}




console.log(temp);

/**
 * 第一步，用xx.split这个方法，按照空格分隔，返回一个数组；
 * 第二部，循环数组，得到数组的每一项，由于驼峰命名只需要第一个单词之后的首字母大写
 * 所有这里要判断当i大于0时，它后面的首字母在大写
 * s[0].toUpperCase()这个方法是把字母转换成大写的，s[0]这里代表当前下标第0位字母大写
 *  s.substring(1) 这个方法是指返回从s的下标第1位开始截取，
 * 第二个参数如不传参的情况下译为截取到末尾字符
 */