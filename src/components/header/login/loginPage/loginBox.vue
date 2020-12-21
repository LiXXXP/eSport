<template>
    <div class="login-box">
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm">

            <el-form-item prop="user">
                <el-input
                    v-model="ruleForm.user"
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
</template>

<script>
    import { transHtml } from '@/scripts/utils'
    import { getLogin } from "@/scripts/request.js"

    export default {
        data() {
            var validateUser = (rule, value, callback) => {
                if (value === '') {
                    this.isType = 'info'
                    this.isDisabled = true
                    callback(new Error('请输入用户名'))
                } else {
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
                    user: '',
                    pass: '',
                },
                rules: {           // 验证用户名和密码规则
                    user: [
                        { validator: validateUser, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            // 登录
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let _this = this
                        let params = {
                            username: transHtml(_this.ruleForm.user),
                            password: transHtml(_this.ruleForm.pass)
                        }
                        getLogin(params).then(res => {
                            if(res.code === 200) {
                                localStorage.setItem('userToken',res.data.token)
                                window.location.href = '/'
                            } else {
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
    .login-box {

    }
</style>

<style lang="less">
    .login-box {
        .el-input__inner {
            border: 0;
            border-radius: 0;
            border-bottom: 1px solid #E0E0E0;
        }
        .el-button {
            margin-top: 20px;
            border-radius: 2px;
            padding: 11px 145px;
        }
        .el-button--danger {
            border-color: #F77600;
            background-color: #F77600;
        }
    }
</style>
