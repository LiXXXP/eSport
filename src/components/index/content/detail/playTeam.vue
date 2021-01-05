<template>
    <div class="play-team flex flex_between flex_center">
        <div class="team flex flex_only_center">
            <p class="left b">B</p>
            <p class="beyond-ellipsis">
                {{
                    (factionsData[0].faction === 'blue' && factionsData[0].team_id === scoresData[0].team_id) ?
                    scoresData[0].team_snapshot.name : scoresData[1].team_snapshot.name
                }}
            </p>
            <img :src="(factionsData[0].faction === 'blue' && factionsData[0].team_id === scoresData[0].team_id) ?
                    scoresData[0].team_snapshot.image : scoresData[1].team_snapshot.image" class="team-img">
            <img src="../../../../assets/imgs/detail/win.png" class="win"
                v-if="(factionsData[0].faction === 'blue' && factionsData[0].team_id === scoresData[0].team_id) ?
                    factionsData[0].team_id === winnerId : factionsData[1].team_id === winnerId">
        </div>
        <div class="time flex flex_only_center">
            <i class="iconfont icon-shijian"></i>
            <p>{{durationTime(durationData)}}</p>
        </div>
        <div class="team flex flex_only_center flex_end">
            <img src="../../../../assets/imgs/detail/win.png" class="win"
                v-if="(factionsData[1].faction === 'red' && factionsData[1].team_id === scoresData[1].team_id) ?
                      factionsData[1].team_id === winnerId : factionsData[0].team_id === winnerId">
            <img :src="(factionsData[1].faction === 'red' && factionsData[1].team_id === scoresData[1].team_id) ?
                    scoresData[1].team_snapshot.image : scoresData[0].team_snapshot.image" class="team-img">
            <p class="beyond-ellipsis">
                {{
                    (factionsData[1].faction === 'red' && factionsData[1].team_id === scoresData[1].team_id) ?
                    scoresData[1].team_snapshot.name : scoresData[0].team_snapshot.name
                }}
            </p>
            <p class="right r">R</p>
        </div>
    </div>
</template>

<script>
    import { formatSeconds } from '@/scripts/utils'
    export default {
        props: {
            factionsData: {  // 阵营
                type: Array,
                default: () => []
            },
            scoresData: {   // 队伍
                type: Array,
                default: () => []
            },
            winnerId: {    // 赢家id
                type: Number,
                default: 0
            },
            durationData: {  // 对局时间
                type: Number,
                default: 0
            }
        },
        computed: {
            durationTime(sec) {
                return function(sec) {
                    return formatSeconds(sec)
                }
            }
        },
    }
</script>

<style lang="less" scpoed>
    .play-team {
        padding-bottom: 4px;
        border-bottom: 1px solid #CFCFCF;
        .team {
            width: 400px;
            color: #101010;
            font-size: 18px;
            font-weight: 500;
            .left,
            .right {
                color: #fff;
                width: 20px;
                height: 20px;
                font-size: 14px;
                line-height: 20px;
                text-align: center;
                border-radius: 100%;
            }
            .left {
                margin-right: 6px;
            }
            .right {
                margin-left: 6px;
            }
            .b {
                background-color: #2980D9;
            }
            .r {
                background-color: #CC5728;
            }
            .team-img {
                width: 24px;
                height: 24px;
            }
            .win {
                width: 65px;
                height: 36px;
                margin: 0 24px;
            }
            .beyond-ellipsis {
                width: 180px;
            }
        }
        .time {
            color: #101010;
            font-size: 16px;
            i {
                margin-right: 6px;
            }
        }
    }
</style>
