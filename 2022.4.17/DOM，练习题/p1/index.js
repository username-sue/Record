// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上

/**
 * 创建一个英雄元素
 */

function hero(h){
    //创建a标签
    var a = document.createElement('a');
    var container = document.querySelector('.container');
    container.appendChild(a);
    a.href = 'https://pvp.qq.com/web201605/herodetail/'+ h.ename +'.shtml'
    a.target = '_blank';
    a.className = 'item';


    //创建图片
    var img = document.createElement('img');
    a.appendChild(img);
    img.src = 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/'+ h.ename +'/'+ h.ename +'.jpg'
    img.alt = '';

    //创建span
    var span = document.createElement('span');
    a.appendChild(span);
    span.innerHTML = h.cname;
}

for(var i = 0; i < heros.length;i++){
    hero(heros[i]);
}

/**
 * 第一步，创建函数，传入形参，for循环数组，拿到数组里面的每一项。
 * 第二步，函数体里面先创建一个a标签；然后获取到html文件里面的类样式，class
 * 在class选择器里面添加a标签；container.appendChild(a);注意这里括号里面不要用字符串
 * 然后引入相对应的地址。
 * 第三步，创建img标签，在a标签里面引入，然后引入对应的图片地址。
 * 第四步，创建span标签，在a标签里面引入，然后span.innerHTML = h.cname; 
 * 把span里面的文字添加进去。
 */