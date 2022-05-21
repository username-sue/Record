//动画公用函数
function acPub(obj){
    var beg = obj.beg; //起始值
    var finish = obj.finish; //结束值
    var tt = obj.tt || 1000; //总时间
    var inr = obj.inr || 15 ;//每隔15毫秒
    var tot = Math.floor(tt / inr);  //总的改变几次
    var efl = (finish - beg) / tot; //每一次改变的值
    var index = 0 //当前变化的次数
    var timeID = setInterval(function(){
        beg += efl;//起始值 加上 每一次变化改变的值。
        index ++;//当前变化次数增加
        if(index >= tot){ //当前次数大于总的次数时
            //变化的次数达到了
            beg = finish; //把结束值赋给起始值
            clearInterval(timeID);
            //变化完结束后，传一个回调函数 
            obj.onmove && obj.onmove(beg);
            //变化完成后要做什么，把代码写在这个函数里
            obj.onend && obj.onend();
            return;
        }
        obj.onmove && obj.onmove(beg);
    },inr)

}