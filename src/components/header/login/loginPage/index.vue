<template>
    <div class="login-page">
        <div class="cont flex flex_column flex_only_center">
            <div class="head">
                <router-link to="/index" class="page-content">
                    <img src="../../../../assets/imgs/index/logo.png">
                </router-link>
            </div>
            <div class="box">
                <div class="login-block">
                    <div class="tab flex flex_start">
                        <p v-for="(item,index) in tabTitle"
                            :key="item.title"
                            :class="{active: index === currentIndex}"
                            @click="tabLogin(index)"
                        >{{item.title}}</p>
                    </div>
                    <login-box
                        v-if="currentIndex === 0"
                    ></login-box>
                    <enroll-box
                        v-if="currentIndex === 1"
                        @loginIndex="loginIndex"
                    ></enroll-box>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>2019© All Rights Reserved.esportlivescore.com</p>
            <p>
                经营许可证：<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">京ICP备11025276号-3</a>
                <img src="../../../../assets/h.png" class="h" />京公网安备 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502044856" target="_blank">11010502044856</a>
            </p>
        </div>
    </div>
</template>

<script>
    import loginBox from '@/components/header/login/loginPage/loginBox'     // 登录
    import enrollBox from '@/components/header/login/loginPage/enrollBox'   // 注册

    import { getUrlParam } from '@/scripts/utils'  // 获取页面参数方法

    export default {
        name: 'login',
        data() {
            return {
                tabTitle: [
                    {
                        title: '登录'
                    },
                    {
                        title: '注册'
                    }
                ],
                currentIndex: 0
            }
        },
        created() {
            let c = getUrlParam('c')
            if(c) {
                this.currentIndex = 1
            }
        },
        methods: {
            tabLogin(index) {
                this.currentIndex = index
            },
            loginIndex(val) {
                this.currentIndex = val
            }
        },
        components: {
            loginBox,
            enrollBox
        }
    }
</script>

<style lang="less" scoped>
    .login-page {
        width: 100%;
        height: 100vh;
        overflow: auto;
        box-sizing: border-box;
        background-color: #ebebeb;
        background: url('../../../../assets/imgs/index/login-bg.png');
        .cont {
            flex: 1 1;
            overflow: hidden;
            min-height: 688px;
            height: calc(100% - 50px);
            box-sizing: border-box;
            .head {
                z-index: 99;
                width: 100%;
                height: 96px;
                background-color: rgba(255,255,255,.9);
                img {
                    width: 149px;
                    height: 49px;
                    display: block;
                    margin-top: 24px;
                    margin-left: 360px;
                }
            }
            .box {
                margin: auto 0;
                .login-block {
                    width: 400px;
                    border-radius: 4px;
                    padding: 30px 40px 50px;
                    box-sizing: border-box;
                    background-color: #fff;
                    box-shadow: 0 0 25px 5px rgba(73,73,73, .13);
                    .tab {
                        margin-bottom: 50px;
                        p {
                            cursor: pointer;
                            font-size: 18px;
                            color: #434343;
                            margin-right: 57px;
                            padding-bottom: 2px;
                            &.active {
                                font-weight: 600;
                                border-bottom: 3px solid #FF7600;
                            }
                        }
                    }
                }
            }
        }
        .footer {
            height: 50px;
            padding-top: 5px;
            box-sizing: border-box;
            background-color: #1C1C1C;
            p {
                font-size: 14px;
                color: #878787;
                line-height: 20px;
                text-align: center;
            }
            .h {
               width: 20px;
               height: 20px;
               margin: 0 5px;
               vertical-align: middle;
               display: inline-block;
            }
            a {
              color: #337ab7;
            }
        }
    }
</style>
