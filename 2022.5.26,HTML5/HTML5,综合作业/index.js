var doms = {
    // 视频元素
    video: document.querySelector('video'),
    btnPlay: document.querySelector('#btnPlay'),
    // 进度条相关元素
    progress: {
      // 进度条
      range: document.querySelector('#progress'),
      // 当前播放时间
      current: document.querySelector('#current'),
      // 总时间
      total: document.querySelector('#total'),
    },
    // 播放倍率的容器
    rate: document.querySelector('#rate'),
    // 音量相关元素
    volume: {
      // 滑动块
      range: document.querySelector('#volume input'),
      // 文本
      text: document.querySelector('#volume span'),
    },
    // 保存和设置按钮
    buttons: {
      save: document.querySelector('#save'),
      load: document.querySelector('#load'),
    },
    controls: document.querySelectorAll('.controls'),
  };

  //初始化
  //浏览器视频加载完成后显示播放控件
  doms.video.addEventListener('loadeddata', init);
  function init() {
    setProgress();
    palySpeed();
    setVoice();
    for (var i = 0; i < doms.controls.length; i++) {
        //初始化，让所有播放控件显示出来
        doms.controls[i].style.display = 'block';
    }
  }
  
  //根据当前视频进度，获取进度条状态
  function setProgress() {
      //设置播放时间
      doms.progress.current.innerText = formatTime(doms.video.currentTime);
      doms.progress.total.innerText = formatTime(doms.video.duration);

      //设置进度条状态
      //进度的值 = 当前的播放时间 / 总时长 *100；
      doms.progress.range.value = (doms.video.currentTime / doms.video.duration)* 100;
  }

  //根据视频播放情况，设置播放速度和选中状态
  function palySpeed() {
    var but = doms.rate.querySelectorAll('button');
    for (var i = 0; i < but.length; i++) {
        var rate = but[i].dataset.rate;
        if(+rate === doms.video.playbackRate){
            but[i].classList.add('active');
        }else{
            but[i].classList.remove('active');  
        }

    }
  }

  //根据视频播放，设置音量
  function setVoice() {
      var percent = Math.floor(doms.video.volume *100);
      //判断是否为静音；
      if(doms.video.muted){
          percent = 0;
      }
      doms.volume.text.innerText = percent + '%';
      doms.volume.range.value = percent;
  }
  //格式化时间，传一个参数，得到小时分钟秒
  function  formatTime(second) {
    var hour = Math.floor(second / 3600);
    second -= hour * 3600;
    var minute = Math.floor(second / 60);
    second -= minute * 60;
    second = Math.floor(second);
    function _format(n) {
        if(n < 10) {
            return '0' + n;
        }else{
            return n;
        }
    }
    return _format(hour)+ ':' + _format(minute)+ ':' + _format(second);
  }

    //交互绑定事件
    //给播放/暂停按钮绑定事件
    doms.btnPlay.addEventListener('click',function (){
        //当点击播放按钮的时候，判断它是否为暂停状态，
        //如果是就设置为播放，如不是就设置停止；
        if(doms.video.paused){
                doms.video.play();
        }else{
                doms.video.pause();
        }
    })

    // 给播放进度条绑定事件
    doms.progress.range.addEventListener('input',function(){
        //当前播放时间 = 进度条的值 / 100 * 总时长
        doms.video.currentTime = (this.value / 100) * doms.video.duration;
        setProgress();
    })

    // 给进播放进度条时间绑定事件
    doms.video.addEventListener('timeupdate',function(){
        setProgress();
    })

    //给播放倍速绑定事件
   var but = doms.rate.querySelectorAll('button');
    for (var i=0; i<but.length; i++) {
        but[i].addEventListener('click',function(){
            //播放倍速 = this前面的+号是 表示转换为数字，
            doms.video.playbackRate = +this.dataset.rate;
            palySpeed();
        })
    }

    //给音量设置点击事件
    doms.volume.range.addEventListener('input',function(){
        //当前播放音量 = 音量条的值 / 100；
        doms.video.volume = this.value / 100;
        setVoice();
    })

    //点击保存设置的时候，保存播放进度，倍速，音量等信息到本地存储
    doms.buttons.save.addEventListener('click',function(){
        var obj = {
            currentTime:doms.video.currentTime,
            rate:doms.video.playbackRate,
            volume:doms.video.volume,
        }
        //将对象转换为字符串存储到本地
        var json = JSON.stringify(obj);
        //将转换的字符串进行存储
        localStorage.setItem('video',json);
        //弹出框
        alert('保存成功');
    })

    //点击加载设置的时候，就会跳到上一次的播放进度和倍速，音量等；
    doms.buttons.load.addEventListener('click',function(){
        var json = localStorage.getItem('video');
        //转换为对象
        var obj = JSON.parse(json);
        doms.video.currentTime = obj.currentTime;
        doms.video.volume = obj.volume;
        doms.video.playbackRate = obj.rate;
        
        setProgress();
        palySpeed();
        setVoice();

        doms.video.play();
    })