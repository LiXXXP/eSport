<template>
    <div class="progress-bar">
        <el-progress
            v-if="progressData.barType === 'line'"
            type="line"
            :show-text="progressData.showText"
            :stroke-width="progressData.width"
            :text-inside="progressData.inside"
            :percentage="percentage"
            :color="customColor">
        </el-progress>
        <el-progress
            v-else
            type="circle"
            :percentage="100">
        </el-progress>
    </div>
</template>

<script>
    export default {
        props:{
            progressData: {      // 进度条子组件接收父组件的参数
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                percentage: 60,
                customColor: '#2980D9',
            }
        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped>

</style>
