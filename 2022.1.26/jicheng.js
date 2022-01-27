//继承发展史
//原型链----继承了过多的属性不好
//call/apply -------不能借用构造函数的原型 
//共享原型
//不好；不能有自己单独的原型

        // Father.prototype.name = 'zhan'
        // function Father(){

        // }

        // function Son(){

        // }

        // Son.prototype = Father.prototype;
        // Son.prototype.sex ='male'; //Son的原型上不能给自己单独加属性，如果给Son原型上加了属性，那么随之Father也会继承。
        // var son = new Son();
        // var father = new Father();

//封装函数/功能
        // Father.prototype.name = 'zhan'
        // function Father(){

        // }

        // function Son(){

        // }

        // function inherit(Target,Origin){
        //     Target.prototype = Origin.prototype;
        //     Target.prototype.sex ='male'; //Son的原型上不能给自己单独加属性，如果给Son原型上加了属性，那么随之Father也会继承。
        // }
        // inherit(Son,Father);
        // var son = new Son();
        // var father = new Father();


//圣杯模式
//可以解决共享原型不能给自己原型单独加属性的问题，可以有自己独立的原型
//列
//    Father.prototype.name = 'zhan'
//         function Father(){

//         }

//         function Son(){

//         }

//         function inherit(Target,Origin){
//            function F(){};
//            F.prototype = Origin.prototype;
//            Target.prototype = new F();//到这部还不完美
//         //    Target.prototype.sex = 'male';//这时候给son自己的原型加属性，father就不会随之继承了
//            Target.prototype.constructor = Target;//这一步是让son的constructo方法属于自身
//            Target.prototype.oneself = Origin.prototype;//这一步是让son知道自己继承自谁的原型
//         }
      
//         inherit(Son,Father);
//         var son = new Son();
//         var father = new Father();

//高级模式
//闭包属性私有化
        //  Father.prototype.name = 'zhan'
        //     function Father(){

        //     }

        //     function Son(){

        //     }

        //     var inherit = (function (){
        //         var F = function (){};//属性私有化
        //         return function (Target,Origin){
        //             F.prototype = Origin.prototype;
        //             Target.prototype = new F();
        //             Target.prototype.age = 18;//给son自己的原型加属性不受father的影响。
        //             Target.prototype.constructor = Target;
        //             Target.prototype.oneself = Origin.prototype;
        //         }

        //     }())
        //     inherit(Son,Father);
        //     var son = new Son();
        //     var father = new Father();




//命名空间
//为了解决变量重名问题
//管理变量，防止污染全局
            // var name = 124;
            // var init = (function (){//用立即执行函数
            //     var name = 123;//私有化属性
            //     function callName(){
            //         console.log( name);//打印的是123
            //     }
            //     return function (){
            //         callName();
            //     }
            // }())
            // init();

//列2
            // var name = 800;
            // var init = (function(){
            //     var name = 1222;
            //     function callName(){
            //         console.log(name);
            //     }

            //     return function (){  //接口
            //         callName();
            //     }
            // }())
            // init();


//实现方法的连续调用
//必须用this return；  这里的this指向是第一人称 ‘我’，
            // var obj = {
            //     healthy:function(){
            //         console.log('abjjj');
            //         return this; 
            //     },
            //     unhealthy:function (){
            //         console.log('shengbing');
            //         return this;
            //     },
            //     play:function(){
            //         console.log('happly');
            //         return this;
            //     },
            //     noPlay:function(){
            //         console.log('no ,happly');
            //         return this;
            //     }
                
            // }
            // obj.healthy().unhealthy().play().noPlay();


//属性的表示方法
//调用属性时系统会隐式的obj["name"]
//obj.name ----->系统隐式的加 obj["name"]
//属性拼接
//要实现属性名拼接，只能用‘【】’形式
//列
            // var obj = {
            //     wifl1:{name:'zhan'},
            //     wifl2:{name:'xiaoli'},
            //     wifl3:{name:'xiaowan'},
            //     wifl4:{name:'xiaoming'},
            //     sayWifl:function(num){
            //       return this['wifl' + num];
            //     }
            // }
            // obj.sayWifl(4);

//对象，枚举，遍历
//for in
//hasOwnProperty
//in
//in实用性少，它时一个操作符，它只能判断Obj对象里面和原型里面有没有你要访问的属性
//instanceof 
//列  for in
                // var obj ={
                //     name:'zahn',
                //     age:18,
                //     sex:'male',
                //     higiht:180
                // }
                // for(var prop in obj){  //for in 把对象的属性名每一位都拿出来了
                //     console.log(prop);//打印属性名
                //     //for in循环里面访问或者打印属性值的时候必须要用中括号【】，
                //     console.log(obj[prop]);//打印属性值，每一位
                  
                // }

//hasOwnProperty
//判断属性是不是自身的方法
            //     var obj ={
            //         name:'zahn',
            //         age:18,
            //         sex:'male',
            //         higiht:180,
            //          __proto__:{
            //             lastName:'suusu',
            //     }
            //     }
            //     for(var prop in obj){  //for in 把对象的属性名每一位都拿出来了
            //        if(obj.hasOwnProperty(prop)){ //判断obj里面的属性是不是属于它自身的
            //            console.log(obj[prop]);
            //        }
                
                
            // } 


//instanceof 
//instanceof是判断 A对象是不是 B构造函数构造出来的
//看A对象的原型链上有没有 B的原型
                // Obj.prototype.name = 'zhan';
                // function Obj(){
                    
                // }
                // Son.prototype = Obj.prototype;
                // function Son(){

                // }

                // var obj = new Obj();
                // var son = new Son();
                // obj instanceof Obj;



//this
//函数预编译过程中，this指向window
                // function test(){
                //     console.log(this);//this指向window
                // }
                // test();

//全局作用域里面this指向windo
                // console.log(this); //this指向window
 //call/apply可以改变函数运行时的this指向
 //obj.function(); function()里面的this指向obj*  这里指谁调用的this就指向谁
                    // var obj ={
                    //     name:'zzz',
                    //     a:function(){
                    //         console.log(this.name);//这里的this指调用者自身‘a'
                    //     }
                    // }       
                    // obj.a();        



//arguments
//arguments.callee  -----> callee指向的就是函数自身引用，就是函数自己
//function.caller   --->caller指的就是方法在哪调用的环境
                    // function test(){
                    //     console.log(arguments.callee == test);
                    // }
                    // test();

//列2
                    // var num = (function(n){
                    //     if(n == 1 || n == 0){
                    //         return 1;
                    //     }
                    //     return n * arguments.callee(n - 1);
                    //     //由于用立即执行函数 它没有函数名，所有这时候就用 arguments.callee 指函数自身引用

                    // }(5))
                

//克隆，深层克隆
//hasOwnProperty的作用：就是用来判断属性是不是自身的方法
//instanceof是判断 A对象是不是 B构造函数构造出来的
//for in 通过属性来控制循环圈数
                    // var obj ={
                    //     name:'zhan',
                    //     age:18,
                    //     sex:'male',
                    //     hegiht:180,
                    //     arr:['zzz','ddd',[1,2]],
                    // }

                    // var obj1 = {};
                    // function clone(Origin,Target){
                    //     for(var prop in Origin){ //先遍历一遍OBj里面的属性
                    //         if(Origin.hasOwnProperty(prop)){//让后判断OBJ里面的属性是否是自身的
                    //             if(typeof(Origin[prop]) == 'object'){//判断是不是引用值
                    //                 if(Origin[prop] instanceof Array){ //判断OBJ里面的属性是不是数字类型
                    //                     Target[prop] = []; //如是的话就在OBJ1里面创建一个新的数组 ；
                    //                 }else{
                    //                     Target[prop] = {};
                    //                 }
                    //                 clone(Origin[prop],Target[prop]);
                    //             }else{
                    //                 Target[prop] = Origin[prop]; //最后一步是让OBJ身上的属性继承OBJ1
                    //             }
                              

                    //         }
                    //     }
                    // }
                    // clone(obj,obj1);

//列2

                    var obj ={
                        name:'zhan',
                        age:18,
                        sex:'male',
                        hegiht:180,
                        arr:['zzz','ddd',[1,2]],
                    }

                    var obj1 = {
                        name:'zhan',
                        age:18,
                        sex:'male',
                        hegiht:180,
                        arr:['zzz','ddd',[1,2]],
                    };
                    function colne(Origin,Target){
                        for(var prop in Origin){//先遍历一遍对象
                            if(Origin.hasOwnProperty(prop)){ //判断它是不是自身的属性
                                if(typeof(Origin[prop]) == 'object'){ //判断它obj里面的属性是不是引用值
                                    Target[prop] = Origin[prop] == Array ? []:{};
                                    colne (Origin[prop],Target[prop]);
                                }else{
                                    Target[prop] = Origin[prop];
                                }
                               
                            }

                        }
                        return Target;
                    }
                    colne(obj,obj1);