// 将下面的rgb格式转换成为HEX格式
var rgb = 'rgb(253, 183, 25)';
var temp = rgb.replaceAll('rgb',' ').replaceAll('(',' ').replaceAll(')',' ').split(',');
var r = parseInt(temp[0]).toString(16) ;
var g = parseInt(temp[1]).toString(16);
var b = parseInt(temp[2]).toString(16);

console.log('#'+ r + g + b);