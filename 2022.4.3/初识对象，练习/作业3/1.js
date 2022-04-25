/* 
邓哥，男，身高185
有邓嫂二位：
其一名为翠花，东北人
其二名为丧彪，铜锣湾人

用字面量描述上面的信息
*/

//答
//类数组的写法
//类数组即对象
var  dengObj = {
    name:'邓哥',
    sex:'男',
    height:185,
    wife:[{ name:'翠花',form:'东北'},
    { name:'丧彪',form:'铜锣湾'}
    ]
        

}
console.log(dengObj.wife[0]);