<template>
    <div class="time-date">
        <span>{{currentTime}}</span>
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
                this.timer = null
            }
        }
    }
</script>

<style lang="less" scoped>
    .time-date {
        padding: 11px 0;
        span {
            width: 149px;
            text-align: center;
            display: inline-block;
            border-right: 1px solid #3B4473;
        }
    }
</style>
