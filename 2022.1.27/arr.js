//数组
//数组字面量 var arr = [];
//var arr = new Arr();
//数组常用的方法
//改变原数组
 //push ,  pop , shift , unshift , sort , reverse
 //splice

 //push 
 //给数组最后一位加属性
        // var arr = [1,2,3];
        // arr.push(1,2);
//列
        // var arr = [1,2,3,4];
        // Array.prototype.push = function (){
        //     for(var i = 0; i < arguments.length; i++){
        //         this[this.length] = arguments[i];
        //     }
        //     return this.length;
        // }
        // arr.push(3,5);

//pop
//把数组的最后一位属性剪切出来
                // var arr = [1,2,3,4,5];
                // arr.pop();


//shift
//把数组的第一位属性删除/剪切出来
                // var arr = [1,2,3,4];
                // arr.shift();


//unshift
//给数组第一位增加属性
                //  var  arr = [1,2,3,4,5];
                //  arr.unshift(1,2); //打印结果1,2,1,2,3,4,5


//reverse
//把数组逆转排序，可倒序、正序
                //  var arr = [2,1,4,5,3,6];
                //  arr.reverse(); //打印结果 6，3，5，4，1，2


//splice
//从第几位开始，截取多少长度，在切口处添加新的数据
                // var arr = [1,2,3,4,5];
                // arr.splice(2,2,4);//打印结果 1，2，4，5


//sort
//给数组排序，可改变数组的升序/降序。
                // var arr = [3,2,4,1,6];
                // arr.sort(); //打印结果 1，2，3，4，6；
//列
//sort函数应用三部曲
//1，函数里面必须写2个形参
//2，看返回值，（1),当返回的的值为负数时，那么前面的数就放在前面
//            （2），当返回的值为正数时，那么后面的数就在前面
//            （3），当返回的值为0时，那么就不动
                // var  arr = [1,4,5,2,8,6];
                // //错误一arr.sort连接function这里不能用等号 ‘=’。
                // arr.sort(function (a,b){ //这里的a和b就代表数组里面的1和4
                //     if(a > b){
                //         return 1;
                //     }else{
                //         return -1;
                //     }
                //     // return a - b;
                // })

//列，给你一个数组，返回一个随机数，乱序的数
//Math.random() 译为：随机数  ,取0到1之间的开区间数
                // var arr = [1,2,3,4,5,6];
                //  arr.sort (function(){
                //    return Math.random() - 0.5;

                //  })


//不改变原数组
 //concet(连接的意思) , join ---->split , toString , slice

 //concet
 //连接两个数组
                // var arr = [1,2];
                // var arr1 = [3,4];
                // arr.concat(arr1); //打印结果 1，2，3，4


// toString
//把数组里面的值变成字符串
                // var arr = [1,2,3,4];
                // arr.toString(); //打印结果为字符串1，2，3，



//join
//意思是连接数组之间的值的作用，注：传参里面必须是是字符串类型
//split
//按什么参数进行拆分数组
                // var arr =[1,2,3,4,5];
                // var srt = arr.join('-');
                // arr.split('-');//这里就把-拆除了


//slice ， 意思是从该位截取，截取到该位。列 arr.slice()
//slice，如果是一个参数的情况，就是从第几位开始截取，一直截取到最后。如果没有参数就是全部截
                // var arr =[1,2,3,4,5];
                // arr.splice(0);






//类数组
//可以利用属性名模拟数组的特性
//可以动态的增长length属性
//如果强行调用类数组的push方法，则会根据length的属性值的位置进行属性的扩充
//列
            //  function test(){
            //     //  arguments.push(7);不可以
            //      console.log(arguments);
            //  }
            //  test(1,2,3,4);

//列2
//类数组的组成；
//属性要为索引属性（数字),必须要有length属性，最好加上push, 如果给一个对象加上splice 方法，那么它就变的像数组了
//也可以当对象用也可以当数组用
            // var obj = {
            //     "0":'a',
            //     "1":'b',
            //     "2":'c',
            //     "length":3,
            //     "push":Array.prototype.push,
            //     "splice":Array.prototype.splice,//加上这一步它就变得彻底像数组了
            // }

            // obj.push('d');



//数组去重，在原型链上编程
//列
                // var  arr = [1,2,1,1,2,2,3,3,5,5,4,4];
                // Array.prototype.unique = function(){
                //     //由于对象不能有重复的属性名，基于这一特点来去重
                //     var obj = {};//定义一个空对象，把arr数组的值当做对象得属性名填到obj里面去
                //     var arr = [];//由于原来定义的arr数组，不可改变原数组，所以这里定义了一个新数组，把去重后的值扔到新数组里面去。
                //     var len = this.length;//看数组的每一位
                //     for(var i = 0; i < len; i++){//循环看数组的每一位值
                //         if(!obj[this[i]]){// 取反，看数组obj里面的属性是否为unfindent
                //             obj[this[i]] = 'abc';//给obj里面随便加一个属性值，为了好区分
                //             arr.push(this[i]); //最后把去重后的结果扔到新定义的数组里面去
                //         }
                //     }
                //     return arr;
                // }



//封装type
//原始值，引用值
//call，借用别人的方法实现自己的功能
//列
                    function type( Target){
                        var obj ={
                            "[object Array]":'array',
                            "[object Object]":'object',
                            "[object Number]":'number - object',
                            "[object Boolean]":'boolen - object',
                            "[object String]":'string - object'
                        }
                        //判断Target是不是等于null,如果是就返回null
                        if(Target === null){//错误一这里少写了一个等号
                            return 'null';
                        }
                        //判断Target是不是等于function,如果是返回function
                        if(Target == 'function'){
                            return 'function';
                        }else if(typeof(Target) == "object"){
                            //调用对象原型里面的toString方法来进行判断
                            var str = Object.prototype.toString.call(Target);
                            return obj[str];
                        }else{
                            return typeof(Target);
                        }
                       
                    }