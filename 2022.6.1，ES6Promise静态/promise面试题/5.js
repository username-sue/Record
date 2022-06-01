async function m() {
  console.log(0);
  const n = await 1;
  console.log(n);
}
// function m() {
//   return Promise.resolve(1).then((n) => {
//     console.log(n);
//   });
// }

(async () => {
  await m();
  console.log(2);
})();

console.log(3);

//输出结果为 0，3，1，2