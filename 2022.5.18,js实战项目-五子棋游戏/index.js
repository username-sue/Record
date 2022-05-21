//封装两个获取dom元素的方法
//此方法为单个元素获取
function $(selector) {
    return document.querySelector(selector);
}
//此方法为多个元素获取
function $$(selector){
    return document.querySelectorAll(selector);
}

//选中棋盘容器
var checkerBoard = $('.checkerboard');
// console.log(checkerBoard);

//定义一个变量，判断游戏是否结束；
var isGameEnd = false;
//定义变量，一开始为白子
var oneWhite = 'white';
//定义一个数组，接收棋子
var chessArr = [];

//初始化棋盘函数方法
function initChessboard() {
    //定义一个变量，接收生成好的结果
    var tableContent = "";
    //生成棋盘里面的格子，一共是14列14行；
    //循环生成行
    for(var i = 0; i < 14; i++){
        var row = '<tr>';
            //循环生成列
        for(var j = 0; j < 14; j++){
            //这里用的是字符串模板和自定义属性
            row += `<td data-row='${i}' data-line='${j}'></td>`;
        }
        row += '</tr>'
        tableContent += row;
    }
    checkerBoard.innerHTML = tableContent;
}

//绑定点击事件
function bindingEvent() {
    checkerBoard.onclick = function (e) {
        // console.log(e.target.dataset);
        if(!isGameEnd){
            //如果游戏没有结束，那就需要继续落子
            //获取用户点击的td信息，这里的data + set译为获取自定义属性的值
            var temp = Object.assign({},e.target.dataset);
            // console.log(temp);

            //判断用户点击的是不是td
            //注，这里e.target后面跟的名字是系统定义好的，tagName 是 DOM 对象的属性，
            //用于获取 DOM 对象的标签名，取出来是大写的，要取小写的用 nodeName。
            if(e.target.nodeName === 'TD'){
                //需要计算出棋盘每个格子的边长
                //格子宽度= 棋盘table容器的宽 * 0.92 / 14
                var tdWidth = checkerBoard.clientWidth * 0.92 / 14;
                //接下来需要确定用户落子是在格子四角的那一边
                var positionX = e.offsetX > tdWidth / 2;
                var positionY = e.offsetY > tdWidth / 2;

                //接下来组装棋子信息
                var chessPoint = {
                    x : positionX ? parseInt(temp.line) + 1 : parseInt(temp.line),
                    y : positionY ? parseInt(temp.row) + 1 : parseInt(temp.row),
                    c : oneWhite,
                }
                // console.log(chessPoint);
                //接下来就是绘制棋子，定义一个方法；
                chessMove(chessPoint);
            }
        }else{
            //如果结束，那还要不要重新来一局
            if(window.confirm('是否需要重新来一局')){
               //重新进行初始化处理
               chessArr = [];//数组重新赋值为空；
               initChessboard(); //调用初始化方法
               isGameEnd = false;//重新开始游戏 
            }
        }
    }
}

//绘制棋子方法,接收一个参数，就是棋子的信息对象
function chessMove(chessPoint) {
    //在绘制棋子之前，需要先判断一下，改位置是否已经有棋子，如果有则不需要在落子
    if(exist(chessPoint) && !isGameEnd){
        //进入if说明可以绘制棋子，游戏没有结束
        chessArr.push(chessPoint);//将改棋子的信息扔到数组里；

        //根据字符串模板生成棋子，其实就是生成div，然后加到td里面去
        var newChess = `<div class = "chess ${chessPoint.c}" data-row = "${chessPoint.y}" data-line = "${chessPoint.x}"></div>`;
        // console.log(newChess);

        //接下来根据落子的位置，来调整棋子
        if(chessPoint.x < 14 && chessPoint.y < 14){
            var td = $(`td[data-row='${chessPoint.y}'][data-line= '${chessPoint.x}']`);
            td.innerHTML += newChess;
        }
        //x如果等于14，说明是右边那条线
        if(chessPoint.x === 14 && chessPoint.y < 14){
            var td = $(`td[data-row='${chessPoint.y}'][data-line= '13']`);
            td.innerHTML += newChess;
            td.lastChild.style.left = '50%';
        }
        //y如果等于14，说明是最下测那条线
        if(chessPoint.x < 14 && chessPoint.y === 14){
            var td = $(`td[data-row='13'][data-line= '${chessPoint.x}']`);
            td.innerHTML += newChess;
            td.lastChild.style.top = '50%';
        }
        //x和y如果等于14，说明是最右下脚
        if(chessPoint.x === 14 && chessPoint.y === 14){
            var td = $(`td[data-row='13'][data-line='13']`);
            td.innerHTML += newChess;
            td.lastChild.style.left = '50%';
            td.lastChild.style.top = '50%';
        }

        //接下来切换棋子的颜色
        oneWhite = oneWhite === 'white' ? 'black' : 'white';
    }
    check()//根据此方法判断游戏是否结束；
}

//此方法判断改棋子是否存在
function exist(chessPoint) {
    //arr.find() 返回数组中满足提供的测试函数的第一个元素的值，
    //若没有满足测试函数的元素，则返回undefined
    var result = chessArr.find(function(item) {
        return item.x === chessPoint.x && item.y === chessPoint.y;
    })
    return result === undefined ? true : false ;
}

//检查游戏是否结束，检查是否有符合要求的棋子
function check() {
    //遍历数组里面的每一个棋子
    //满足要求的有4种；横着，竖着，斜着（2种）；
    for(var i = 0; i < chessArr.length; i++){
        var curChess = chessArr[i];
        var chess2,chess3,chess4,chess5;
        //检查横着的，有没有5颗颜色形同的棋子
        chess2 = chessArr.find(function(item){
            return curChess.x === item.x + 1 && curChess.y === item.y && curChess.c === item.c;
        })
        chess3 = chessArr.find(function(item){
            return curChess.x === item.x + 2 && curChess.y === item.y && curChess.c === item.c;
        })
        chess4 = chessArr.find(function(item){
            return curChess.x === item.x + 3 && curChess.y === item.y && curChess.c === item.c;
        })
        chess5 = chessArr.find(function(item){
            return curChess.x === item.x + 4 && curChess.y === item.y && curChess.c === item.c;
        })

        if(chess2 && chess3 && chess4 && chess5){
            //如果他们都为ture，那就说明找到了5个相同棋子了，游戏结束
            end(curChess,chess2,chess3,chess4,chess5);

        }
         //检查竖着的，有没有5颗颜色形同的棋子
         chess2 = chessArr.find(function(item){
            return curChess.x === item.x  && curChess.y === item.y + 1 && curChess.c === item.c;
        })
        chess3 = chessArr.find(function(item){
            return curChess.x === item.x  && curChess.y === item.y + 2 && curChess.c === item.c;
        })
        chess4 = chessArr.find(function(item){
            return curChess.x === item.x  && curChess.y === item.y + 3 && curChess.c === item.c;
        })
        chess5 = chessArr.find(function(item){
            return curChess.x === item.x  && curChess.y === item.y + 4 && curChess.c === item.c;
        })

        if(chess2 && chess3 && chess4 && chess5){
            //如果他们都为ture，那就说明找到了5个相同棋子了，游戏结束
            end(curChess,chess2,chess3,chess4,chess5);

        }
         //检查斜着的(1)，有没有5颗颜色形同的棋子
         chess2 = chessArr.find(function(item){
            return curChess.x === item.x + 1 && curChess.y === item.y + 1 && curChess.c === item.c;
        })
        chess3 = chessArr.find(function(item){
            return curChess.x === item.x + 2 && curChess.y === item.y + 2 && curChess.c === item.c;
        })
        chess4 = chessArr.find(function(item){
            return curChess.x === item.x + 3 && curChess.y === item.y + 3 && curChess.c === item.c;
        })
        chess5 = chessArr.find(function(item){
            return curChess.x === item.x + 4 && curChess.y === item.y + 4 && curChess.c === item.c;
        })

        if(chess2 && chess3 && chess4 && chess5){
            //如果他们都为ture，那就说明找到了5个相同棋子了，游戏结束
            end(curChess,chess2,chess3,chess4,chess5);

        }
         //检查斜着的(2)，有没有5颗颜色形同的棋子
         chess2 = chessArr.find(function(item){
            return curChess.x === item.x - 1 && curChess.y === item.y + 1 && curChess.c === item.c;
        })
        chess3 = chessArr.find(function(item){
            return curChess.x === item.x - 2 && curChess.y === item.y + 2 && curChess.c === item.c;
        })
        chess4 = chessArr.find(function(item){
            return curChess.x === item.x - 3 && curChess.y === item.y + 3 && curChess.c === item.c;
        })
        chess5 = chessArr.find(function(item){
           return curChess.x === item.x - 4 && curChess.y === item.y + 4 && curChess.c === item.c;
        })

        if(chess2 && chess3 && chess4 && chess5){
            //如果他们都为ture，那就说明找到了5个相同棋子了，游戏结束
            end(curChess,chess2,chess3,chess4,chess5);

        }

    }
}

//此方法是判断游戏结束
function end() {
    if(!isGameEnd){
        isGameEnd = true;//游戏结束
        
        // 把所有的棋子的标记出来
        for(var i = 0; i < chessArr.length; i++){
            $(`div[data-row ='${chessArr[i].y}'][data-line ='${chessArr[i].x}']`).innerHTML = i + 1;
        }
        //把获胜的棋子用红框标记出来
        for(var i = 0; i < arguments.length; i++){
            $(`div[data-row ='${arguments[i].y}'][data-line ='${arguments[i].x}']`).classList.add('win');
        }
    }
}



//定义一个主函数，相对于程序入口
function main() {
    //初始化棋盘
    initChessboard();
    //绑定对应的事件；
    bindingEvent();
}
main();
