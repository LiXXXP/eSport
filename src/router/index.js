import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import store from '../store'

/* 引入公共方法 */
import { BASE_PATH } from '@/scripts/config'
import { checkBrowser } from '@/scripts/utils'

/* 异步引入路由 */
const Index =() => import('@/components/index')
const mainIndex =() => import('@/components/main/mainIndex')
const contIndex =() => import('@/components/index/contIndex')
const Detail =() => import('@/components/detail/detailCont')
const teamList =() => import('@/components/main/teamList')
const eventList =() => import('@/components/main/eventList')
const teamIndex =() => import('@/components/main/teamIndex')
const eventIndex =() => import('@/components/main/eventIndex')
const Login =() => import('@/components/header/login/loginPage/index')

const routes = [
    {
        path: '/',
        redirect: '/index',
        meta: {
            title: '电竞比分网 - eSportLiveScore.cn|实时比分直播|比赛日程|比赛结果|历史数据',
        },
        component: Index,
        children: [
              {
                path: '/main',
                name: 'mainIndex',
                component: mainIndex,
                children: [
                    {
                        path: '/index',
                        name: 'index',
                        component: contIndex,
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
            },
            {
                path: '/eventlist',
                name: 'eventList',
                component: eventList,
            },
            {
                path: '/teamlist',
                name: 'teamList',
                component: teamList,
            },
            {
                path: '/events',
                name: 'eventIndex',
                component: eventIndex,
            },
            {
                path: '/teams',
                name: 'teamIndex',
                component: teamIndex,
            }
        ]
    },
    {
      path: '/login',
      name: 'login',
      meta: {
          title: '用户登录注册',
      },
      component: Login
    }
]

const router = new Router({
    mode: 'hash',
    base: BASE_PATH,
    routes: routes
})

router.beforeEach((to, from, next) => {
    // 判断首页轮播图显示
    if(to.path !== '/index') {
        store.commit('carouselShow', false)
    } else {
        store.commit('carouselShow', true)
    }

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
