const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// 遍历对象的所有属性名
  // for (const key  of Object.keys(obj)) {
  //   console.log(key);
  // }
// 遍历对象的所有属性值
// for (const key  of Object.values(obj)) {
//   console.log(key);
// }

// 遍历对象的所有属性名和属性值
// for (const [a,b] of Object.entries(obj)) {
//   console.log(a,b);
// }

// 复制obj的所有属性到一个新的对象
  // const obj1 = {
  //   ...obj,
  // }
  // console.log(obj1);

// 复制obj除a以外的所有属性到一个新的对象
// const {a, ...obj1} = obj;
// console.log(obj1);