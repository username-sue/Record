/* 
1. 输出一个对象的所有键值对
*/
    // var obj = {
    //     a:1,
    //     b:2,
    //     c:'abc'
    // }
    // for(var prop in obj){
    //     console.log(prop + '=' +obj[prop]);
    // }


/* 
2. 计算对象中字符串属性的数量
*/
    // var obj = {
    //     a:1,
    //     b:2,
    //     c:'acv'
    // }
    // var count = '';
    // for(var prop in obj){//遍历对象属性
    //     if (typeof(obj[prop]) === 'string'){ //判断对象里面的属性是不是字符串
    //         count = obj[prop];//如果是就把值赋给count
    //     }
    // }
    // console.log(count);
/* 


3. 将一个对象所有的数字属性，转换为字符串，并在其前面加上￥
例如：
{
    name:"xxx",
    balance: 199.8, //余额
    taken: 3000 //消费
}
-->
{
    name:"xxx",
    balance: '￥199.8', //余额
    taken: '￥3000' //消费
}
*/
    // var obj = {
    //     name:"xxx",
    //     balance: 199.8, //余额
    //     taken: 3000 //消费
    // }
    // var obj1 ={

    // }
    // //注：之所以建立一个新的对象是为了不改变原对象里面的属性
    // for(var prop in obj){
    //     //错误1， 判断条件里面typeof少了一个括号，导致把所有的值转换成了数字类型
    //     if(typeof(obj[prop]) === 'number'){//判断对象里面的值是不是数字类型
    //     //错误2，给obj1对象里面赋值的时候没有加上它的属性[prop]
    //         obj1[prop] = '￥' + obj[prop];//如果是那就直接赋值给新的对象obj1
    //     }else{
    //         obj1[prop] = obj[prop];
    //         //第一个条件成立后，obj里面的其他属性也直接赋给obj1
    //     }
    // }

    // console.log(obj1);


/* 
4. 按照下面的要求进行转换
[1, 2, 3]  
-->
[
    {number:1, doubleNumber: 2},
    {number:2, doubleNumber: 4},
    {number:3, doubleNumber: 6},
]
*/

 var arr = [1,2,3];
 //建立一个新数组接收要转换的值
 var arr1 = []
 //第一步，先for循环拿到arr数组里面的每一项，由于arr.length的下标是从0，1，2，3开始的
 //而我们仅需要拿到数组里面的三个数，这时候下标就会多一个没有值的出来，所有要arr.length-1
 for(var i = 0; i <= arr.length-1; i++){
    //  console.log(i);
    //第二部，拿到每个值之后，把arr的值扔到一个新数组里面去
    arr1.push({number:arr[i],doubleNumber:arr[i]*2});
 }
 console.log(arr1)