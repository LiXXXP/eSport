<template>
    <div class="play-team flex flex_between flex_center">
        <div class="team flex flex_only_center">
            <p :class="['left',{
                b: teamsData.battle_detail.factions[0].faction === 'blue',
                r: teamsData.battle_detail.factions[0].faction === 'red'
            }]">
                {{teamsData.battle_detail.factions[0].faction === 'blue' ? 'B':'R'}}
            </p>
            <p :title="(teamsData.battle_detail.factions[0].faction === 'blue' &&
                    teamsData.battle_detail.factions[0].team_id === teamsData.teams[0].team_id) ?
                    teamsData.teams[0].team_snapshot.full_name :
                    teamsData.teams[1].team_snapshot.full_name">
                {{
                    (teamsData.battle_detail.factions[0].faction === 'blue' &&
                    teamsData.battle_detail.factions[0].team_id === teamsData.teams[0].team_id) ?
                    teamsData.teams[0].team_snapshot.short_name :
                    teamsData.teams[1].team_snapshot.short_name
                }}
            </p>
            <img src="../../../../assets/imgs/detail/win.png"
                v-if="(teamsData.battle_detail.factions[0].faction === 'blue' &&
                    teamsData.battle_detail.factions[0].team_id === teamsData.teams[0].team_id) ?
                    teamsData.teams[0].team_id === teamsData.winner.team_id :
                    teamsData.teams[1].team_id === teamsData.winner.team_id">
        </div>
        <div class="time flex flex_only_center">
            <i class="iconfont icon-shijian"></i>
            <p>{{durationTime(teamsData.battle_detail.duration)}}</p>
        </div>
        <div class="team flex flex_only_center flex_end">
            <img src="../../../../assets/imgs/detail/win.png"
                v-if="(teamsData.battle_detail.factions[1].faction === 'red' &&
                    teamsData.battle_detail.factions[1].team_id === teamsData.teams[1].team_id) ?
                    teamsData.teams[1].team_id === teamsData.winner.team_id :
                    teamsData.teams[0].team_id === teamsData.winner.team_id">
            <p :title="(teamsData.battle_detail.factions[1].faction === 'red' &&
                    teamsData.battle_detail.factions[1].team_id === teamsData.teams[1].team_id) ?
                    teamsData.teams[1].team_snapshot.full_name :
                    teamsData.teams[0].team_snapshot.full_name">
                {{
                    (teamsData.battle_detail.factions[1].faction === 'blue' &&
                    teamsData.battle_detail.factions[1].team_id === teamsData.teams[1].team_id) ?
                    teamsData.teams[1].team_snapshot.short_name :
                    teamsData.teams[0].team_snapshot.short_name
                }}
            </p>
            <p :class="['right',{
                b: teamsData.battle_detail.factions[1].faction === 'blue',
                r: teamsData.battle_detail.factions[1].faction === 'red'
            }]">
                {{teamsData.battle_detail.factions[1].faction === 'red' ? 'R':'B'}}
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
