(function (){
    var checkbox = document.getElementById('checckboxs');
    var tbody = document.getElementsByTagName('tbody')[0];
    var checkboxNext = tbody.getElementsByTagName('input');
    var th = document.getElementsByTagName('th');
    var tr = tbody.getElementsByTagName('tr');
    // console.log(tr);
    // console.log(th);
    // console.log(checkbox,tbody,checkboxNext);
//给第一个多选框注册点击事件
        function checkboxClick(){
            checkbox.addEventListener('click',function(){
                //这里的this指checkbox，谁调用它就执行谁
                //这里要定义一个变量接收checkbox的的默认选中样式；
                var checkboxs = this.checked;
                //由于这个循环是循环tbody下面的所有的input框，
                //所有如果在循环体里直接给他赋值为this.checked，
                //系统会认为给它自身赋值选中样式
                for(var i = 0; i < checkboxNext.length; i++){
                    //当点击第一个checkbox的时候，就把它的选中样式赋给tbody下面的所有的input框
                    checkboxNext[i].checked = checkboxs;
                }
            })
        }
    checkboxClick();

//给tbody注册事件委托，
        function singleChoice(){
            tbody.addEventListener('click',function(e){
                if(e.target.tagName !== 'INPUT'){
                    return;
                }
                //定义一个当前已经选中的复选框数字
                var checkboxNumber = 0;
            for(var i = 0; i < checkboxNext.length; i++){
                //判断tbody下面的input框有没有选中
                //如果选中就让checkboxNumbe自身加1；
                if(checkboxNext[i].checked){
                    checkboxNumber++;
                }
                //判断tbody下面的input框的长度是不是等于checkboxNumber，
                //如果等于就把它赋值给第一个全选框的选中状态；
                checkbox.checked = (checkboxNext.length === checkboxNumber);
            }
            })
        }
    singleChoice();

//给th表头每一项注册事件；
    for(var i = 0; i < th.length; i++){
        thead(th[i],i);
    }
    function thead(th,index){
        if(index === 0){
            return;
        }
        th.addEventListener('click',function(){
            var arr = Array.prototype.slice.call(tr).sort(function(a,b){
                if(index === 2 || index === 4){
                    return a.getElementsByTagName('td')[index].innerHTML.localeCompare(b.getElementsByTagName('td')
                    [index].innerHTML, 'zh');
                }else{
                    return a.getElementsByTagName('td')[index].innerHTML - b.getElementsByTagName('td')[index].innerHTML;
                }
                
            })
            for(var i = 0; i < arr.length; i++){
                tbody.appendChild(arr[i]);
            }
            // console.log(arr);
        })
    }



})()