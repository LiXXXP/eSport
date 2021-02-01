<template>
    <div class="paging-page flex flex_center">
        <el-pagination
            small
            background
            :page-size="pageSize"
            :total="countData"
            :current-page="currentPage"
            layout="prev, pager, next"
            @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        props: {
            countData: {
                type: Number,
                default: 0
            },
            indexData: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                currentPage: 1
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.$emit('currentPage',val,this.indexData)
            }
        }
    }
</script>

<style lang="less" scoped>
    .paging-page {
        width: 980px;
        height: 36px;
        margin-top: 8px;
        box-sizing: border-box;
        background-color: #fff;
    }
</style>

<style lang="less">
    .paging-page {
        .el-pagination {
            color: #2F375D;
        }
        .el-pagination.is-background {
            .btn-prev,
            .btn-next {
                color: #2F375D;
                background-color: #fff;
            }
            .el-pager {
                  li  {
                      background-color: #fff;
                      &:hover {
                          color: #2F375D;
                      }
                  }
                  li:not(.disabled).active {
                      color: #fff;
                      font-weight: 500;
                      border-radius: 100%;
                      background-color: #2F375D;
                }
            }
        }
    }
</style>
