//对象包装类
//对象属性未经声明就赋值，打印unfined;
//增：obj.sex = 11;
//删: delete madeng.sex;
//改:obj.sex = 11;
//查:obj.sex

//对象创建方法
//var obj = {};  对象字面量
///构造函数命名要符合大驼峰式
//构造函数  new obj();

//列1对象字面量；
//         var obj ={
//             name:'zhan',
//             sex:'male',
//             age:18,
//             dink:function(){
//                 console.log('nonono');
//                 this.age --;
//             }
//         }

// //列2 构造函数
//             function Sudent(sex,height){
//                 //隐式的生成 var this = {};
//                 this.name = 'zhan';
//                 this.age = 18;
//                 this.sex = sex;
//                 this.height = height;
//                 //return this;

//             }
//             var sudent = new Sudent('male',180);





//包装类
//注：原始值是不能有属性和方法的
			//1，new String(); 字符串
			//2，new Boolean(); 布尔
			//3，new Number(); 数字类型



//列题；写一个方法，求字符串的字节长度。
//已知条件1：当前字符位的unicode > 255，那么改字符的字节长度为2
			//已知条件2：<=255，为1
			//注：中文在unicode编码字符串字节长度是2，英文的是1，空格也是1.
            //方法：charCodeAt（）；是获取字符串的unicode编码
            //charCodeAt（）方法可返回指定位置的字符
            // var str = "abc苏siisisii";
            // function byte(str){
            //     var count = str.length;
            //     for(var i = 0; i < str.length; i++){
            //         if(str.charCodeAt(i) > 255){
            //             count ++;
            //             // console.log(str);
            //         }

            //     }
            //     return count;
            // }

            //byte(str);直接调用就行



//原型
//列1
            // Obj.prototype.name = 'zhang';
            // Obj.prototype.hight = 180;
            // function Obj(){
            //     this.age = 18;
            //     this.sex ='male';
            // }
            // var obj = new Obj();

//列2
//Obj.prototype = {}  ,简写方法。
            // Obj.prototype ={
            //     name:'zhan',
            //     hight:180,
            //     age:18,
            // }
            // function Obj(){
            //     // this.age = 18;
            //     this.sex ='male';
            // }
            // var obj = new Obj();


//原型链
//原型的最终端是object.prototype
            // Person.prototype.name = 'zhan';
            // function Person(){
            //     this.age = 18;
            // }
            // var person = new Person();

            // Father.prototype = person;
            // function Father(){
            //     this.sex = 'male';
            // }
            // var father = new Father();

            // Son.prototype = father;
            // function Son(){
            //     this.hight = 180;
            // }
            // var son = new Son();


//call/apply
//借用别人的方法封装自己的功能
//区别作用：改变this指向，传参位置不同，apply只能传一个实参，如需传多位参数则用[]，数组来传。
//列；
            function Father(age,hight){
                this.age = age;
                this.hight = hight;
            }

            function Son(age,hight,name, sex){//错误一，这里的age,hight,参数忘记传进来了
                // Father.call(this,age,hight);
                Father.apply(this,[age,hight]); //传参形式不同
                this.name = name;
                this.sex = sex;
            }

            var son = new Son(18,180,'zhan','male');