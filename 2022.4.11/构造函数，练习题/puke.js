/* 
利用构造函数创建一幅扑克牌
*/
//扑克点数，2，3，4，5，6，7，8，9，10，J,Q,K,A 14小王，15大王
//颜色，黑桃1：♠，红桃2：♥，梅花3：♣，方片4：♦
function Poker(number,color){
    //this，这里的this谁调用它就指向谁；
    this.number = number;
    this.color = color;
    this.piece = function(){
        //由于扑克里面的大王小王不需要花色，所以这里做单独处理
        if(this.number === 14){
            console.log('小王');
            return;
        }
        if(this.number === 15){
            console.log('大王');
            return;
        }
        //接下来判断它的颜色
        var color = ['♠','♥','♣','♦'];
            var colors = color[this.color -1];

        var number = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
            var num = number[this.number -1];

            console.log(colors + num);
    }
    
}

var poker = new Poker(1,1);
// poker.piece();

function Deck(){
    this.pokers = [];
    for(var i = 1; i <= 13; i++){
        for(var j = 1; j <= 4; j++){
            this.pokers.push(new Poker(i,j));
        }
    } 
    this.pokers.push(new Poker(14,0));
    this.pokers.push(new Poker(15,0));

    this.print = function(){
        for(var i = 0; i < this.pokers.length; i++){
            this.pokers[i].piece();
        }
    }
}

var deck = new Deck();
deck.print();