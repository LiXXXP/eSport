<template>
    <div class="data-chart">
        <div class="team flex flex_between">
            <div class="flex flex_start">
                <img src="../../../../assets/imgs/detail/4.png">
                <p>Immortal Gaming</p>
            </div>
            <div class="flex flex_start">
                <p>Immortal Gaming</p>
                <img src="../../../../assets/imgs/detail/4.png">
            </div>
        </div>
        <div class="diagram flex flex_start flex_wrap">
            <diagram-bar
                class="bar"
                :diagramData="item.title"
                v-for="item in diagramList"
                :key="item.title"
            ></diagram-bar>
        </div>
    </div>
</template>

<script>
    import diagramBar from '@/components/detail/content/chart/diagramBar' // 条形图
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
            diagramBar
        }
    }
</script>

<style lang="less" scoped>
    .data-chart {
        width: 960px;
        padding: 10px 0;
        margin-top: 2px;
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
        .team {
            margin-bottom: 5px;
            img {
                width: 30px;
                height: 30px;
                margin: 0 15px;
            }
            p {
                font-size: 16px;
                font-weight: 600;
            }
        }
        .diagram {
            padding: 10px;
            box-sizing: border-box;
            .bar {
                margin: 0 70px 20px 0;
                &:nth-child(3n) {
                    margin-right: 0;
                }
            }
        }
    }
</style>
