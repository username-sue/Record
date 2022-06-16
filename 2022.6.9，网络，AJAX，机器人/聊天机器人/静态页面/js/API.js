  var API = (function() {
    const BASE_URL = 'https://study.duyiedu.com';//公共地址
    const TOKEN_KEY = 'token'; //令牌号

    //get请求
    //path 传一个路劲
    function get(path) {
        //定义一个空对象，作为响应头
        const headers = {};
        //读取本地保存的令牌的值
        const token = localStorage.getItem(TOKEN_KEY);
        //判断一下token 是否有值，如果有值就把令牌加到响应头里去
        if (token) {
            headers.authorization = `Bearer ${token}`;
        }
        //调用此函数只需要传路径，和响应头
        return fetch(BASE_URL + path, {headers});
    }

    //POST请求
    function post(path,bodyObj) {
        //post请求定义一个空对象，作为响应头，里面必须加响应头的格式
        const headers = {
            'Content-Type': 'application/json',
        };
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            headers.authorization = `Bearer ${token}`;
        }
        return fetch(BASE_URL + path, {headers,method:'POST',body: JSON.stringify(bodyObj)});
    }
    
    
    /**
     * register 注册账号
     * @param {*} userInfo (用户信息)，传一个对象，里面要有账号密码。昵称
     */
    async function register(userInfo) {
       const resp = await post('/api/user/reg',userInfo)//解析json格式的响应体
        return await resp.json();
    }

    /**
     *  login 登录账号
     * @param {*} loginInfo （登录信息），传一个对象，里面要有账号和密码
     */
     async function logIn(loginInfo) {
        const resp = await post('/api/user/login',loginInfo)//解析json格式的响应体
        const result = await resp.json();
        if(result.code === 0) {
            //登录成功啦，将响应头里面的token保存起来；
            const token = resp.headers.get('authorization');
            localStorage.setItem(TOKEN_KEY, token);//将令牌号保存到本地
        }
        return result; 
    }
   
    // console.log( logIn({loginId:"dddd",loginPwd:"123123"}));

    /**
     * exists（存在），验证账号
     * @param {*} loginId 传一个账号来验证是否正确
     */
     async function exists(loginId) {
        const resp = await get('/api/user/exists?loginId = ' + loginId);
        return await resp.json();
    }


    /** 
     * profile,当前登录的用户信息
    */
    async function profile() {
       const resp = await get('/api/user/profile');
       return await resp.json();
    }

    /**
     * sendChat 发送聊天消息
     * @param {*} container 传要发送的内容
     */
     async function sendChat(content) {
        const resp = await post('/api/chat',{
            content,
        });
        return await resp.json();
     }

    /**
     * getChat,获取聊天信息
     */
     async function getChat() {
        const resp = await get('/api/chat/history');
       return await resp.json();
     }

     //退出登录
    async function pushLogin() {
        localStorage.removeItem(TOKEN_KEY);
    }
     return {
         register,
         logIn,
         exists,
         profile,
         sendChat,
         getChat,
         pushLogin,
     }
   })()
