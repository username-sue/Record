/* 
  有一个非常特别的对象，它的键值对是：
  0: 'a'
  1: 'b'
  how are you: 'fine thank you'
*/
// 用字面量表示该对象，然后分别读取它的每个属性输出


//注：对象的属性名都是字符在，所有需要使用单引号和双引号包起来
var obj = {
  0: 'a',
  1: 'b',
  // 这里的how are you 作为属性名必须加单引号，由于它时多个单词组合在一起
  //的属性名中间有空格则不符合标识符规范，故此需加''引号。
  'how are you': 'fine thank you'
}
// console.log(obj['how are you']) 单独输出属性
//  console.log(obj)   输出全部属性