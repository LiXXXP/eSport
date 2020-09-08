// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/* 引入根组件 */
import App from './App'
/* 引入路由 */
import router from './router'
/* 引入 vuex */
import store from './store'
/* 引入公共样式 */
import '@/styles/common.css'

import bus from './scripts/bus'

/* 引入 ElementUI */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI)

/* 引入 iconfont */
import './assets/iconfont/iconfont.css'

/* 引入 echarts */
import VeHistogram from 'v-charts/lib/histogram.common'
import VeLine from 'v-charts/lib/line.common'
Vue.component(VeHistogram.name,VeHistogram)
Vue.component(VeLine.name, VeLine)

/* 用于低版本浏览器兼容问题 es6语法兼容 */
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()

/* 阻止 vue 在启动时生成生产提示 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#esport',
    router,
    store,
    bus,
    components: { App },
    template: '<App/>'
})
