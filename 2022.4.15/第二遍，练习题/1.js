// 生成一个a-z的字符串
/**
 * 首先先利用'a'.charCodeAt()这个方法拿到a和z的下标字符编码
 * 然后for循环
 * 最后利用String.fromCharCode(i)这个方法把i传进去，根据字符的编码值得到对应的字符
 */
    var str = '';
    for(var i = 97; i <= 122; i++){
       var s = String.fromCharCode(i);
        str += s;
    }
    console.log(str);