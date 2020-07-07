<template>
    <div class="histogram">
        <ve-histogram
            :data="chartData"
            :extend="chartExtend"
            :settings="chartSettings"
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
                        position: 'top'
                    }
                },
                color: [ '#FF7600', '#FF7600', '#2980D9', '#D94629' ],
            }
            this.chartSettings = {
                stack: {
                    'type1': ['Astralis', 'rate1'],
                    'type2': ['Team.liquid', 'rate2']
                },
            }
            return {
                chartData: {
                    columns: ['type', 'rate1', 'rate2', 'Astralis', 'Team.liquid',],
                    rows: [
                        {
                            'type':'获胜',
                            'Astralis': 55,
                            'Team.liquid': 70,
                            'rate1': 10,
                            'rate2': 30
                        },
                        {
                            'type':'峡谷先锋控制率',
                            'Astralis': 55,
                            'Team.liquid': 70,
                            'rate1': 10,
                            'rate2': 30
                        },
                        {
                            'type':'元素巨龙控制率',
                            'Astralis': 55,
                            'Team.liquid': 70,
                            'rate1': 10,
                            'rate2': 30
                        },
                        {
                            'type':'纳什男爵控制率',
                            'Astralis': 55,
                            'Team.liquid': 70,
                            'rate1': 10,
                            'rate2': 30
                        },
                        {
                            'type':'远古巨龙控制率',
                            'Astralis': 55,
                            'Team.liquid': 70,
                            'rate1': 10,
                            'rate2': 30
                        },
                        {
                            'type':'时长',
                            'Astralis': 55,
                            'Team.liquid': 70,
                            'rate1': 10,
                            'rate2': 30
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
