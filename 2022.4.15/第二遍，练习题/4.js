// 将下面的rgb格式转换成为HEX格式
var rgb = 'rgb(253, 183, 25)';
var temp = rgb.replaceAll('rgb',' ').replaceAll('(',' ').replaceAll(')',' ').split(',');
var r = parseInt(temp[0]).toString(16);
var g = parseInt(temp[1]).toString(16);
var b = parseInt(temp[2]).toString(16);

console.log('#' + r + g + b);
/**
 * 第一步；先利用xx.replaceAll()这个方法把里面不要的属性替换为空
 * 在用xx.split这个方法，把当前字符串按照逗号分隔，返回一个数组
 * 第二步，通过数组可以取下标这一属性，用parseInt(temp[2])这个方法把值转换成整数
 * 最后，用.toString(16)方法把它转化为16进制的数；
 */