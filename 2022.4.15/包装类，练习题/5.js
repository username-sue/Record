// name转换成驼峰命名
var name = 'has own property'; // --> hasOwnProperty
var str = '';
var temp = name.split(' ');
for(var i = 0; i < temp.length; i++){
// console.log(i)
    var count = temp[i];
if(i > 0){
    count = count[0].toUpperCase()+ count.substring(1)
}
    str += count;
}
console.log(str);