// 得到下面字符串中第一个i和最后一个i之间的子串

var str =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.';
var start = str.indexOf('i');
var last = str.lastIndexOf('i');
var s = str.substring(start,last);
console.log(s);

/**
 * indexOf();这个方法是得到开始位的下标，括号里面传要得到的下标的字符
 * lastIndexOf('i')；这个方法是得到最后位的下标
 * substring(start,last);这个方法是开始位start到结束位last之间的字符。
 */