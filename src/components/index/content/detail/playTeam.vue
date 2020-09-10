<template>
    <div class="play-team flex flex_between flex_center">
        <div class="team flex flex_only_center">
            <p class="left">
                {{
                    teamsData.battle_detail.factions[0].team_id === teamsData.teams[0].team_id
                    && teamsData.battle_detail.factions[0].faction === 'blue' ? 'B':'R'
                }}
            </p>
            <p :title="teamsData.teams[0].team_snapshot.full_name">
                {{teamsData.teams[0].team_snapshot.name}}
            </p>
            <img src="../../../../assets/imgs/detail/win.png"
                v-if="teamsData.teams[0].team_id === teamsData.winner.team_id"
            >
        </div>
        <div class="time flex flex_only_center">
            <i class="iconfont icon-shijian"></i>
            <p>{{durationTime(teamsData.battle_detail.duration)}}</p>
        </div>
        <div class="team flex flex_only_center flex_end">
            <img src="../../../../assets/imgs/detail/win.png"
                v-if="teamsData.teams[1].team_id === teamsData.winner.team_id"
            >
            <p :title="teamsData.teams[1].team_snapshot.full_name">
                {{teamsData.teams[1].team_snapshot.name}}
            </p>
            <p class="right">
                {{
                    teamsData.battle_detail.factions[1].team_id === teamsData.teams[1].team_id
                    && teamsData.battle_detail.factions[1].faction === 'red' ? 'R':'B'
                }}
            </p>
        </div>
    </div>
</template>

<script>
    import { formatSeconds } from '@/scripts/utils'
    export default {
        props: {
            teamsData: {
                type: Object,
                default: {}
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
            width: 200px;
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
                background-color: #2980D9;
            }
            .right {
                margin-left: 6px;
                background-color: #CC5728;
            }
            img {
                width: 65px;
                height: 36px;
                margin: 0 24px;
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
