<template>
    <div class="ve-line">
        <ve-line
            :data="chartData"
            :extend="chartExtend"
            :settings="chartSettings"
        ></ve-line>
    </div>
</template>

<script>
    import { formatSeconds } from '@/scripts/utils'

    export default {
        props: {
            timeLine: {
                type: Object,
                default: {}
            }
        },
        data() {
            this.chartExtend = {
                series: {
                    label: {
                        show: false,
                        position: 'top'
                    }
                },
                color: [ '#468EF9', '#2F3959' ],
            }
            this.chartSettings = {
                metrics: ['经济差', '经验差'],
                dimension: ['time']
            }
            return {
                chartData: {
                    columns: ['日期', '经济差', '经验差'],
                    rows: []
                }
            }
        },
        created() {
            this.getRows()
        },
        methods: {
            getRows() {
                for(let item of this.timeLine.gold_diff_timeline) {
                    for(let key of this.timeLine.experience_diff_timeline) {
                        item.experience_diff = key.experience_diff
                    }
                    let rowItem = {
                        'time': formatSeconds(item.ingame_timestamp),
                        '经济差': parseInt(item.gold_diff) || 0,
                        '经验差': parseInt(item.experience_diff) || 0,
                    }
                    this.chartData.rows.push(rowItem)
                }
            }
        },
        watch: {
            timeLine(val,old) {
                this.getRows()
            }
        }
    }
</script>

<style lang="less" scoped>
    .ve-line {
        width: 700px;
        height: 427px;
        padding: 20px 0;
        box-sizing: border-box;
        background-color: #fff;
    }
</style>
