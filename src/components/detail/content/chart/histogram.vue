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
                    label: {
                        show: true,
                        position: "top"
                    }
                },
                color: ["#2980D9", "#D94629"],
            }
            return {
                chartData: {
                    columns: ['type', 'Astralis', 'Team.liquid'],
                    rows: [
                        {
                            'type':'获胜',
                            'Astralis': 55,
                            'Team.liquid': 70
                        },
                        {
                            'type':'峡谷先锋控制率',
                            'Astralis': 55,
                            'Team.liquid': 70
                        },
                        {
                            'type':'元素巨龙控制率',
                            'Astralis': 55,
                            'Team.liquid': 70
                        },
                        {
                            'type':'纳什男爵控制率',
                            'Astralis': 55,
                            'Team.liquid': 70
                        },
                        {
                            'type':'远古巨龙控制率',
                            'Astralis': 55,
                            'Team.liquid': 70
                        },
                        {
                            'type':'时长',
                            'Astralis': 55,
                            'Team.liquid': 70
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .histogram {
        height: 340px;
    }
</style>
