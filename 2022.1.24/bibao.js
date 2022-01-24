//作用域链
//列
        // function a(){
        // var a = 123;
        //     function b(){
        //         var b = 256;
        //         function c(){
        //             var c = 654;
        //         }c();
        //     }b();

        // }a();

        //a定义； 0；go
        //a执行；  0；ao    1;go
        //b定义；  0；a ao    1;go
        //b执行；  0；B ao    1;A ao  2;go
        //c定义；  0；b ao    1;A ao   2;go
        //c执行；  0；c ao    1;B ao   2;A ao  3;go

//闭包
//被保存到外部的文件就叫做闭包
//实现累加器
//列
        // function test(){
        //     var num = 11;
        //     function b(){
        //         num ++;
        //         console.log(num);
        //     }
        //     return b;

        // }
        // var dome = test();//注，最后要拿一个东西来接收B被保存出来的结果
        // dome();
        // dome();
        // dome();

        //列2
        // function a(){
        //     var num = 123;
        //     function b(){
        //         num ++;
        //         console.log(num);//124
        //     }
        //     function c(){
        //         num --;
        //         console.log(num);//123
        //     }

        //     return [b,c];
        // }
        // var Mayrr1 = a();
        // Mayrr1[0]();
        // Mayrr1[1]();


        //存储


        //立即执行函数
        //执行完就被销毁
        //初始化函数/数据
        //立即执行函数不需要起名
        //(function (){}());  w3ca建议使用的一种方式
        //列1
        // (function (){
        //     var num = 12;
        //     console.log(num);

        // }())

        //列2
        // var num = (function (a,b,c){  //在这里接受D的结果
        //     var d = a + b + c;
             
        //     return d;//把D的结果返回


        // }(1,2,3,))


        //如何解决闭包
        //形成闭包
        // function test(){
        //     var arr = [];
        //     for(var i = 0; i < 10; i ++){
        //         arr[i] = function(){//相当于这里已经循环了10圈，循环完才把arr返回出去。
        //             console.log(i);
        //         }
        //     }
        //     return arr;


        // }
        // var myarr = test();
        // for(var j = 0; j < 10; j++){
        //     myarr[j]();//在这里调用arr的时候，它就已经循环了10圈
        // }

        //用立即执行函数解决闭包
        function test(){
            var arr = [];
            for(var i = 0; i < 10; i ++){
                //在这里加一个立即执行函数，相当于让它立即执行了10遍，执行一个后把结果返回
              (function (j){ 
                arr[j] = function(){
                    console.log(j);
                }
              }(i))
            }
            return arr;


        }
        var myarr = test();
        for(var j = 0; j < 10; j++){
            myarr[j]();
        }