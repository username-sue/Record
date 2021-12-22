// 练习
//打出100以内的质数
// var i = 1;
// for(var i = 0; i % 100; i++){
//     document.write(i +"  ");
// }




//1,计算2次幂，N可输入，n为自然数
//2*2*2
// var n = parseInt(window.prompt('input'))//输出按钮
// var mul = 1;//拿一个变量来存上一步的结果
// for(var i = 0; i < n; i++){//第一步，循环一遍
    // mul *= 2;//让他每次都乘2在把结果付给mul
    // document.write(mul);
// }
// document.write(mul);


//2,计算n的阶乘，n可输入
//5*4*3*2*1
// var sum = 1;//拿一个变量接受它的结果
// for(var i = 1; i <= n; i++){//先循环一遍
//     sum *= i;
// }
// document.write(sum);



// var n = parseInt(window.prompt('input'))
//阶乘 n的阶乘
//找规律，阶乘的计算公式n*(n-1)

//第二步先建立一个变量接受它的结果
    // var mul = 1;
    // for(var i = 1; i <= n; i++){   
    //     //1,var i = 0;先执行一遍 i < n;控制循环圈数，i++执行
    //     //2,错误1  让var i = 1;是因为0乘任何数都得0，所以这里最好写成1
    //     //3，错误3  让i <= n;循环圈数不变
    //     mul *= i; //执行语句，让i一直乘到想要的数，1*2*3*4*5*6*7*n............
    // }
    // document.write(mul);

        //阶乘递归式写法
    function mul(n){
        if(n == 1){
            return 1;
        }
        return n*mul(n - 1);
    }
  console.log( mul(5));

