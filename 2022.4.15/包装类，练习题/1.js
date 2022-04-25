// 生成一个a-z的字符串

//第以步，先用string.charCodeAt,这个方法是得到某一个下标的字符编码；
//只需要看a和z的字符编码是多少后，进行for循环，97代表字符a,122代表字符z
//循环每一项后，用String.fromCharCode(i)，这个方法根据编码值得到一个字符,
//所以把循环好的i传进去后，它就可以得到相对于字符了。
//注：如果要把得到的字符都扔到定义好的变量里，就使用字符拼接的方式 +=;
var str = '';
for(var i = 97; i <= 122; i++){
    var s = String.fromCharCode(i)
    str += s;
}
console.log(str);