<template>
    <div class="header-nav">
        <div class="flex flex_around flex_center">
            <!-- logo -->
            <img src="">
            <!-- 页面导航 -->
            <div class="nav-list flex flex_start flex_center">
                <div class="nav-item" 
                    v-for="item in navMenu"
                    :key="item.key"
                >{{item.text}}</div>
            </div>
            <!-- 搜索 -->
            <search-input></search-input>
            <!-- 登录注册 -->
            <div class="login">
                <span>登录</span>
                <span>注册</span>
            </div>
            <!-- 语言选择 -->
            <select-lang></select-lang>
            <!-- 当前时间 -->
            <time-date></time-date>
        </div>
    </div>
</template>

<script>
    import searchInput from '@/components/header/searchInput'
    import selectLang from '@/components/header/selectLang'
    import timeDate from '@/components/header/timeDate'
    export default {
        data() {
            return {
                navMenu: [  // 页面导航
                    {
                        text: '即时比分',
                        url: '',
                        key: 0

                    },
                    {
                        text: '赛事',
                        url: '',
                        key: 1
                    },
                    {
                        text: '战队',
                        url: '',
                        key: 2
                    }
                ]
            }
        },
        components: {
            searchInput,
            selectLang,
            timeDate
        }
    }
</script>

<style lang="less" scoped>

</style>