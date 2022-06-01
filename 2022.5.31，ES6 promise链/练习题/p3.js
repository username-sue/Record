// 下面代码的输出结果是什么

new Promise((resolve, reject) => {
  resolve();
})
  .then((res) => {
    console.log(res.toString()); //代码在这报错了 pr2没有对报错信息进行处理
    return 2;
  })
  .catch((err) => {
    return 3; //pr3 在这里对报错信息进行了处理 返回值为3
  })
  .then((res) => {
    console.log(res);//3  PR4是根据pr3处理的结果来看的，所以这里打印3
  });
