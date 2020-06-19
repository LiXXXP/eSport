<template>
    <div class="date-picker">
        <div class="flex flex_between flex_only_center">
            <p class="left" @click="preDay"></p>
            <p class="date flex flex_start flex_center"
                @click="dateSelect">
                <i class="date-icon"></i>
                <span>{{currentTime}}</span>
            </p>
            <p class="right" @click="nextDay"></p>
        </div>
        <!-- 日历 -->
        <div class="picker" v-show="isSelect">
            <calendar
                @choseDay="clickDay"
                :showDate="showDate"
            ></calendar>
        </div>
    </div>
</template>

<script>
    import calendar from '@/components/common/calendar'
    import { setDate } from '@/scripts/utils'
    export default {
        data() {
            return {
                isSelect: false,    // 选择日期是否打开
                currentTime: '',    // 当前显示时间
                showDate: ''        // 选择的日期
            }
        },
        created() {
            this.currentTime = setDate(new Date())
        },
        methods: {
            // 打开日历
            dateSelect() {
                this.isSelect = !this.isSelect
            },
            // 选择日期
            clickDay(data) {
                this.currentTime = setDate(new Date(data))
                this.showDate = data
                this.isSelect = false
            },
            // 前一天
            preDay() {

            },
            // 后一天
            nextDay() {

            }
        },
        components: {
            calendar
        }
    }
</script>

<style lang="less" scoped>
    .date-picker {
        width: 308px;
        height: 45px;
        cursor: pointer;
        padding: 0 16px;
        line-height: 45px;
        box-sizing: border-box;
        background-color: #fff;
        position: relative;
        .left,
        .right {
            width: 9px;
            height: 9px;
            color: #101010;
            display: inline-block;
            border-top: 1px solid #101010;
            border-left: 1px solid #101010;
        }
        .left {
            transform: rotate(-45deg);
        }
        .right {
            transform: rotate(135deg);
        }
        .date {
            color: #101010;
            font-size: 16px;
            font-weight: 500;
            .date-icon {
                width: 22px;
                height: 22px;
                display: inline-block;
                background: url('../../../../assets/imgs/index/date-icon.png') no-repeat 0 0;
                background-size: 100%;
            }
        }
        .picker {
            z-index: 999;
            width: 308px;
            height: 308px;
            position: absolute;
            top: 45px;
            left: 0;
        }
    }
</style>

<style lang="less">
	  .picker {
        .el-calendar__body {
            padding: 0 20px 10px;
            .el-calendar-table {
                .el-calendar-day {
                    padding: 0;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                }
            }
        }
        .el-button--mini {
            padding: 7px;
        }
	  }
</style>
