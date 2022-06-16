/**
 * 从网络获取歌词数据
 * @returns Promise
 */
async function getLrc() {
  return await fetch('https://study.duyiedu.com/api/lyrics')
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}
const doms = {
  ul:document.querySelector('.music'),
  audio:document.querySelector('audio'),
}

//歌词播放时间变量
  let musicData;
  //定义一个滚动高度的变量
  let size = {
    liHeight:30,
    containerHeight:420,
  }


//初始化
async function init() {
    //获取歌词，创建li，加到ul里面去
    const music = await getLrc();//目前拿到的是字符串的歌词
    //要把字符串的歌词转换为数组对象[{timme:时间，music;歌词}];
    //第一步把拿到的字符串用行分隔。split会返回一个数组字符串
    //第二步把数组里面的空行进行筛选，filter是一个布尔属性，他会返回true和flash；
    //所以filter拿到每一项后把它自身有值的返回
    //第三步，把数组里面的字符串转行成对象
    musicData = music.split('\n')
    .filter((item) => item)
    .map((item) =>{
      //把拿到的每一项字符串按照右中括号分隔，为的就是把时间和歌词分隔开
      const parte = item.split(']');
      //把分隔出来的数组字符串的时间0位的左中括号替换位空；
      //在把拿到的时间按照冒号分隔位分钟和秒数
      const timeParts = parte[0].replace('[','').split(':');
      return {
        //把拿到的时间第一项转换为数字 * 60就是秒数，第二项直接转为数字即可；
        time: +timeParts[0] * 60 + +timeParts[1],
        words: parte[1]
      };
    })

    //接下来生成li,加到ul里面去
    doms.ul.innerHTML = musicData.map((item) => `<li>${item.words}</li>`).join('');
    }
     init();

     
 //交互事件
 //给audio 注册timeupdate事件，当音乐播放时会随着播放进度的变化不断触发
 doms.audio.addEventListener('timeupdate',function(){
   setStatus(this.currentTime);
 })

 //根据播放时间，设置好歌词的状态
 function setStatus(time) {
   //把当前播放时间进行微调
   time += 0.5;
   //先消除之前的active状态
   const active = document.querySelector('.active');
   active && active.classList.remove('active');
  //根据时间找到对应的li，设置active状态；
    const index = musicData.findIndex((item) => item.time > time) - 1;
    //判断一个index如果小于0，那就啥也不干
    if(index < 0) {
      return;
    }
    doms.ul.children[index].classList.add('active');

    //设置ul滚动位置；
    //top = li的高度 * 当前滚动的下班 + li的高度 / 2（就是一半）- 容器的高度 / 2 
    let top = size.liHeight * index + size.liHeight /2  - size.containerHeight /2;
    //由于要歌词向下滚动，这时li就要向上移，所以top要设为负数
    top = -top;
    //这里要判断一下top如果小于0就把值设置0
    if(top > 0) {
      top = 0;
    }
    doms.ul.style.transform = `translateY(${top}px)`;
 }
