//try -----catch
//作用：为了防止代码报错的
//在try里面发生的错误，不会执行错误后的try里面的代码
                    // try{
                    //     console.log('a');
                    //     console.log('b');
                    //     console.log(d); //系统读到这行错误的代码，错误代码以后的代码都不会执行
                    //     console.log('dd')//不会执行
                    // }catch(e){
                    //     console.log(d);//相对于把try里面的错误代码扔到这来了，执行错误代码，系统就会提示
                    //     console.log(e.name + " " + e.meassage); //报错信息
                    // }
                    // console.log('cc');//这里的代码不影响，执行


//报错信息
//Error.name的六种值对应的信息
//1、EvalError:eval() 的使用与定义不一样
//2、RangeError: 数值越界
//3、ReferenceError:非法或不能识别的引用数值  （没有定义）
//4、SyntaxError:发生语法解析错误  （低级语法错误）
//5、TypeError:操作数类型错误
//6、URLError:URL处理函数使用不当



//ES5的严格模式
//浏览器是基于ES3.0的 + ES5.0的新增方法使用的
//ES3.0和ES5.0的冲突部分
//ES5.0的严格模式，那么ES3.0和ES5.0的冲突部分就是用ES5.0 ， 否则会用ES3.0
//ES5.0的严格模式的启用 "use strict";
//"use strict"; 写在整个页面的最顶端，它就是用来启用ES5.0严格模式的，可写在局部和全局


//es5不支持使用的一些方法属性
//4、不支持：with、arguments.callee、function.caller、变量赋值前必须声明、
//局部this必须被赋值（Person.call(null/undefined)赋值什么就是什么、拒绝重复属性和参数
//列,  命名空间
//with作用:可改变作用域链  ; 可以达到简化代码的效果
//with不好：它改变了作用域链，系统会消耗大量的内核去更改作用域链，从而使程序运行变慢；所以ES5不支持
                    // 'use strict';//es5里面使用就会报错
                    // var obj = {
                    //     bm1:{
                    //         jic:{
                    //             name:'zz',
                    //             age:18,
                    //         },
                    //         su:{
                    //             name:'cc',
                    //             sex:'male',
                    //         }
                    //     },
                    //     bm2:{
                    //         zhan:{
                    //             name:'aa',
                    //             height:180,
                    //         }
                    //     }

                    // }

                    // with(obj.bm1.jic){ //这时候指它直接上obj的作用域里面去访问值了
                    //     console.log(name);

                    // }

//arguments.callee、function.caller
//例
                        //     'use strict' //es5里面使用不支持，会报错
                        // function test(){
                        //     console.log(arguments.callee);
                        // }
                        // test();







//初识dom
//1,DOM ---- Document Objcet Model----文本 对象 模型  ---- 全称
//译：DOM提供了一系列方法，有利于操作html和xml的，这一系列方法的集合就叫做DOM；
//DOM定义了表示修改文档所需的方法，DOM对象即为宿主对象，由浏览器厂商定义，用来操作html和xml功能的一类对象集合
//也有人称DOM是对html和xml的标准编程接口。
//列
                            // var div = document.getElementsByTagName('div')[0];
                            // div.style.width = "100px";
                            // div.style.height = "100px";
                            // div.style.backgroundColor = "red";
                            // var count = 0;
                            // div.onclick = function(){
                            //     count ++;
                            //     if(count % 2 == 1){
                            //         this.style.backgroundColor = 'red';
                            // }else{
                            //     this.style.backgroundColor = 'green';
                            // }
                            // }
