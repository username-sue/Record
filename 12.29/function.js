//2021.12.29
//听课练习，函数
//function
//1，function test(){

// }函数声明
// 2，var demo = function abc(){

// }函数表达式
// 3，var demo = function (){

//arguments 实参列表
// }匿名函数表达式
//写一个函数，实现加法计数器
// function mul(){
//     var conent = 0;
//     for(var i = 0; i < arguments; i++){
//         if(conent < 0){
//             mul++;
//             console.log(mul++);
//         }
//     }
//     break mul;
// }
// mul();


//写一个函数，实现n的阶乘
//n的阶乘，n*(n-1)
// function test(n){
//     if(n == 1){//问题1
//         break 1;
//     }
//     break n*test(n - 1);
// }
// test(8);
// console.log(test(8));


//写一个函数，实现斐波拉锲数列
//n*(n-1) + (n-2);
// function fb(n){
//     if(n == 1 || n == 2){
//         return 1;
//     }
//    return fb(n - 1) + fb(n - 2);
// }
// fb(10);
// console.log( fb(10));
//1 2 3 4 5 6 7 8 9  10

//2022/1/6
//写一个函数，功能式告知所选定的小动物的叫声
//列
//break终止循环
//default:语句，当所有条件语句都不满足/不相同时，那么它就会执行default后面的语句** 
//switch case ,和任何一种东西相比对，相同的就会执行后面的语句；

// function test(see){
//     switch (see){
//         case 'dog':
//             document.write('wang');

//             break;
//         case 'bird':
//              document.write('jiji');
//              break;
//         case 'cat':
//             document.write('miaomiao');
//             break;
//         case 'tiger':
//              document.write('wuwuwu');
//              break;


//     }
// }
// // test('dog');
// console.log(test('dog'));


//2022/1/11
//递归，求n的阶乘
//找规律
//找出口（已知条件）
//递归如果没有出口的话，那么程序就会一直循环
//列
// function mul(n){
//     //找出口，已知条件
//     if(n == 1 || n == 0){
//         return 1;
//     }


//     return n * mul(n - 1);//1，找规律
// }
// mul(5);


//列2
//递归，求斐波那契数列
//找规律 n*（n-1）+ （n-2)
//找出口，已知条件
// function fb(n) {
//     if (n == 1 || n == 2) {
//         return 1;
//     }


//     return n * fb(n - 1) + fb(n - 2);
// }
// fb(5);



        //2022/1/12/18
        //预编译四部曲
        //1、创建AO对象：执行期上下文，函数产生的存储库**

        //2、找形参和变量声明，将变量和形参名作为AO属性名，值为：undefined**

        //3、将实参值和形参值统一**

        //4、在函数体里找函数声明，值赋予函数体**。
        //列1
        // function bar(){
        //         return foo;
        //         foo = 10;
        //         function foo(){

        //         }
        //         var foo = 11;

        // }
        // console.log(bar());//function

        //创建AO对象
        // go{

        // }
//        AO{
                //foo; function
                
//        }


        //列2
        // console.log(bar());//11
        // function bar(){
               
        //         foo = 10;
        //         function foo(){

        //         }
        //         var foo = 11;
        //         return foo;
        // }
        
        // ao{
        //         foo;undefined;

        // }

        //列3
        function fn(a){
                console.log(a);//2
                var a = 10;
                console.log(a);//10
                function b(){

                }
                console.log(b);//function
                c = 11;
                console.log(c);//11
        }
        fn(2);
        // go{
        //         a =10;
        //         c;11;
        // }
        // ao{
        //         a;2
        //         b;function

        // }
