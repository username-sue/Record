//封装插件
//里面传4个参数
//page 当前页码数
//pageNumber 总页数
//mostNumber 中间的数字
//container  分页创建好后放入那个容器
function createPager(page,pageNumber,mostNumber,container) {
    //在做后续工作之前，要先把容器内容清除
    container.innerHTML = '';

    //首先创建容器，并且给它加上类样式；
    var div = document.createElement('div');
    div.className = 'pager';

    //className, 要挂的样式类
    //text,  要添加的文字
    //newPage  要跳转的页面数
    function  currentPage(className,text,newPage) {
        var a = document.createElement('a');
        a.className = className;
        a.innerHTML = text;
        div.appendChild(a);
        // console.log(div);
        //给a标签绑定点击事件，点击跳转到几页；
        a.onclick = function () {
        //判断newPage是不是小于1，或者大于pageNumber 总页数 或者等于page
            if(newPage < 1 || newPage > pageNumber || newPage === page){
                return;
            }
        //没有if里面的情况，说明可以跳转，所谓跳转就是重新调用creatPager;
            createPager(newPage,pageNumber,mostNumber,container);
    
        }

    }

    //接下来创建分页，可以分为4个部分
    //1，首页和上一页
        if(page === 1){ //判断当前页码是不是1
            currentPage('disabled','首页',1);
            currentPage('disabled','上一页',page-1);
        }else{
            currentPage('','首页',1);
            currentPage('','上一页',page-1);
        }
    //2，中间的数字
    //首先要计算最小值和最大值；
        var min = Math.floor(page - mostNumber /2);//最小值
        if(min < 1){
            min = 1;
        }
        var max = min + mostNumber -1;//最大值
        if(max > pageNumber){
            max = pageNumber;
        }
    //接下来for循环生成分页数字
        for(var i = min; i <= max; i++){
            //判断一下i 是不是等于当前页，如果时则需要挂类样式
            if(i === page){
                currentPage('active',i,i);
            }else{
                currentPage('',i,i);
            }
        }
    //3，尾页和下一页
        if(page === pageNumber){ //判断当前页码是不是总页数
            currentPage('disabled','下一页',page+1);
            currentPage('disabled','尾页',pageNumber);
        }else{
            currentPage('','下一页',page+1);
            currentPage('','尾页',pageNumber);
        }
    //4，页面区域展示
        var span = document.createElement('span');
        span.innerHTML = page + "/" + pageNumber;
        div.appendChild(span);

    //最后将生成好的插件加到容器里去
        container.appendChild(div);
}