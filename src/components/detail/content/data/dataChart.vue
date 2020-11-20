<template>
    <div class="data-chart">
        <div class="team flex flex_between">
            <div class="flex flex_start flex_only_center">
                <img :src="matchTeams[0].team_snapshot.image">
                <p>{{matchTeams[0].team_snapshot.full_name}}</p>
            </div>
            <div class="flex flex_start flex_only_center">
                <p>{{matchTeams[1].team_snapshot.full_name}}</p>
                <img :src="matchTeams[1].team_snapshot.image">
            </div>
        </div>
        <div class="diagram flex flex_start flex_wrap">
            <diagram-bar
                class="bar"
                v-for="item in parameter.diagramList"
                :key="item.title"
                :diagramTitle="item.title"
                :diagramData="parameter"
            ></diagram-bar>
        </div>
    </div>
</template>

<script>
    import diagramBar from '@/components/detail/content/chart/diagramBar' // 条形图
    export default {
        data() {
            return {
                matchTeams: [],   // 战队
                parameter: {
                    leftColor: '#2980D9',
                    rightColor: '#F6B600',
                    diagramList: [
                        {
                            title: '比赛总数'
                        },
                        {
                            title: '实际统计比赛总数'
                        },
                        {
                            title: '比赛获胜数量'
                        },
                        {
                            title: '比赛胜率'
                        },
                    ]
                }
            }
        },
        created() {
            this.matchTeams = this.$store.state.matchsData.scores
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
