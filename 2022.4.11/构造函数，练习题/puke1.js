//利用构造函数创建一幅扑克牌
/**
 * 1,一张牌
 * 2，一幅牌
 */

/**
 * 牌的点数：A，2，3，4，5，6，7，8，9，10，J,Q,K,14小王，15大王 number
 * 牌的颜色：1，黑桃，2红桃，3，梅花，4，方片  color
 */

function Poker(number,color){
    this.number = number;
    this.color = color;
    this.test = function(){
        //判断，由于大王，小王的花色不好表示，没有颜色可以表示，所以单独处理一下
        //当实参传到14，15时，它就会判断这条语句
        if(this.number === 14){
            console.log('xiaowan');
            return;
        }
        if(this.number === 15){
            console.log('xiaowan');
            return;
        }
        //判断它的花色
        //1，定义一个数组，1，黑桃，2红桃，3，梅花，4，方片
        //2，在定义一个变量接收它的结果，由于数组下标是从第零位开始的，所以要-1
        var color = ['♠','♥','♣','♦'];
            var colors = color[this.color -1];
        //判断它的点数
        //定义数组，取它的下标
        var number =['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
            var number = number[this.number -1];

            //最后把点数和颜色拼接起来输出
            console.log(colors + number);     
    }
}

var poker = new Poker(1,1);
// poker.test();

function Deck (){
    //定义一个空数组，用来把点数和颜色接受
    this.pokers = [];
    //循环1-13的点数
    for(var i = 1; i <= 13; i++){ 
        for(var j = 1; j <= 4; j++){//循环牌的颜色
            //最后把上面写好的构造函数扔到定义好的新数组里面去，
            //然后再把循环好的点数和颜色穿到构造函数里面去
            this.pokers.push(new Poker(i,j));
        }
    }
    //由于大王小王没有对应的颜色，所以这里单独把他的点数扔到新数组里面就行
    this.pokers.push(new Poker(15,0));
    this.pokers.push(new Poker(14,0));
//最后在定义一个函数表达式
//然后循环pokers数组，拿到数组里面的每一项后，在这调用Pock里面的test方法；
    this.pink = function(){
        for(var i = 0; i < this.pokers.length;i++){
            this.pokers[i].test();
        }
    }
   
}
var deck = new Deck();
deck.pink();