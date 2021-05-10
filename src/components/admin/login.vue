<template>
    <div class="login-test">
        <div class="cont flex flex_column flex_center">
            <p class="title">后台管理系统</p>
            <div class="form">
                <el-form
                    :model="ruleForm"
                    status-icon
                    :rules="rules"
                    ref="ruleForm">

                    <el-form-item prop="username">
                        <el-input
                            v-model="ruleForm.username"
                            autocomplete="off"
                            placeholder="用户名"
                        ></el-input>
                    </el-form-item>

                    <el-form-item prop="pass">
                        <el-input
                            type="password"
                            v-model="ruleForm.pass"
                            autocomplete="off"
                            show-password
                            placeholder="密码"
                        ></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button
                            :type="isType"
                            :disabled="isDisabled"
                            @click="submitForm('ruleForm')"
                        >登录</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { transHtml } from '@/scripts/utils'
    import { userLogin } from '@/scripts/request'

    export default {
        name: 'adminLogin',
        data() {
            var validateEmail = (rule, value, callback) => {
                if (value === '') {
                    this.isType = 'info'
                    this.isDisabled = true
                    callback(new Error('请输入用户名'))
                } else {
                    if(this.ruleForm.pass !== '') {
                        this.isType = 'danger'
                        this.isDisabled = false
                    }
                    callback()
                }
            }
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    this.isType = 'info'
                    this.isDisabled = true
                    callback(new Error('请输入密码'))
                } else {
                    this.isType = 'danger'
                    this.isDisabled = false
                    callback()
                }
            }
            return {
                isType: 'info',    // 登录按钮类型
                isDisabled: true,  // 登录按钮是否可点击
                ruleForm: {        // 验证用户名和密码
                    username: '',
                    pass: '',
                },
                rules: {           // 验证用户名和密码规则
                    username: [
                        { validator: validateEmail, trigger: 'change' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'change' }
                    ]
                }
            }
        },
        mounted() {
            if(localStorage.getItem('userToken')) {
                this.$router.push({path: '/admin'})
            }
        },
        methods: {
            // 登录
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let _this = this
                        let params = {
                            username: transHtml(_this.ruleForm.username),
                            password: transHtml(_this.ruleForm.pass)
                        }
                        userLogin(params).then(res => {
                            if(res.code === 200) {
                                localStorage.setItem('userToken',res.data.token)
                                _this.$router.go(0)
                            } else {
                                localStorage.removeItem('userToken')
                                _this.$message.error(res.message)
                            }
                        })
                    } else {
                        return false
                    }
                })
            },
        }
    }
</script>

<style lang="less" scoped>
    .login-test {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        box-sizing: border-box;
        background: linear-gradient(0deg, #CED2E8 0%, #E2E2E2 100%);
        .cont {
            flex: 1 1;
            height: calc(100% - 50px);
            .title {
                font-size: 26px;
                padding-bottom: 50px;
            }
            .form {
                width: 480px;
                border-radius: 4px;
                padding: 30px 40px 50px;
                box-sizing: border-box;
                background-color: #fff;
                box-shadow: 0 0 25px 5px rgb(73 73 73 / 13%);
            }
        }
    }
</style>

<style lang="less">
    .login-test {
        .el-input__inner {
            border: 0;
            border-radius: 0;
            border-bottom: 1px solid #E0E0E0;
        }
        .el-button {
            margin-top: 20px;
            border-radius: 2px;
            padding: 12px 185px;
        }
        .el-button--danger {
            border-color: #B29873;
            background-color: #B29873;
        }
    }
</style>
