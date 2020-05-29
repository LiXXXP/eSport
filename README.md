# esport

> 1.0.0

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 目录说明

    |-- src
    |   |-- App.vue
    |   |-- main.js
    |   |-- assets
    |   |   |-- iconfont              字体图标
    |   |   |-- imgs                  引入图片
    |   |-- components
    |   |   |-- index.vue             首页index
    |   |   |-- common                公共组件
    |   |   |-- detail                游戏详情页组件
    |   |   |-- footer                底部信息
    |   |   |-- header                页面头部组件
    |   |   |   |-- headerTop.vue     头部组件集合
    |   |   |   |-- lang              选择语言组件
    |   |   |   |-- login             登录注册组件
    |   |   |   |-- nav               页面导航组件
    |   |   |   |-- search            搜索组件
    |   |   |   |-- timer             当前时间组件
    |   |   |-- index                 首页组件
    |   |       |-- carousel          首页轮播图组件
    |   |       |-- content           首页内容组件
    |   |       |   |-- contIndex.vue 内容组件集合
    |   |       |   |-- detail        游戏列表详情组件
    |   |       |   |-- game          游戏列表组件
    |   |       |   |-- tab           赛事导航切换组件
    |   |       |-- notices           公告组件
    |   |       |-- side              侧边栏组件
    |   |-- router
    |   |   |-- index.js              路由文件
    |   |-- scripts
    |   |   |-- config.js             联调接口地址
    |   |   |-- request.js            封装请求方法
    |   |   |-- utils.js              公共js方法
    |   |-- store                     vuex
    |   |-- styles                     公共样式
