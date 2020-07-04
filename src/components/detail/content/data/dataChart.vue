<template>
    <div class="data-chart">
        <div class="diagram flex flex_start flex_wrap">
            <diagram-bar
                :diagramData="item.title"
                v-for="item in diagramList"
                :key="item.title"
            ></diagram-bar>
        </div>
        <histogram></histogram>
    </div>
</template>

<script>
    import diagramBar from '@/components/detail/content/chart/diagramBar' // 条形图
    import histogram from '@/components/detail/content/chart/histogram'   // 柱状图
    export default {
        data() {
            return {
                diagramList: [
                    {
                        title: '比赛总数'
                    },
                    {
                        title: '实际比赛总数'
                    },
                    {
                        title: '比赛胜率'
                    },
                    {
                        title: '对局总数'
                    },
                    {
                        title: '实际对局总数'
                    }
                ]
            }
        },
        components: {
            diagramBar,
            histogram
        }
    }
</script>

<style lang="less" scoped>
    .data-chart {
        min-width: 923px;
        padding: 10px 0;
        overflow-x: auto;
        overflow-y: hidden;
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
        .diagram {
            padding: 10px;
            box-sizing: border-box;
        }
    }
</style>
