<template>
    <div class="e-histogram">
        <ve-histogram :data="chartData" :extend="extend"></ve-histogram>
    </div>
</template>

<script>
    export default {
        data() {
            this.extend = {
                series: {
                    label: { show: true, position: "top" }
                }
            }
            return {
                chartData: {
                    columns: ['日期', 'PSG', '下单用户', '下单率'],
                    rows: [
                        { '日期': '获胜', 'PSG': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '1/2', 'PSG': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', 'PSG': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', 'PSG': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', 'PSG': 3792, '下单用户': 3492, '下单率': 0.323 },
                        { '日期': '1/6', 'PSG': 4593, '下单用户': 4293, '下单率': 0.78 }
                    ]
                }
            }
        }
    }
</script>

<style lang="less" scoped>

</style>