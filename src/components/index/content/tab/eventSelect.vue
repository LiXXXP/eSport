<template>
    <div class="event-select">
        <div class="event-box">
            <el-checkbox-group
                v-model="checkedAll"
                @change="checkedData"
            >
                <el-checkbox
                    class="select-box"
                    v-for="item in games"
                    :label="item"
                    :key="item"
                >
                    {{item}}
                </el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="event-btn flex flex_between">
            <div class="flex flex_start">
                <div class="select" @click="checkAll">全选</div>
                <div class="select" @click="checkCon">反选</div>
                <div class="hide">隐藏了36场</div>
            </div>
            <div class="btn" @click="eventSelect">确定</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isEvent: false,       // 是否打开赛事筛选
                checkedAll: [],       // 全选结果
                games: [
                    'LPL夏季联赛',
                    'ige南亚杯',
                    '黄金职业联赛',
                    'esl越南冠军联赛',
                    'LPL夏季联赛2',
                    'ige南亚杯2',
                    '2019国际邀请赛',
                    '黄金职业联赛2'
                ]
            }
        },
        methods: {
            checkedData(value) {
                this.checkedAll = value
            },
            // 全选
            checkAll(val) {
                this.checkedAll = val ? this.games : []
            },
            // 反选
            checkCon() {
                let conArr = this.checkedAll
                this.checkedAll = this.games.filter(function (item) {
                    return conArr.indexOf(item) < 0
                })
            },
            eventSelect() {
                if(this.checkedAll.length !== 0) {

                }
                this.$emit('openEvents', this.isEvent)
            }
        }
    }
</script>

<style lang="less" scoped>
    .event-select {
        z-index: 999;
        width: 390px;
        height: 178px;
        cursor: pointer;
        overflow: hidden;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #b8bcd2;
        position: absolute;
        top: 46px;
        left: 51.5%;
        .event-box {
            height: 146px;
            .select-box {
                width: 150px;
                color: #878787;
                padding-top: 12px;
                padding-left: 10px;
            }
        }
        .event-btn {
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
            background-color: #F6F6F6;
            .select {
                width: 60px;
                text-align: center;
                position: relative;
                &:nth-child(2)::before {
                    content: '';
                    width: 1px;
                    height: 12px;
                    position: absolute;
                    top: 9px;
                    left: 0;
                    background-color: #2F375D;
                }
            }
            .hide {
                color: #878787;
                margin-left: 10px;
            }
            .btn {
                color: #fff;
                width: 100px;
                cursor: pointer;
                text-align: center;
                background-color: #2F375D;
            }
        }
    }
</style>

<style lang="less">
    .event-select {
        .select-box {
            .el-checkbox__inner {
                border-radius: 100%;
                border-color: #DCDFE6;
                &::after {
                    border: 0;
                    width: 6px;
                    height: 6px;
                    border-radius: 100%;
                    background-color: #FF7800;
                    top: 50%;
                    left: 50%;
                    margin-top: -3px;
                    margin-left: -3px;
                }
            }
            .el-checkbox__input.is-checked+.el-checkbox__label {
                color: #FF7800;
            }
            .el-checkbox__input.is-checked .el-checkbox__inner {
                border-color: #FF7800;
                background-color: #fff;
            }
        }
    }
</style>
