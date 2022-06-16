
(async ()=> {
  /**
 * 远程获取省市区数据，当获取完成后，得到一个数组
 * @returns Promise
 */
async function getDatas() {
  return fetch('https://study.duyiedu.com/api/citylist')
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}

//获取要操作的dom元素;
 const doms = {
   selProvince: document.getElementById('selProvince'),
   selCity: document.getElementById('selCity'),
   selCounty: document.getElementById('selCounty'),
 }

/**
 * 初始化，生成li加到对应的列表里面去
 */
  const datas = await getDatas();//远程拿到数据
  // console.log(datas);
  fillSelect(doms.selProvince,datas);
  fillSelect(doms.selCity,[]); //一开始无法缝填充
  fillSelect(doms.selCounty,[]);//一开始无法填充

  /**
   * 填充某个列表
   * 该方法具有通用性，不仅用于初始化，在某些事件处理中也可以调用；
   * @param {*} select 要填充的下拉列表
   * @param {*} datas  要填充的数据，数组,如果数组为空，则表示不填充，禁用；
   */
 function fillSelect(select, datas) {
   //判断数组的长度是否有值，如果有值就把城市和地区的样式设为选中，没有就禁用
   select.className = `select ${datas.length ? '' : 'disabled'}`;

   //选中列表ul
      const ul = select.querySelector('.options');
    // // 循环数据数组
    //   for (const obj of datas) { 
    //   //创建li,把数组中的城市名加到li里面去，把li加到ul里面去；
    //     const li = document.createElement('li');
    //     li.innerHTML = obj.label;
    //     ul.appendChild(li);
    //   }

    //第二种写法；
    ul.innerHTML = datas.map((obj) =>`<li>${obj.label}</li>`).join('');

    //第二步，获取提示文字
    const text = select.dataset.name;//获取自定义属性
    const span = select.querySelector('.title span');
    span.innerHTML = `请选择${text}`;

    //将目前填充的数据，添加到dom对象的属性datas中去；
    //就是相对于给doms对象里面的城市，省份，地方，selProvince在它后面加了一个datas属性，并且把填充的数组赋值给了datas属性；
    select.datas = datas;

 }

 //事件交互，给城市，省，地区注册事件
  regCommonEvent(doms.selProvince);
  regCommonEvent(doms.selCity);
  regCommonEvent(doms.selCounty);
  regProvincesEvent();
  regCityEvent();
/**
 * 注册公共事件
 * @param {*} select 
 */
  function regCommonEvent(select) {
      //1，给title注册点击事件
        const title = select.querySelector('.title');
        title.addEventListener('click', () =>{
          //判断禁用状态下无法点击操作
          if(select.classList.contains('disabled')) {
            return;
          }
          //先找到目前所有已经展开的列表，
          const expand = document.querySelectorAll('.select.expand');
          for (const selected of expand) {
            //判断省，城市，地区里是否有expand展开样式；
            if (!selected === select) {
              selected.classList.remove('expand');
            }
          }
          //给点击的省，市，区，设置展开样式
          select.classList.toggle('expand');
        })

      //2，给ul注册点击事件
      const ul = select.querySelector('.options');
      ul.addEventListener('click', (e) =>{
        //判断事件源点击的是不是li，如果不是啥也不干
          if(e.target.tagName !== 'LI'){
            return;
          }
          
        //拿到之前选中的li，去掉他的active样式
        const active = select.querySelector('li.active');
        active && active.classList.remove('active');

        //设置点击li后的，选中active类样式；
        const li = e.target;
        li.classList.add('active');
        
        //更改title的文本；
        const span = select.querySelector('.title span');
        span.innerText = li.innerHTML;

        //设置点击ul后折叠起来的样式
        select.classList.remove('expand');
      })
  }

  /**
   * 给省的特殊点注册事件；
   */
  function regProvincesEvent() {
    //选中ul注册点击事件；
      const ul = doms.selProvince.querySelector('.options');
      ul.addEventListener('click',(e) => {
        //判断是不是点击li
        if(e.target.tagName !== 'LI') {
          return;
        }
        const li = e.target;
        //填充城市
         //find，判断填充的数据中的城市名字label是否和点击的li内容相等，并且把值返回
        const province = doms.selProvince.datas.find((obj) => obj.label === li.innerText);
        fillSelect(doms.selCity,province.children);

        //填充地区，在没有点击城市之前，地区禁用，不进行填充；
        fillSelect(doms.selCounty,[]);
      })
  }

   /**
   * 给城市的特殊点注册事件；
   */
    function regCityEvent() {
      //选中ul注册点击事件；
      const ul = doms.selCity.querySelector('.options');
      ul.addEventListener('click',(e) => {
        //判断是不是点击li
        if(e.target.tagName !== 'LI') {
          return;
        }
        const li = e.target;
        //填充地区
        //find，判断填充的数据中的地区名字label是否和点击的li内容相等，并且把值返回
        const city = doms.selCity.datas.find((obj) => obj.label === li.innerText);
        fillSelect(doms.selCounty,city.children);
      })
    }
})()