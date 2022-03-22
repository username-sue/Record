//日期对象  ----- 是系统提供好的
//Date() ----- new Date ();

//Date对象常用的几个方法
//* getTime() 返回自 1970 年 1 月 1 日午夜以来与指定日期的毫秒数。
//getDate()   返回月中的第几天（从 1 到 31）。
//getFullYear()    	返回年份。
//getHours()   返回小时（从 0-23）。
//getMilliseconds()   返回毫秒（0-999）。
//getMinutes()   	返回分钟（从 0-59）。
//getMonth()       返回月份（从 0-11）。
//getSeconds()     返回秒数（从 0-59）。
//setTime()       将日期设置为 1970 年 1 月 1 日之后/之前的指定毫秒数。
//setFullYear()    设置日期对象的年份
//注：Date对象还有很多方法，如后期需要用到可查w3


//js定时器
//setlnterval();
//setTimeout();  ----延时执行 ，并且只执行一次
//clearlnterval(); -----    清除定时器
//clearTimeout();
//全局window上的方法，内部函数this向window
//注：setlnterval(function (){},100);