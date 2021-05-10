<template>
    <div class="create">

        <router-link class="link" to="/admin">＜返回</router-link>

        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">

            <el-form-item label="图片位置" prop="place">
                <el-select v-model="ruleForm.place" style="width:320px">
                    <el-option :label="'首页一号位'" :value="1" ></el-option>
                    <el-option :label="'首页轮播图'" :value="2" ></el-option>
                    <el-option :label="'首页三号位'" :value="3" ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="上架状态" prop="status">
                <el-select v-model="ruleForm.status" style="width:320px">
                    <el-option :label="'上架'" :value="1"></el-option>
                    <el-option :label="'下架'" :value="2"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="权重" prop="order">
                <el-input type="number" v-model.number="ruleForm.order" style="width:320px"></el-input>
            </el-form-item>

            <el-form-item label="图片名称" prop="name">
                <el-input v-model="ruleForm.name" style="width:320px"></el-input>
            </el-form-item>

            <el-form-item label="图片跳转地址" prop="address">
                <el-input v-model="ruleForm.address" style="width:320px"></el-input>
            </el-form-item>

            <el-form-item label="网站排序" prop="web">
                <el-select v-model="ruleForm.web" style="width:320px">
                    <el-option :label="'cn'" :value="1" ></el-option>
                    <el-option :label="'com'" :value="2" ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="图片文件" prop="file">
                <el-upload
                    action="#"
                    style="width:320px"
                    :limit="1"
                    :file-list="fileList"
                    :http-request="upload"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <template #tip>
                        <div class="el-upload__tip">尺寸：1920*300，jpg/png 文件，不超过 500kb</div>
                    </template>
                </el-upload>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">{{imageId?'立即更新':'立即创建'}}</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import { imageInfo, imageCreate, imageUpdate } from "@/scripts/request"
    export default {
        data() {
            return {
                ruleForm: {
                    place: 1,
                    status: 1,
                    order: 1,
                    name: '',
                    address: '',
                    web: 1
                },
                rules: {
                    place: [
                        { required: true, message: '请选择图片位置', trigger: 'change' }
                    ],
                    status: [
                        { required: true, message: '请选择图片分类', trigger: 'change' }
                    ],
                    order: [
                        { required: true, message: '请输入图片权重', trigger: 'blur' },
                        { type: 'number', message: '权重必须为数字值', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入图片名称', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请填写图片跳转地址', trigger: 'blur' }
                    ],
                    web: [
                        { required: true, message: '请输入图片网站排序', trigger: 'change' }
                    ],
                },
                fileList: [],
                imageId: 0
            };
        },
        mounted() {
            if(parseInt(this.$route.query.imageId)) {
                this.imageId = parseInt(this.$route.query.imageId)
                this.getImageInfo()
            }
        },
        methods: {
            getImageInfo() {
                let _this = this
                let params = {
                    image_id: parseInt(this.$route.query.imageId)
                }
                imageInfo(params).then(res => {
                    if(res.code === 200) {
                        _this.ruleForm.place = res.data.image_place
                        _this.ruleForm.order = res.data.order
                        _this.ruleForm.web = res.data.web_order
                        _this.ruleForm.name = res.data.image_name
                        _this.ruleForm.address = res.data.jump_url
                        _this.ruleForm.status = res.data.is_show
                        _this.fileList = [
                            {
                                name: res.data.image_name,
                                url: res.data.image
                            }
                        ]
                    } else if(res.code === 1000) {
                        this.$router.push({
                            path: '/admin/login'
                        })
                    }
                })
            },
            upload(e) {
                let _this = this
                if((e.file.size/1024)>500) {
                    this.$message.error('图片大小不能超过500kb')
                } else {
                    new Promise(function(resolve, reject) {
                        const reader = new FileReader()
                        reader.readAsDataURL(e.file)

                        reader.onload = function() {
                            _this.ruleForm.file = reader.result
                        }
                        reader.onerror = function(error) {
                            reject(error)
                        }
                        reader.onloadend = function() {
                            resolve(_this.ruleForm.file)
                        }
                    })
                }
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let params = {
                            image_id: parseInt(this.$route.query.imageId),
                            image_place: this.ruleForm.place,
                            status: this.ruleForm.status,
                            order: this.ruleForm.order,
                            image: this.ruleForm.file,
                            image_name: this.ruleForm.name,
                            jump_url: this.ruleForm.address,
                            web_order: this.ruleForm.web
                        }
                        if(parseInt(this.$route.query.imageId)) {
                            // 更新
                            params.image_id = parseInt(this.$route.query.imageId)
                            imageUpdate(params).then(res => {
                                if(res.code === 200) {
                                    this.$message.success(res.message)
                                    this.$router.go(-1)
                                } else if(res.code === 1000) {
                                    this.$router.push({
                                        path: '/admin/login'
                                    })
                                } else {
                                    this.$message.error(res.message)
                                }
                            })
                        } else {
                            // 创建
                            if(this.ruleForm.file.length !== 0) {
                                imageCreate(params).then(res => {
                                    if(res.code === 200) {
                                        this.$message.success(res.message)
                                        this.$router.go(-1)
                                    } else if(res.code === 1000) {
                                        this.$router.push({
                                            path: '/admin/login'
                                        })
                                    } else {
                                        this.$message.error(res.message)
                                    }
                                })
                            } else {
                                this.$message.error('请上传图片，以及图片大小不能超过500kb')
                            }
                        }
                    } else {
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        }
    }
</script>

<style lang="less" scoped>
    .create {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding: 60px 200px;
        box-sizing: border-box;
        background: linear-gradient(0deg, #CED2E8 0%, #E2E2E2 100%);
        .link {
            color: #333;
            display: block;
            margin-bottom: 60px;
            &:hover {
                color: #409EFF;
            }
        }
    }
</style>
