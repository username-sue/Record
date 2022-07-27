//工具函数库

//时间戳转换 函数
export function formatDate(timestamp) {
    //创建一个时间对象
    const date = new Date(+timestamp);

    const year = date.getFullYear();//年
    const month = (date.getMonth() + 1).toString().padStart(2, '0');//月
    const day = date.getDate().toString().padStart(2, '0'); //日

    const hour = date.getHours().toString().padStart('2', '0');//时
    const minutes = date.getMinutes().toString().padStart(2, '0');//分
    const seconds = date.getSeconds().toString().padStart(2, '0');//秒

    const weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const week = weekArr[date.getDay()];

    return `${year}-${month}-${day} ${hour} : ${minutes} : ${seconds} ${week}`
}