<template>
    <div class="calendar">
        <div class="wh_content_all">
            <div class="wh_top_changge flex flex_between flex_center">
                <div @click="PreMonth(myDate,false)">
                    <p class="wh_jiantou1"></p>
                </div>
                <div class="wh_content_li">
                    {{dateTop}}
                </div>
                <div @click="NextMonth(myDate,false)">
                    <p class="wh_jiantou2"></p>
                </div>
            </div>
            <div class="wh_content flex flex_wrap">
                <div class="wh_content_item"
                    v-for="tag in textTop"
                    :key="tag"
                >
                    <p class="wh_top_tag">
                        {{tag}}
                    </p>
                </div>
            </div>
            <div class="wh_content flex flex_wrap">
                <div class="wh_content_item"
                    v-for="(item,index) in list"
                    :key="index"
                    @click="clickDay(item,index)"
                >
                    <div
                        :class="[
                        'wh_item_date',
                        {wh_isToday:item.isToday},
                        {wh_chose_day:item.chooseDay},
                        {wh_other_dayhide:item.otherMonth!=='nowMonth'}]"
                    >
                      {{item.id}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import timeUtil from "@/scripts/calendar"
    export default {
    data() {
        return {
            myDate: [],
            list: [],
            historyChose: [],
            dateTop: ""
        }
    },
    props: {
        textTop: {
            type: Array,
            default: () => ["一", "二", "三", "四", "五", "六", "日"]
        },
        showDate: {
            type: String,
            default: ''
        }
    },
    created() {
        this.myDate = new Date()
    },
    mounted() {
        this.getList(this.myDate,this.showDate)
    },
    methods: {
        clickDay: function(item, index) {
            if (item.otherMonth === "nowMonth") {
                this.getList(this.myDate, item.date)
            }
            if (item.otherMonth !== "nowMonth") {
                item.otherMonth === "preMonth" ? this.PreMonth(item.date) : this.NextMonth(item.date)
            }
        },
        PreMonth: function(date, isChosedDay = true) {
            date = timeUtil.dateFormat(date)
            this.myDate = timeUtil.getOtherMonth(this.myDate, "preMonth")
            if (isChosedDay) {
                this.getList(this.myDate, date, isChosedDay)
            } else {
                this.getList(this.myDate)
            }
        },
        NextMonth: function(date, isChosedDay = true) {
            date = timeUtil.dateFormat(date)
            this.myDate = timeUtil.getOtherMonth(this.myDate, "nextMonth")
            if (isChosedDay) {
                this.getList(this.myDate, date, isChosedDay)
            } else {
                this.getList(this.myDate)
            }
        },
        getList: function(date, chooseDay, isChosedDay = true) {
            this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`
            let arr = timeUtil.getMonthList(this.myDate)
            for (let i = 0; i < arr.length; i++) {
                let k = arr[i]
                k.chooseDay = false
                const nowTime = k.date
                const t = new Date(nowTime).getTime() / 1000
                let flag = k.otherMonth === "nowMonth"
                if (chooseDay && chooseDay === nowTime && flag) {
                    this.$emit("choseDay", nowTime)
                    this.historyChose.push(nowTime)
                    k.chooseDay = true
                } else if (
                    this.historyChose[this.historyChose.length - 1] === nowTime && !chooseDay && flag
                ) {
                    k.chooseDay = true
                }
            }
            this.list = arr;
        }
    }
};
</script>

<style lang="less" scoped>
    .calendar {
        width: 308px;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #b8bcd2;
        .wh_content_all {
            width: 100%;
            overflow: hidden;
            padding-bottom: 8px;
            background-color: #fff;
            .wh_top_changge {
                height: 45px;
                color: #101010;
                cursor: pointer;
                padding: 0 20px;
                font-size: 16px;
                .wh_content_li {
                    cursor: auto;
                }
                .wh_jiantou1 {
                    width: 10px;
                    height: 10px;
                    border-top: 1px solid #101010;
                    border-left: 1px solid #101010;
                    transform: rotate(-45deg);
                }
                .wh_jiantou2 {
                    width: 10px;
                    height: 10px;
                    border-top: 1px solid #101010;
                    border-right: 1px solid #101010;
                    transform: rotate(45deg);
                }
            }
        }
        .wh_content {
            width: 100%;
            padding: 0 3%;
            .wh_content_item {
                width: 13.4%;
                height: 40px;
                color: #101010;
                font-size: 14px;
                line-height: 40px;
                text-align: center;
                .wh_other_dayhide,
                .wh_want_dayhide {
                    color: #bbb;
                }
                .wh_isToday,
                .wh_chose_day {
                    color: #fff;
                    border-radius: 100px;
                    transform: scale(0.8);
                    background-color: #2f375d;
                }
                .wh_isToday {
                    opacity: .8;
                }
            }
        }
    }
</style>
