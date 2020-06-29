import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* 引入公共方法 */
import { BASE_PATH } from '@/scripts/config'
import { checkBrowser } from '@/scripts/utils'

/* 异步引入路由 */
const Index =() => import('@/components/index')
const Detail =() => import('@/components/detail/detailCont')

const routes = [
    {
        path: '/',
        name: 'index',
        meta: {
            title: '电竞比分网 - eSportLiveScore.cn|实时比分直播|比赛日程|比赛结果|历史数据',
        },
        component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {
          title: '游戏详情',
      },
      component: Detail
  }
]

const router = new Router({
    mode: 'hash',
    base: BASE_PATH,
    routes: routes
})

router.beforeEach((to, from, next) => {
    /* 判断 ie9 以下 */
    if (checkBrowser() < 9) {
        if (to.path === '/') {
            next()
        } else {
            next('/')
        }
        return false;
    }

    /* 设置title */
    if(to.meta.title) {
        document.title = to.meta.title
    }

    next()

})

export default router
