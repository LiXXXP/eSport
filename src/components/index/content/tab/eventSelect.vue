<template>
    <div class="event-select">
        <div class="event-box">
            <el-checkbox-group
                v-model="checkedCities"
                @change="handleCheckedCitiesChange"
            >
                <el-checkbox
                    class="select-box"
                    v-for="city in cities"
                    :label="city"
                    :key="city"
                >
                    {{city}}
                </el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="event-btn flex flex_between">
            <div class="flex flex_start">
                <div class="select"
                    :indeterminate="isIndeterminate"
                    v-model="checkAll"
                    @click="handleCheckAllChange"
                >全选</div>
                <div class="select">反选</div>
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
                checkAll: false,
                checkedCities: [],
                cities: [
                    'LPL夏季联赛',
                    'ige南亚杯',
                    '黄金职业联赛',
                    'esl越南冠军联赛',
                    'LPL夏季联赛2',
                    'ige南亚杯2',
                    '2019国际邀请赛',
                    '黄金职业联赛2'
                ],
                isIndeterminate: true
            }
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? this.cities : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            eventSelect() {
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
        border: 1px solid #2f375d;
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
