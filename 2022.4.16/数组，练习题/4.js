// 判断下面的文件是否符合后缀名要求
// 合法的后缀名：.jpg  .gif  .bmp .webp  .png

var filename = 'd://files/mymap/3.jpg';

    var last = filename.lastIndexOf('.')
    var temp = filename.substring(last);
    
    var arr = ['.jpg','.gif','.bmp','.webp','.png'];
   if(arr.includes(temp)){
       console.log('合法');
   }else{
       console.log('不合法');
   }

   /**
    * 第一步，先拿到它的后缀名；
    * .lastIndexOf('.'),这个方法是拿到指定向的最后一位下标，里面点，译为拿到最后一个点的下标。
    * .substring(last)，这个方法是返回一个从开始位到最后位的字符串，
    * 如果不写第二个参数，那就默认截取到末尾字符返回。
    * 第二步，把合法的后缀名放到一个数组里面，然后判断数组里面是否包含拿到的后缀名；
    * .includes，这个方法是判断数组中是否包含某个值的。
    * 最后如果包含就打印合法，不包含就打印不合法。
    */