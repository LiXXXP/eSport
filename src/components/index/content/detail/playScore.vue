<template>
    <div class="play-score">
        <div class="flex flex_between">
            <div class="play-header flex flex_start flex_only_center">
                <i class="play-header-bar"></i>
                <span class="play-header-text">当前比分</span>
            </div>
            <div class="tips">
                <i class="iconfont icon-jinggao"></i>
                报告网站错误数据
            </div>
        </div>
        <div class="content flex flex_between" v-if="scoreData.length !== 0">
            <div class="flex flex_center">
                <img :src="scoreData[0].team_snapshot.image">
                <p class="beyond-ellipsis"
                    :title="scoreData[0].team_snapshot.name"
                >{{scoreData[0].team_snapshot.name}}</p>
            </div>
            <div class="score flex flex_center">
                <div class="bar flex flex_start">
                    <div :class="{win: item.winner.team_id === scoreData[0].team_id}"
                        v-for="item in battleData"
                        :key="item.duration"
                    ></div>
                </div>
                <p :class="['left',{
                    green: scoreData[0].score > scoreData[1].score,
                    red: scoreData[0].score < scoreData[1].score
                }]">
                    {{scoreData[0].score}}
                </p>
                <p>:</p>
                <p :class="['right',{
                    green: scoreData[1].score > scoreData[0].score,
                    red: scoreData[1].score < scoreData[0].score
                }]">
                    {{scoreData[1].score}}
                </p>
                <div class="bar flex flex_start">
                    <div :class="{win: item.winner.team_id === scoreData[1].team_id}"
                        v-for="item in battleData"
                        :key="item.duration"
                    ></div>
                </div>
            </div>
            <div class="flex flex_center">
                <p class="beyond-ellipsis"
                    style="text-align:right;"
                    :title="scoreData[1].team_snapshot.name"
                >{{scoreData[1].team_snapshot.name}}</p>
                <img :src="scoreData[1].team_snapshot.image">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            scoreData: {
                type: Array,
                default: () => []
            },
            battleData: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {

            }
        },
        created() {

        }
    }
</script>

<style lang="less" scoped>
    .play-score {
        margin-bottom: 35px;
        .tips {
            color: #878787;
            margin-top: 24px;
        }
        .content {
            width: 960px;
            height: 58px;
            color: #101010;
            padding: 0 30px;
            font-size: 18px;
            margin-bottom: 12px;
            box-sizing: border-box;
            background-color: #fff;
            img {
                width: 38px;
                height: 42px;
                margin: 0 14px;
            }
            .score {
                color:#3D3D3D;
                font-size: 30px;
                p {
                    margin: 0 5px;
                    &.left {
                        margin-left: 30px;
                    }
                    &.right {
                        margin-right: 30px;
                    }
                    &.green {
                        color: #12BF12;
                    }
                    &.red {
                        color: #E74E11;
                    }
                }
                .bar {
                    div {
                        width:3px;
                        height:20px;
                        margin-right: 3px;
                        background-color: #E7E7E7;
                        &.win {
                            background-color: #2F3A5A;
                        }
                    }
                }
            }
            .beyond-ellipsis {
                width: 200px;
            }
        }
    }
</style>
