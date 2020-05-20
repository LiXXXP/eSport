<template>
    <div class="paging-page">
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

</style>