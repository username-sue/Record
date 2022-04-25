// toString方法属于Object.prototype，它会把对象转换为字符串的形式 [object Object]
// 这种格式并非每个对象想要的
// 1. 解释数组的toString为什么能得到不同的格式

//答：由于数组自身已有toString方法，不会使用object上面的toString方法，
//因此数组的toString方法和对象的不一样，所以能得到不同的格式。

// 2. 如果自己的构造函数希望改变toString，如何改变
 Person.prototype = { //这叫方法重写
    toString:function(){
        return 'hello!';
    }
}
    function Person(){
       

        }
    var person = new Person();
   console.log(person.toString());