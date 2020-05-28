<template>
    <div class="date-picker">
        <div class="flex flex_between">
            <p class="left"> < </p>
            <p class="date flex flex_start flex_center"
                @click="dateSelect">
                <i class="date-icon"></i>
                <span>2020年7月23日周五</span>
            </p>
            <p class="right"> > </p>
        </div>
        <!-- 日历 -->
        <div class="picker" v-if="isSelect">
            <el-calendar v-model="value"></el-calendar>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isSelect: false,    // 选择日期是否打开
                value: new Date()
            }
        },
        methods: {
            // 选择日期
            dateSelect() {
                if(this.isSelect) {
                    this.isSelect = false
                } else {
                    this.isSelect = true
                }

            }
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
            color: #2F375D;
            font-size: 18px;
            font-weight: 500;
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
