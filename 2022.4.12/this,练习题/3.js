function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + lastName;
}

// 能否不使用new，通过User函数创建对象（不能更改User函数）
//提示，这里使用call aplly
var obj = {};
User.apply(obj,['苏','发朵'])
console.log(obj);