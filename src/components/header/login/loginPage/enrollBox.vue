<template>
    <div class="enroll-box">
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm">

            <el-form-item prop="user">
                <el-input
                    v-model="ruleForm.user"
                    autocomplete="off"
                    placeholder="输入用户名"
                ></el-input>
            </el-form-item>

            <el-form-item prop="phone">
                <el-input
                    type="number"
                    v-model="ruleForm.phone"
                    autocomplete="off"
                    placeholder="输入手机号"
                ></el-input>
            </el-form-item>

            <el-form-item prop="pass">
                <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    show-password
                    placeholder="输入密码"
                ></el-input>
            </el-form-item>

            <el-form-item prop="checkPass">
                <el-input
                    type="password"
                    show-password
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    placeholder="确认密码"
                ></el-input>
            </el-form-item>

            <span>密码必须同时包含英文字母和数字且只能包含字母和数字</span>

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
    import { getRegister } from "@/scripts/request.js"

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
            var validatePhone = (rule, value, callback) => {
                if (value === '') {
                    this.isType = 'info'
                    this.isDisabled = true
                    callback(new Error('请输入手机号'))
                } else {
                    callback()
                }
            }
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass')
                    }
                    callback()
                }
            }
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    this.isType = 'info'
                    this.isDisabled = true
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.ruleForm.pass) {
                    this.isType = 'info'
                    this.isDisabled = true
                    callback(new Error('两次输入密码不一致!'));
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
                    phone: '',
                    pass: '',
                    checkPass: ''
                },
                rules: {           // 验证用户名和密码规则
                    user: [
                        { validator: validateUser, trigger: 'blur' }
                    ],
                    phone: [
                        { validator: validatePhone, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            // 注册
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let _this = this
                        let params = {
                            username: transHtml(_this.ruleForm.user),
                            phone: transHtml(_this.ruleForm.phone),
                            password: transHtml(_this.ruleForm.checkPass)
                        }
                        getRegister(params).then(res => {
                            if(res.code === 200) {
                                _this.$message.success(res.message)
                                _this.$emit('loginIndex',0)
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
    .enroll-box {
        span {
            font-size: 12px;
            color: #606266;
        }
    }
</style>
<style lang="less">
    .enroll-box {
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
