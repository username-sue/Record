import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist 无重定向白名单 不需要权限的

//路由导航前置守卫
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in 确定用户是否已登录
  // const hasToken = getToken()

  //获取用户信息，本地仓库里面有存储，所以直接拿
  const hasGetUserInfo = store.getters.user;

  //自己的鉴权流程
  //首先判断一下，是否需要权限
  if (to.meta.auth) {
    //进入此if表示需要鉴权
    if (hasGetUserInfo) {
      //进入此if表示有用户信息,直接放行
      next();
    } else {
      //表示没有用户信息，看一下是否有token
      const hasToken = localStorage.getItem('token');//从本地存储拿到token
      if (hasToken) {
        //进入此if表示有token，验证一下token是否有效
        try {
          await store.dispatch('user/getInfo');//相对于whoamI
          // console.log('getInfo');
          next();
        } catch (error) {
          await store.dispatch('user/resetToken');
          // console.log('reset');
          Message.error('登录已过期，请重新登录');
          next(`/login?redirect=${to.path}`);//登录之后直接导航到之前的页面
          NProgress.done()
        }
      } else {
        //表示没有token，需要重新登录
        next(`/login?redirect=${to.path}`);//登录之后直接导航到之前的页面
        NProgress.done()
      }
    }
  } else {
    //表示不需要鉴权,继续判断一下是否要去登录
    if (to.path === '/login' && hasGetUserInfo) {
      //进入if表示目前在登录的状态下，要去login登录页面，我们将其导航到首页
      next({ path: '/' })
    } else {
      //直接放行
      next();
    }
    //让进度条走完
    NProgress.done()
  }




  //一下是Element框架自己的鉴权流程
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     const hasGetUserInfo = store.getters.name
  //     if (hasGetUserInfo) {
  //       next()
  //     } else {
  //       try {
  //         // get user info
  //         await store.dispatch('user/getInfo')

  //         next()
  //       } catch (error) {
  //         // remove token and go to login page to re-login
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/

  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // in the free login whitelist, go directly
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
