/**
 * 将日期格式化为字符串
 * @param {Date} date 要格式化的日期对象
 * @param {string} format 格式化字符串 yyyy-年  MM-月  dd-日 HH-小时 mm-分钟 ss-秒 ms-毫秒
 * @return {string} 日期字符串
 */

function formatDate(date, format) {
  var year = date.getFullYear().toString().padStart(4,'0');
  var moth = (date.getMonth() +1).toString().padStart(2,'0');
  var day  = date.getDate().toString().padStart(2,'0');
  var hours = date.getHours().toString().padStart(2,'0');
  var  min = date.getMinutes().toString().padStart(2,'0');
  var second = date.getSeconds().toString().padStart(2,'0');
  var mil = date.getMilliseconds().toString().padStart(2,'0');

  return format.replace('yyyy',year)
               .replace('MM',moth)
               .replace('dd',day)
               .replace('HH',hours)
               .replace('mm',min)
               .replace('ss',second)
               .replace('ms',mil);
  // console.log(year,moth,day,hours,min,second,mil);
}

var date = new Date();
console.log(formatDate(date,'yyyy年 MM月 dd日 HH小时 mm分钟 ss秒 ms毫秒'));
// formatDate(date,'yyyy年 MM月 dd日 HH小时 mm分钟 ss秒 ms毫秒');

/**
 *  .getFullYear()获取年份，
 * .getMonth() +1获取月份，由于这个方法自身是-1的，所以在或许当月月份时应加1
 * .getDate()获取日，.getHours()获取小时，.getMinutes()获取分钟，
 * .getSeconds()，获取秒数，.getMilliseconds()获取毫秒。
 */

/**
 * 第一步，先创建一个时间对象，
 * 然后调用函数把创建好的时间对象作为实参传进去，把需要格式化的字符串大概格式先传进去
 * 第二步，在函数体里把需要获取的年，月，日，等等，用对应的获取方法写出来。
 * 第三步，把获取出来的对应的年月日，转化位字符串.toString()；
 * .padStart(2,'0')这个方法是指，如果这个数据不满两位时，就在前面填充0；
 * 第四步，把之前传进去的字符日期格式，替换成用方法转化出来的对应的值。
 * .replace('ms',mil);把ms替换成mil，最后把替换好的值全部返回。
 */