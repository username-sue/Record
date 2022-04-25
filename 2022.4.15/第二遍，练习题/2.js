// 将下面的字符串分割成一个单词数组，同时去掉数组中每一项的,和.
var str =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.';
var temp = str.split(' ');
for(var i = 0; i < temp.length;i++){
  console.log(temp[i].replace(',',' ').replace('.',' '));
}




/**
 * 第一步，先用XXX.split(' ')这个方法把当前字符按照空格分隔出来；
 * 第二部把分隔出来的单词之间的逗号和点去掉，用.replaceAll()这个方法，替换字符串中对应的字符为新字符
 * 
 */