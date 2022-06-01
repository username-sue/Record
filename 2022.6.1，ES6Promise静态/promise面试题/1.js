const promise = new Promise((resolve, reject) => {
  console.log(1); 
  resolve();
  console.log(2);
});

promise.then(() => { //微队列
  console.log(3);
});

console.log(4);

//输出结果为1 2 4 3
