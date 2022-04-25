// 将下面的字符串分割成一个单词数组，同时去掉数组中每一项的,和.
var str =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.';
var temp = str.split(' ');
// console.log(temp);
for(var i = 0; i < temp.length; i++){
  console.log(temp[i].replaceAll(',',' ').replaceAll('.',' '));
}


/**
 * 第一步，str.split(' ');这个方法是把当前字符串按照某个字符串分割成一个字符串数组返回
 * 由于单词之间都是空格，所有里面就按照空格分隔；
 * 第二部，for循环分割出来的字符，拿到每一项，
 * replaceAll(',',' ')，这个方法是替换字符串中的所有对应字符为新字符
 * 这里是把字符中的逗号替换为空的意思。
 */