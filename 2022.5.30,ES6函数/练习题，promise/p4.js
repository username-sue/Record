// 下面的任务最终状态是什么，相关的数据或失败原因是什么，最终输出什么

new Promise((resolve, reject) => {
  console.log('任务开始');
  resolve(1);
  reject(2);//无效代码 任务总是从未决阶段变到已决阶段，无法逆行
  resolve(3);//无效代码
  console.log('任务结束');
});

new Promise((resolve, reject) => {
  console.log('任务开始');
  resolve(1);
  resolve(2);//无效代码
  console.log('任务结束');
});
