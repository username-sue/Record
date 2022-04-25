/* 
1. 数组中是否存在某个数，输出 是 或 否
*/
    // var arr = [1,2 ,4,5,6,7,66];
    // target = 66;
    // isFind = false;
    // for(var i = 0; i < arr.length; i++){
    //   if(arr[i] === target){
    //     isFind = true;
    //       break;
    // }
    // }
    // if(isFind){
    //     console.log('是');
    // }else{
    //     console.log('否');
    // }
/* 



2. 数组中是否存在某个数，如果存在，则输出它所在的下标，如果不存在，则输出-1
*/
    var arr = [1,2,3,4,5,77,88];
        target = 99;
        isFind = false;
    for(var i = 0; i < arr.length; i++){
            if(arr[i] === target){ 
             isFind = true;
             console.log(i);
            }
    }
    if(!isFind){
        console.log(-1);
    }


/* 
3. 找到数组中第一个奇数和最后一个奇数，将它们求和
*/
    var arr = [4,5,6,7,8];
     var first = 0; //定义一个变量作为第一个奇数
     var last = 0;//定义一个变量作为最后一个奇数
     for(var i = 0; i < arr.length; i++){
         if(arr[i] % 2 !== 0){
             first = arr[i];
             break;
         }
     }
     for(var i = arr.length - 1; i >= 0; i--){
        if(arr[i] % 2 !== 0){
            last = arr[i];
            break;
        }
    }
    console.log(first + last);



/* 
4. 有两个数组，看两个数组中是否都存在奇数，输出 是 或 否
*/
    // var arr = [1,3,5,6];
    //      find1 = false; //定义一个变量find1判断数组里面如果有奇数就为true,如果没有就为false
    // var arr1 = [2,4,6,8];
    //     find2 = false;
    // for(var i = 0; i < arr.length; i++){
    //     if(arr[i] % 2 !== 0){  //判断数组中是否存在奇数
    //         find1 = true; 
    //         break;
    //     }
    // }
    // for(var i = 0; i < arr1.length; i++){
    //     if(arr1[i] % 2 !== 0){
    //         find2 = true;
    //         break;
    //     }
    // }
 
    // if(find1 && find2){
    //     console.log('是');
    // }else{
    //     console.log('否');
    // }
