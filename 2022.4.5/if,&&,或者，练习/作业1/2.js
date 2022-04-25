/* 
  不使用if，判断一个年份是否是闰年，输出是或否

  闰年规则：
  1. 4年一闰，百年不闰
  2. 400年必闰
  上述两点满足其一即可
*/
var year = 100;

// 判断变量year是否是闰年
(year % 4 == 0 && year % 100 !== 0 ) || (year % 400 == 0)  ? console.log('是') : console.log('不是');


// console.log(5/2);
// console.log(5%2);