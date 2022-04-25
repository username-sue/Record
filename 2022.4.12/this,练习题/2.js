// 为所有对象添加方法print，打印对象的键值对
var obj1 = {
    a:1,
    b:2,
    c:3
}
var obj2 = {
    a:'a',
    b:'b',
    c:'c'
}
Object.prototype.print = function(){
    //这里的this,谁调用print这个方法，它就指向谁
    for(var prop in this){
        if(this.hasOwnProperty(prop)){
            var value = this[prop]
            console.log(prop,value);//打印它的属性值和属性名
        }
    }
}

obj1.print();
obj2.print();