import { loginApi, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    // token: getToken(),
    // name: '',
    // avatar: ''
    user: null, //存储登录后的用户信息
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  // SET_TOKEN: (state, token) => {
  //   state.token = token
  // },
  // SET_NAME: (state, name) => {
  //   state.name = name
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // },
  SET_USER: (state, payload) => {
    state.user = payload;
  }
}

const actions = {
  // user login
  //userInfo用户传递的信息，我们需要把这个数据发送到服务器
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      loginApi(userInfo).then((resp) => {
        //解构
        const { data } = resp;
        if (data) {
          //进入此if表示data有值
          // console.log(data);
          commit('SET_USER', data)
          resolve()
        } else {
          //没有值
          reject(resp);
        }
      }).catch((error) => {
        reject(error);
      })
    })

    // const { username, password } = userInfo
    // return new Promise((resolve, reject) => {
    //   login({ username: username.trim(), password: password }).then(response => {
    //     const { data } = response
    //     commit('SET_TOKEN', data.token)
    //     setToken(data.token)
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      //恢复登录
      getInfo().then((resp) => {
        // console.log(resp);//{"code":401,"msg":"未登录，或登录已过期","data":null}
        if (typeof resp === 'string') {
          //未登录或登录已过期
          resp = JSON.parse(resp);//把返回的结果转换为json格式的对象
          // console.log(resp);
          if (resp.code === 401) {
            reject(resp.msg);
          }
        } else {
          //说明token还未过期，将用户信息放入到仓库；
          // console.log(resp);
          commit('SET_USER', resp.data);
          resolve();
        }
      })


      // getInfo(state.token).then(response => {
      //   const { data } = response

      //   if (!data) {
      //     return reject('Verification failed, please Login again.')
      //   }

      //   const { name, avatar } = data

      //   commit('SET_NAME', name)
      //   commit('SET_AVATAR', avatar)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
      // logout(state.token).then(() => {
      //   removeToken() // must remove  token  first
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

