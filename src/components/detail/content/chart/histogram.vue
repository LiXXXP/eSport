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
                // color: [ '#FF7600', '#FF7600', '#2980D9', '#D94629' ],
                color: [ '#008CD4', '#F6B600'],
            }
            this.chartSettings = {
                // stack: {
                //     'type1': ['Astralis', 'rate1'],
                //     'type2': ['Team.liquid', 'rate2']
                // },
                metrics: ['rate1', 'rate2'],
                dimension: ['type']
            }
            return {
                chartData: {
                    // columns: ['type', 'rate1', 'rate2', 'Astralis', 'Team.liquid',],
                    columns: ['type', 'rate1', 'rate2', 'Astralis'],
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
        height: 427px;
        min-width: 923px;
        padding-top: 30px;
        box-sizing: border-box;
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
