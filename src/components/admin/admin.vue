<template>
    <div class="admin">
        <div class="list flex flex_column flex_center">
            <div class="select flex flex_only_center">
                <div class="flex flex_only_center">
                    <div>图片位置：</div>
                    <el-select v-model="image.place" @change="selectImage">
                        <el-option
                            :label="'首页一号位'"
                            :value="1"
                        ></el-option>
                        <el-option
                            :label="'首页轮播图'"
                            :value="2"
                        ></el-option>
                        <el-option
                            :label="'首页三号位'"
                            :value="3"
                        ></el-option>
                    </el-select>
                </div>
                <div class="flex flex_only_center">
                    <div>上架状态：</div>
                    <el-select v-model="image.status" @change="selectImage">
                        <el-option
                            :label="'上架'"
                            :value="1"
                        ></el-option>
                        <el-option
                            :label="'下架'"
                            :value="2"
                        ></el-option>
                    </el-select>
                </div>
                <div class="flex flex_only_center">
                    <div>图片分类：</div>
                    <el-select v-model="image.order" @change="selectImage">
                        <el-option
                            :label="'cn'"
                            :value="1"
                        ></el-option>
                        <el-option
                            :label="'com'"
                            :value="2"
                        ></el-option>
                    </el-select>
                </div>

                <el-button plain @click="lookAll()">查看全部</el-button>
                <el-button plain @click="gotoCreate(0)">创建</el-button>
            </div>
            <div class="table">
                <el-table
                    :data="list"
                    height="700"
                    :row-class-name="tableRowClassName">
                    <el-table-column
                        prop="id"
                        label="图片ID"
                    ></el-table-column>
                    <el-table-column
                        prop="image_place"
                        label="图片位置"
                    ></el-table-column>
                    <el-table-column
                        prop="order"
                        label="权重"
                    ></el-table-column>
                    <el-table-column
                        prop="web_order"
                        label="网站排序"
                    ></el-table-column>
                    <el-table-column
                        prop="web_address"
                        label="网站地址"
                    ></el-table-column>
                    <el-table-column
                        prop="image_name"
                        label="图片名称"
                    ></el-table-column>
                    <el-table-column
                        prop="jump_url"
                        label="跳转地址"
                    ></el-table-column>
                    <el-table-column
                        prop="is_show"
                        label="是否显示"
                    ></el-table-column>
                    <el-table-column
                        prop="create_time"
                        label="创建时间"
                    ></el-table-column>
                    <el-table-column
                        prop="update_time"
                        label="更新时间"
                    ></el-table-column>
                    <el-table-column
                        label="操作">
                        <template #default="scope">
                            <el-button type="text" size="small" @click="gotoCreate(scope.row.id)">编辑</el-button>
                            <el-button type="text" size="small" @click="deleteRow(scope.$index, list, scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <Pagination :countData="page.count" :pageSize="page.limit" @currentPage="currentPage" v-if="list.length>0" />
        </div>
    </div>
</template>

<script>
    import Pagination from '@/components/common/pagingPage'
    import { imageList, imageDelete } from "@/scripts/request"

    export default {
        name: 'admin',
        data() {
            return {
                list: [],
                image: {
                    place: '',
                    order: '',
                    status: ''
                },
                page: {
                    limit: 10,   // 条数
                    count: 0,    // 总数
                    current: 1   // 当前页
                },
            }
        },
        created() {
            this.getImageList()
        },
        methods: {
            currentPage(val) {
                this.page.current = val
                this.getImageList()
            },
            selectImage() {
                this.getImageList()
            },
            // 查看全部
            lookAll() {
                this.image.place = ''
                this.image.order = ''
                this.image.status = ''
                this.getImageList()
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex % 2 === 0) {
                    return 'success-row'
                }
                return ''
            },
            // 编辑
            gotoCreate(imageId) {
                this.$router.push({
                    path: '/admin/create',
                    query: {
                        imageId: imageId
                    }
                })
            },
            // 删除
            deleteRow(index, rows, id) {
                let params = {
                    image_id: id
                }
                imageDelete(params).then(res => {
                    if(res.code === 200) {
                        rows.splice(index, 1)
                        this.$message.success(res.message)
                    }
                })
            },
            // 图片列表
            getImageList() {
                let _this = this
                let params = {
                    image_place: _this.image.place,
                    order: _this.image.order,
                    status: _this.image.status,
                    page: _this.page.current,
                    limit: _this.page.limit
                }
                imageList(params).then(res => {
                    if(res.code === 200) {
                        _this.list = res.data.list
                        _this.page.count = res.data.count
                    }
                })
            }
        },
        components: {
            Pagination
        }
    }
</script>

<style lang="less" scoped>
    .admin {
        width: 100%;
        overflow: hidden;
        background: linear-gradient(0deg, #CED2E8 0%, #E2E2E2 100%);
        .list {
            height: 100vh;
            .select {
                width: calc(100% - 400px);
                .flex {
                    margin-right: 20px;
                }
            }
            .table {
                margin: 30px 0 10px;
                width: calc(100% - 400px);
                box-shadow: 0 0 25px 5px rgb(73 73 73 / 13%);
            }
        }
    }
</style>

<style lang="less">
    .el-table .success-row {
        background: #f0f9eb;
    }
</style>
