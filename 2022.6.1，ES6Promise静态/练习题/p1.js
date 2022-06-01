/**
 * 根据页码获取学生数据，返回Promise
 * @param {Number} page 页码
 */
function fetchStudents(page) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error(`网络错误！获取第${page}页数据失败！`));
        return;
      }
      // 模拟学生数据
      const stus = new Array(10).fill(null).map((d, i) => ({
        id: `NO.${(page - 1) * 10 + i + 1}`,
        name: `姓名${(page - 1) * 10 + i + 1}`,
      }));
      resolve(stus);
    }, Math.floor(Math.random() * 5000));
  });
}

// 利用 fetchStudents 函数，完成下面的练习

// 获取1-10页的学生，最终按照页码的顺序合并成一个数组，任何一页的数据获取出现错误，则任务不再继续，打印错误消息
  const proms = new Array(10).fill(0).map((item,i) => fetchStudents(i + 1));
  // Promise.all(proms)
  // .then((result) =>{
  //   //flat()此方法用于把数组中的数据展开
  //   console.log(result.flat());
  // })
  // .catch((error) =>{
  //   console.log(error);
  // })
  
// 获取1-10页的学生，最终按照页码的顺序合并成一个数组，如果某些页码的数据获取失败，就不加入该数据即可
//  Promise.allSettled(proms)
//  .then((result)=>{
//     var result = result.filter(result => result.status === 'fulfilled')
//     .map((item)=>item.value).flat();
//     console.log(result);
//  })

// 获取1-10页的学生，打印最先获取到的数据，如果全部都获取失败，则打印所有的错误消息
  //  Promise.any(proms)
  //  .then((result)=>{
  //    console.log(result.flat());
  //  })
  //  .catch((error)=>{
  //    console.log(error.errors);
  //  })

// 获取1-10页的学生，输出最先得到的结果（有结果输出结果，有错误输出错误）
Promise.race(proms)
.then((result)=>{
  console.log(result.flat());
},(error)=>{
  console.log(error.errors);
})
