setTimeout(() => {
  console.log(1);
});

const promise = new Promise((resolve, reject) => {
  console.log(2);
  resolve();
});

promise.then(() => {
  console.log(3);
});

console.log(4);

//答；输出结果为；2，4，3，1