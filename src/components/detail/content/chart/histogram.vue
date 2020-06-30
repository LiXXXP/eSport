<template>
    <div class="histogram">
        <ve-histogram
            :data="chartData"
            :extend="chartExtend"
        ></ve-histogram>
    </div>
</template>

<script>
    export default {
        data() {
            this.chartExtend = {
                series: {
                    label: { show: true, position: "top" }
                },
                color: ["#468EF9", "#5166A4"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        crossStyle: {
                            color: "#999"
                        }
                    }
                }
            }
            return {
                chartData: {
                    columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '获胜', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '峡谷先锋控制率', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                    ]
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .histogram {
        width: 923px;
        overflow-x: auto;
        overflow-y: hidden;
        padding-top: 20px;
        background-color: #fff;
        &::-webkit-scrollbar {
            height: 12px;
            background-color: #E4E4E4;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 6px;
            background-color: #fff;
        }
        &::-webkit-scrollbar-track {
            background: #E4E4E4;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        }
    }
</style>
