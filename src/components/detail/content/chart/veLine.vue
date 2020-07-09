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
    export default {
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
                    rows: [
                        { 'time': '00:00', '经济差': 1393, '经验差': 1093 },
                        { 'time': '08:20', '经济差': 3530, '经验差': 3230 },
                        { 'time': '16:40', '经济差': 2923, '经验差': 2623 },
                        { 'time': '25:00', '经济差': 1723, '经验差': 1423 },
                        { 'time': '33:20', '经济差': 3792, '经验差': 3492 },
                        { 'time': '41:40', '经济差': 4593, '经验差': 4293 }
                    ]
                }
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
