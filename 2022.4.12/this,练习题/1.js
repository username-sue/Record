var person1 = {
  name: 'monica',
  age: 17,
  sayHi: function () {
    // 完成该方法，打印姓名和年龄
    /**这里的this,指向person1 */
    console.log(this.name,this.age);
  },
};
/**由于这里调用了函数里面的sayHi方法，所以这时this指向 person1*/
person1.sayHi();
