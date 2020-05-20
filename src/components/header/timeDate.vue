<template>
    <div class="time-date">
        {{currentTime}}
    </div>
</template>

<script>
    import { getCurrentDate } from '@/scripts/utils'
    export default {
        data() {
            return {
                currentTime: '',   // 显示当前时间
                timer: null        // 定时器
            }
        },
        mounted() {
            let _this = this
            this.timer = setInterval(() => {
                _this.currentTime = getCurrentDate()
            },1000)
        },
        methods: {

        },
        beforeDestroy() {
            if(this.timer) {
                clearInterval(this.timer)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>