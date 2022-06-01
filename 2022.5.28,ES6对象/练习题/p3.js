// 根据下面的调用和注释，完成函数 createOptions
function createOptions(option) {
  option = option || {};
  //定义一个默认对象，在调用函数，没有传值就显示默认对象的值
  const defaultOptions = {
    time: 1000, 
    speed: 50, 
    text: ''
  }
  return{
    ...defaultOptions,
    ...option,
  }
}
// console.log(createOptions({
//   time: 500,
//   text: 'hello world',
// }));
createOptions()// { time: 1000, speed: 50, text: '' }
createOptions({
  time: 500,
}); // { time: 500, speed: 50, text: '' }

createOptions({
  time: 500,
  text: 'hello world',
}); // { time: 500, speed: 50, text: 'hello world' }

