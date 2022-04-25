/* 
使用原型重构之前的扑克牌程序
*/
/**
 * 点数：A 2-10，J Q K小王，大王
 * 颜色；1，黑桃，2，红桃，3，梅花，4方片
 * 把构造函数上的方法放到它的Poker的原型上
 */
//this，这里的this谁调用它就指向谁；
function Poker(number,color){
    this.number = number;
    this.color = color;
}
Poker.prototype.prink = function(){
    //由于小王 大王没有对应的花色，所以这里做单独处理
    if(this.number === 14){
        console.log('xiaowan');
        return;
    }
    if(this.number === 15){
        console.log('dawan');
        return;
    }
    //接下来在继续判断它的花色
    // var count = '';
    // //当this.color 等于1时，那么就把count赋值为黑桃
    // if(this.color === 1){
    //     count = '♠';
    // }else if(this.color === 2){
    //     count ='♥';
    // }else if(this.color === 3){
    //     count ='♣';
    // }else{
    //     count ='♦';
    // }
    /**以上这种方法太繁琐了，不简洁
     * 方法2：直接定义一个数组，数组里面把黑桃 红桃，梅花 方片等花色添加进去
     * 然后直接去数组的下标即可
     * 由于数组的下标是由第0位开始的，所以它的下标length要-1
     * 最后定义一个变量接受取它下标的结果，这样做主要是为了点数和花色拼接的时候更直观
     */
    var count = ['♠','♥','♣','♦'];
    var colors = count[this.color -1];

    /**
     * 接下来判断它的点数，由于用if一个一个的判断太繁琐了，所以直接定义一个数组
     * 数组里面把点数写好，直接取它的下标 
     */
    var num = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    var numbers = num[this.number -1];

    //最后拼接打印
    console.log(colors + numbers);

}
    var poker = new Poker(1,1);
    poker.prink();

/**接下来，可根据上面实现的一张扑克牌，来实现一幅扑克牌
 * 1，定义一个构造函数后，里面定义一个空数组，循环它的点数和花色
 * 2，最后把之前构造好的函数Poker 扔到数组里面去，在把循环好的点数和花色穿到poker里面去
 * 3，大王小王，没有对应的花色，这里做单独处理
 * 4，最后需要打印一下数组的结果，所以这里需要在打印一个方法，把数组循环一下，
 * 循环里面调用一下poker构造函数里面的prink方法
 * 注意：构造函数里面的方法要写到原型上 
 */
function Deck(){
    this.pokers =[];
    for(var i = 1; i <= 13; i++){
        for(var j = 1; j <= 4; j++){
            this.pokers.push(new Poker(i,j));
        }
    }
    this.pokers.push(new Poker(14,0));
    this.pokers.push(new Poker(15,0));
}
Deck.prototype.prink = function(){
    for(var i = 0; i < this.pokers.length; i++){
        //注意这里的prink是调用的poker构造函数里面的方法。
        this.pokers[i].prink();
    }
}

    var deck = new Deck();
    deck.prink();