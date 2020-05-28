<template>
    <div class="paging-page flex flex_center">
        <el-pagination
            small
            background
            :pager-count="5"
            layout="prev, pager, next"
            :total="30">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {

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
