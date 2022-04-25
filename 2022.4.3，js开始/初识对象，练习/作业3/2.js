/* 
邓哥，81岁，爱好香菜、秋葵、遛鸟
成哥，30岁，爱好扯淡、找邓嫂
monica，17岁，爱好奶茶、唱歌

用字面量描述上面的信息

思考：
1. 如何得到平均年龄
2. 如何得到所有人所有爱好的总数
*/

//答
var obj = [
    {name:'邓哥',age:81,loves:['香菜','秋葵','遛鸟']},
    {name:'成哥',age:30,loves:['扯淡','找邓嫂']},
    {name:'monica',age:17,loves:['奶茶','唱歌']}

]
// console.log(obj[0].loves[1]); //输出秋葵
//输出平均年龄
// var sum = (obj[0].age + obj[1].age + obj[2].age)/3;
// console.log(sum);

//输出所有爱好总数
// console.log(obj[0].loves + obj[1].loves + obj[2].loves);

    var str = 0;
        age = 0;
    // console.log('obj的length=',obj.length);
    for(var i = 0; i < obj.length; i++){
        // console.log(`obj[${i}]的loves = `, obj[i].loves);

        if(i===1) {
            console.log(obj[i].loves);
        }
        
        // console.log(`第${i+1}次str=`,str);
    }
    age = str /3;
    // console.log(str);
    // console.log(age);
