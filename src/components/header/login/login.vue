<template>
    <div class="login">
        <div v-if="this.$store.state.userInfo">
            <span>{{this.$store.state.userInfo}}</span>
            <span @click="logout">退出</span>
        </div>
        <div v-else>
            <router-link to="/login">
                <span>登录</span>
            </router-link>
            <router-link to="/login?c=1">
                <span>注册</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { getUserInfo, getLogout } from "@/scripts/request.js"

    export default {
        data() {
            return {}
        },
        created(){
            if(localStorage.getItem('userToken')) {
                this.isLogin = true
                this.userInfo()
            }
        },
        methods: {
            userInfo() {
                let _this = this
                getUserInfo().then(res => {
                    if(res.code === 200) {
                        _this.$store.commit('getUserInfo', res.data.username)
                    }
                })
            },
            logout() {
                let _this = this
                getLogout().then(res => {
                    if(res.code === 200) {
                        _this.$store.commit('getUserInfo', 0)
                        localStorage.removeItem('userToken')
                        _this.$message.success(res.message)
                    } else {
                        _this.$message.error(res.message)
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .login {
		    cursor: pointer;
        padding: 11px 0;
        span {
            width: 100px;
            color: #fff;
            text-align: center;
            display: inline-block;
            border-right: 1px solid #3B4473;
        }
    }
</style>
