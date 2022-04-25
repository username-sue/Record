var div = document.querySelector('.content');
var sizi = div.innerHTML;
var reg = /\s+.+/g;
//这里用的回调函数。函数的形参s就是div里面的文本内容
var  newReg = sizi.replace(reg,function(s){
        var s = s.replace(/\s/g,'');
        s = '<p>'+ s + '<p>';
        return s;
})

div.innerHTML = newReg;