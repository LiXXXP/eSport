<template>
    <div class="header-nav">
        <div class="page-content flex flex_between flex_center">
            <!-- logo -->
            <img class="logo"
                src="../../assets/imgs/index/logo.png"
                @click="gotoHome"
            >
            <div>
                <div class="top flex flex_start">
                    <!-- 搜索 -->
                    <search-input></search-input>
                    <!-- 登录注册 -->
                    <login></login>
                    <!-- 当前时间 -->
                    <time-date></time-date>
                    <!-- 语言选择 -->
                    <select-lang></select-lang>
                </div>
                <!-- 页面导航 -->
                <nav-list></nav-list>
            </div>
        </div>
    </div>
</template>

<script>
    import searchInput from '@/components/header/search/searchInput'
    import login from '@/components/header/login/login'
    import timeDate from '@/components/header/timer/timeDate'
    import selectLang from '@/components/header/lang/selectLang'
    import navList from '@/components/header/nav/navList'
    export default {
        data() {
            return {

            }
        },
        methods: {
            gotoHome() {
                this.$router.push('/')
            }
        },
        components: {
            searchInput,
            selectLang,
            timeDate,
            navList,
            login
        }
    }
</script>

<style lang="less" scoped>
    .header-nav {
        height: 100%;
        box-sizing: border-box;
        background-color: #fff;
        .logo {
            width: 149px;
            height: 49px;
            display: block;
            cursor: pointer;
        }
        .top {
            color: #fff;
            font-size: 14px;
            width:calc(100% + 350px);
            background-color: #2F375D;
        }
    }
</style>
