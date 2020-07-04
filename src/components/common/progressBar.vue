<template>
    <div class="progress-bar">
        <el-progress
            v-if="progressData.barType === 'line'"
            type="line"
            :show-text="progressData.showText"
            :stroke-width="progressData.width"
            :text-inside="progressData.inside"
            :percentage="progressRate"
            :color="progressColor"
        ></el-progress>
        <el-progress
            v-else
            type="circle"
            :width="120"
            :color="progressColor"
            :percentage="progressRate"
        ></el-progress>
    </div>
</template>

<script>
    export default {
        props:{
            progressData: {
                type: Object,
                default: {}
            },
            progressRate: {
                type: Number,
                default: 0
            },
            progressColor: {
                type: String,
                default: ''
            }
        },
        data() {
            return {

            }
        },
        mounted() {

        }
    }
</script>
