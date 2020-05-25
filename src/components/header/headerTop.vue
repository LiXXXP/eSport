<template>
    <div class="header-nav">
        <div class="page-content flex flex_between">
            <!-- logo -->
            <img src="../../assets/imgs/logo.png" class="logo">
            <div>
                <div class="top flex flex_start">
                    <!-- 搜索 -->
                    <search-input></search-input>
                    <!-- 登录注册 -->
                    <div class="login">
                        <span>登录</span>
                        <span>注册</span>
                    </div>
                    <!-- 当前时间 -->
                    <time-date></time-date>
                    <!-- 语言选择 -->
                    <select-lang></select-lang>
                </div>
                <div class="bottom">
                    <!-- 页面导航 -->
                    <div class="nav-list flex flex_start">
                        <div :class="['nav-item',{active:index===current}]"
                              v-for="(item,index) in navMenu"
                              :key="item.key"
                              @click="active(index)">
                            <span>{{item.text}}</span>
                        </div>
                    </div>
                </div>
            </div>
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
                current: 0,  // 当前标题索引
                navMenu: [   // 页面导航
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
        methods: {
            active(index) {
                this.current = index
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
    .header-nav {
        height: 96px;
        box-sizing: border-box;
        background-color: #fff;
        .logo {
            width: 149px;
            height: 49px;
            display: block;
            margin-top: 24px;
        }
        .top {
                color: #fff;
                font-size: 14px;
                background-color: #2F375D;
                .login {
                    padding: 11px 0;
                    span {
                        width: 100px;
                        text-align: center;
                        display: inline-block;
                        border-right: 1px solid #3B4473;
                    }
                }
        }
        .bottom {
            .nav-list {
                .nav-item {
                    color: #2F375D;
                    font-size: 18px;
                    cursor: pointer;
                    font-weight: 600;
                    padding: 15px 0 12px;
                    box-sizing: border-box;
                    span {
                        width: 140px;
                        text-align: center;
                        display: inline-block;
                        border-right: 1px solid #B8BCD2;
                    }
                    &:last-child {
                        span {
                            border-right: 0;
                        }
                    }
                }
                .nav-item.active {
                    border-bottom: 3px solid #FF7800;
                    span {
                        color: #FF7800;
                    }
                }

            }
        }
    }
</style>
