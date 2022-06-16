(async function() {
    //验证账号是否有登录，如果没有登录则跳转到登录的页面，如果有登录获取到登录信息
    const resp = await API.profile();
    const user = resp.data;
    //判断user没有值的话，就执行里面的语句
    if(!user) {
        alert('未登录或登录已过期，请重新登录');
        location.href = './login.html';
        return;
    }
    //接下来，一下的代码都表示 user有值的情况下
    //1，先把要操作的dom元素用一个对象进行包裹，方便操作
    var doms = {
        aside:{
            nickname:$('#nickname'),
            loginId:$('#loginId')
        },
        close:$('.close'),
        chatContent: $('.chat-container'),
        txtMsg:$('#txtMsg'),
        msgContainer:$('.msg-container'),
    }
    // console.log(doms.chatContent);
    //注册点击注销事件
    doms.close.onclick = function () {
        API.pushLogin();
        location.href = './login.html';
    }


    //最后给from表单注册提交事件；
    doms.msgContainer.onsubmit = function (e) {
        e.preventDefault();
        sendChat();
    }


    //加载历史记录
    await loadHistory();
    async function loadHistory() {
        //获取到历史聊天记录
        const resp = await API.getChat();
        // console.log(resp);
        //循环里面的data；
        for ( const item of resp.data) {
            addChat(item);
        }

        //调用滚动调
        scrollBottom();
    }


    setUserInfo();
    //定义一个函数，把获取到的昵称和账号显示出来
    function setUserInfo() {
        doms.aside.nickname.innerText =  user.nickname;
        doms.aside.loginId.innerText =  user.loginId;
    }

    //设置滚动条滚动到底部
    function scrollBottom() {
        doms.chatContent.scrollTop =  doms.chatContent.scrollTop;
    }

    //定义一个函数，给我传一个聊天消息对象
    function addChat(chatInfo) {
        //创建div
        const div = $$$('div');
        div.classList.add('chat-item')
        //判断一下传进来的消息对象里面的from有没有值
        //如果有值，给div添加类样式
        if (chatInfo.from) {
            div.classList.add('me')
        }

        //创建img
        const img = $$$('img');
        img.className = 'chat-avatar';
        //设置img的src地址 = chatInfo.from有值吗？有值就设置自己的，没有值就设置机器人的地址；
        img.src = chatInfo.from ? './asset/avatar.png' : './asset/robot-avatar.jpg';

        //再次创建一个div，用来显示聊天消息内容
        const content = $$$('div');
        content.className = 'chat-content';
        //把发送的聊天消息赋值给创建好的div，显示到页面
        content.innerText = chatInfo.content;
        
        //再次创建div，用来显示聊天的时间
        const date = $$$('div');
        date.className = 'chat-date';
        //由于chatInfo对象拿到的是时间戳，所有这里定义一个函数，把它转换成正常的格式时间；
        date.innerText = fromDate(chatInfo.createdAt);

        div.appendChild(img);
        div.appendChild(content);
        div.appendChild(date);

        doms.chatContent.appendChild(div);

    }
   
    //把时间戳转换为这种格式的时间2022-06-15 11:09;
    function fromDate(timestamp) {
        //创建时间对象；
        //如果不满两位数的日期就把它转换成字符串然后padStart方法，如果满足2位就不填充，不满足就在前面填充0
        const date = new Date(timestamp);
        const year = date.getFullYear();//年
        const month = (date.getMonth() + 1).toString().padStart(2,'0');
        const day = date.getDate().toString().padStart(2,'0');
        const hour = date.getHours().toString().padStart(2,'0');
        const minute = date.getMinutes().toString().padStart(2,'0');
        const second = date.getSeconds().toString().padStart(2,'0');

        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }

    //发送聊天消息，首先要获取到文本框的值也就是输入的文字
   async function sendChat () {
        //trim()去掉首位空格；
        const content = doms.txtMsg.value.trim();
        //判断一下文本框是否有值
        if (!content) {
            return;
        }
        addChat({
            from: user.loginId,
            to: null,
            createdAt: Date.now(),
            content,
        })
        doms.txtMsg.value = '';
        scrollBottom();
        const resp = await API.sendChat(content);
        addChat({
            from: null,
            to: user.loginId,
          ...resp.data,
        })
        scrollBottom();
    }
    // window.sendChat = sendChat;
})()

