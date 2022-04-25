// 得到下面字符串中第一个i和最后一个i之间的子串

var str =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.';
var one = str.indexOf('i');
var two = str.lastIndexOf('i');
var last = str.substring(one,two);
console.log(last);

/**
 * 第一步，利用.indexOf('i')把要判断的值传进去，它会根据传进去的值判断当前字符的第一个下标位置
 * 第二步，.lastIndexOf('i')；把要判断的值传进去，它会根据传进去的值判断当前字符的第一个下标位置
 * 第三步 .substring(one,two) 这个方法是返回从开始位one到结束位two之间的字符
 */