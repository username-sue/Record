//立即执行函数，防止变量污染全局
(async function(){
/**
 * 从网络获取当前的英雄数据
 * @returns Promise
 */
 async function getHeroes() {
  return fetch('https://study.duyiedu.com/api/herolist')
    .then((resp) => resp.json())
    .then((resp) => resp.data.reverse());
}
//选中要操作的dom元素
  const doms = {
    ul: document.querySelector('.list'),
    radio: document.querySelectorAll('.radio'),
    input: document.querySelector('.input input'),
  }

//获取英雄数据，创建li，加到ul里面去
  const allHeroes = await getHeroes();
  // console.log(allHeroes);
  setheroesHtml(allHeroes);//把英雄数据传进去


//创建应该初始化英雄函数；
/**
 * 根据指定的英雄数组，生成html，加到ul里面去；
 * @param {*} heroes 
 */
function setheroesHtml(heroes) {
  doms.ul.innerHTML = heroes.map((hero)=>`<li>
  <a href="https://pvp.qq.com/web201605/herodetail/${hero.ename}.shtml" target = "_blank">
  <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${hero.ename}.jpg" alt="">
  <span>${hero.cname}</span>
</a>
</li>`).join('');
}

//交互事件
//给radio注册点击事件
for (const radio of doms.radio) {
    radio.addEventListener('click',function() {
      //1,给radio设置选中状态
      setSelected(this);

      //2,切换英雄数据
      searchHeros(this);
    })
}

//给搜索框注册事件
doms.input.addEventListener('input', function() {
  //筛选所有的英雄数据中的英雄名字是否包含input文本框用户输入的文字（value）；
  const heroes = allHeroes.filter((h)=>h.cname.includes(this.value));
  setheroesHtml(heroes);
  //设置搜索时选中样式为全部；
  setSelected(document.querySelector('.radio[data-type="all"]'));
})

/**
 *设置某个被选中的radio
 * @param {*} radio 
 */
function setSelected(radio) {
  //先清除之前的选中样式
  const selected = document.querySelector('.radio.checked');
  selected && selected.classList.remove('checked');
  //设置当前选中样式
  radio.classList.add('checked');
}

/**
 * 根据radio提供的自定义属性，查询英雄数组，添加html
 * @param {*} radio 
 */
function searchHeros(radio) {
    let heroes;
    //拿到对应的自定义属性
    const type = radio.dataset.type;
    const value = radio.dataset.value;
    //判断自定义属性类型 是不是等于 all，
    if (type === 'all') {
      heroes = allHeroes;
    //判断自定义属性类型 是不是等于 pay_type，
    }else if (type === 'pay_type') {
    //如果等于，那就筛选filter之前获取到的英雄数组allHeroes，
    //看里面的自定义属性是否和value 相等
      heroes = allHeroes.filter((h) => h.pay_type === +value);
    }else {
      heroes = allHeroes.filter((h) => h.hero_type === +value || h.hero_type2 === +value);
    }
    //最后把筛选出来的英雄数据加到htmml里面；
    setheroesHtml(heroes);
}

})()
