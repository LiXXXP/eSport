<template>
    <div class="play-csgo">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">对局详情</span>
        </div>
        <div v-if="battleData.length !== 0">
            <div v-for="(item,battleIndex) in battleData" :key="item.battle_id">
                <div v-if="item.battle_id === targetMatchId">
                    <div class="map flex flex_center">
                        <kill-arms
                            :sideData="item.teams[0].starting_side"
                            :eventsData="item.special_events"
                        ></kill-arms>
                        <kill-sign
                            :isReverse="false"
                            :sideData="item.teams[0]"
                        ></kill-sign>
                        <div class="center flex flex_center">
                            <p :class="['left',{
                                green: item.teams[0].score > item.teams[1].score,
                                red: item.teams[0].score < item.teams[1].score
                            }]">
                                {{item.teams[0].score}}
                            </p>
                            <div v-for="(key,index) in mapData" :key="key.order">
                                <div v-if="index === battleIndex">
                                    <img :src="key.map.image.square_image">
                                </div>
                            </div>
                            <p :class="['right',{
                                green: item.teams[1].score > item.teams[0].score,
                                red: item.teams[1].score < item.teams[0].score
                            }]">
                                {{item.teams[1].score}}
                            </p>
                        </div>
                        <kill-sign
                            :isReverse="true"
                            :sideData="item.teams[1]"
                        ></kill-sign>
                        <kill-arms
                            :sideData="item.teams[1].starting_side"
                            :eventsData="item.special_events"
                        ></kill-arms>
                    </div>
                    <table cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <div class="flex flex_start" v-if="item.rounds_detail.length>0">
                                        <kill-bar
                                            :initColor="'#cfcfcf'"
                                            :isReverse="true"
                                            v-for="key in item.rounds_detail.slice(0,15)"
                                            :key="key.round_ordinal"
                                            :survivedNum="item.teams[0].team_id === key.side[0].team_id ?
                                                          key.side[0].survived_players : key.side[1].survived_players"
                                            :headshotNum="item.teams[0].team_id === key.side[0].team_id ?
                                                          key.side[0].headshot_kills : key.side[1].headshot_kills"
                                            :backColor="item.teams[0].team_id === key.side[0].team_id ? '#008CD4':'#F6B600'"
                                        ></kill-bar>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex flex_start" v-if="item.rounds_detail.length>0">
                                        <kill-bar
                                            :initColor="'#cfcfcf'"
                                            :isReverse="true"
                                            v-for="key in item.rounds_detail.slice(15,30)"
                                            :key="key.round_ordinal"
                                            :survivedNum="item.teams[1].team_id === key.side[1].team_id?
                                                          key.side[1].survived_players : key.side[0].survived_players"
                                            :headshotNum="item.teams[1].team_id === key.side[1].team_id?
                                                          key.side[1].headshot_kills : key.side[0].headshot_kills"
                                            :backColor="item.teams[0].team_id === key.side[0].team_id ? '#008CD4':'#F6B600 '"
                                        ></kill-bar>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="flex flex_only_center" v-if="item.teams[0].team_snapshot">
                                        <img :src="item.teams[0].team_snapshot.image" class="team-img">
                                        <p class="team-name beyond-ellipsis" :title="item.teams[0].team_snapshot.name">
                                            {{item.teams[0].team_snapshot.name}}
                                        </p>
                                        <img v-if="item.teams[0].team_id === item.winner.team_id"
                                            src="../../../../assets/imgs/detail/win.png"
                                            class="team-win">
                                    </div>
                                </td>
                                <td class="list">
                                    <div class="flex flex_start flex_only_center" v-if="item.rounds_detail.length>0">
                                        <div class="item"
                                            v-for="key in item.rounds_detail.slice(0,15)"
                                            :key="key.round_ordinal">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png"
                                            v-if="key.win_type === 'cts_win' && key.winner === item.teams[0].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_dismantle.png"
                                            v-if="key.win_type === 'bomb_defused' && key.winner === item.teams[0].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_timeup.png"
                                            v-if="key.win_type === 'target_saved' && key.winner === item.teams[0].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png"
                                            v-if="key.win_type === 'target_bombed' && key.winner === item.teams[0].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_killAll.png"
                                            v-if="key.win_type === 'terrorists_win' && key.winner === item.teams[0].team_id">
                                        </div>
                                    </div>
                                </td>
                                <td class="list">
                                    <div class="flex flex_start flex_only_center" v-if="item.rounds_detail.length>0">
                                        <div class="item"
                                            v-for="key in item.rounds_detail.slice(15,30)"
                                            :key="key.round_ordinal">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png"
                                            v-if="key.win_type === 'terrorists_win' && key.winner === item.teams[1].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_dismantle.png"
                                            v-if="key.win_type === 'target_bombed' && key.winner === item.teams[1].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_timeup.png"
                                            v-if="key.win_type === 'target_saved' && key.winner === item.teams[0].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png"
                                            v-if="key.win_type === 'bomb_defused' && key.winner === item.teams[1].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_killAll.png"
                                            v-if="key.win_type === 'cts_win' && key.winner === item.teams[1].team_id">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="flex flex_only_center" v-if="item.teams[1].team_snapshot">
                                        <img :src="item.teams[1].team_snapshot.image" class="team-img">
                                        <p class="team-name beyond-ellipsis" :title="item.teams[1].team_snapshot.name">
                                            {{item.teams[1].team_snapshot.name}}
                                        </p>
                                        <img v-if="item.teams[1].team_id === item.winner.team_id"
                                            src="../../../../assets/imgs/detail/win.png" class="team-win">
                                    </div>
                                </td>
                                <td class="list">
                                    <div class="flex flex_start flex_only_center">
                                        <div class="item"
                                            v-for="key in item.rounds_detail.slice(0,15)"
                                            :key="key.round_ordinal">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png"
                                            v-if="key.win_type === 'cts_win' && key.winner === item.teams[1].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_dismantle.png"
                                            v-if="key.win_type === 'bomb_defused' && key.winner === item.teams[1].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_timeup.png"
                                            v-if="key.win_type === 'target_saved' && key.winner === item.teams[1].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png"
                                            v-if="key.win_type === 'target_bombed' && key.winner === item.teams[1].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_killAll.png"
                                            v-if="key.win_type === 'terrorists_win' && key.winner === item.teams[1].team_id">
                                        </div>
                                    </div>
                                </td>
                                <td class="list">
                                    <div class="flex flex_start flex_only_center">
                                        <div class="item"
                                            v-for="key in item.rounds_detail.slice(15,30)"
                                            :key="key.round_ordinal">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png"
                                            v-if="key.win_type === 'terrorists_win' && key.winner === item.teams[0].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_dismantle.png"
                                            v-if="key.win_type === 'target_bombed' && key.winner === item.teams[0].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_timeup.png"
                                            v-if="key.win_type === 'target_saved' && key.winner === item.teams[1].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png"
                                            v-if="key.win_type === 'bomb_defused' && key.winner === item.teams[0].team_id">
                                            <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_killAll.png"
                                            v-if="key.win_type === 'cts_win' && key.winner === item.teams[0].team_id">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <div class="flex flex_start" v-if="item.rounds_detail.length>0">
                                        <kill-bar
                                            :initColor="'#cfcfcf'"
                                            v-for="key in item.rounds_detail.slice(0,15)"
                                            :key="key.round_ordinal"
                                            :isReverse="false"
                                            :survivedNum="item.teams[1].team_id === key.side[1].team_id?
                                                          key.side[1].survived_players : key.side[0].survived_players"
                                            :headshotNum="item.teams[1].team_id === key.side[1].team_id?
                                                          key.side[1].headshot_kills : key.side[0].headshot_kills"
                                            :backColor="item.teams[1].team_id === key.side[1].team_id ? '#F6B600':'#008CD4'"
                                        ></kill-bar>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex flex_start" v-if="item.rounds_detail.length>0">
                                        <kill-bar
                                            :initColor="'#cfcfcf'"
                                            v-for="key in item.rounds_detail.slice(15,30)"
                                            :key="key.round_ordinal"
                                            :isReverse="false"
                                            :survivedNum="item.teams[0].team_id === key.side[0].team_id?
                                                          key.side[0].survived_players : key.side[1].survived_players"
                                            :headshotNum="item.teams[0].team_id === key.side[0].team_id?
                                                          key.side[0].headshot_kills : key.side[1].headshot_kills"
                                            :backColor="item.teams[1].team_id === key.side[1].team_id ? '#F6B600':'#008CD4'"
                                        ></kill-bar>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="info flex flex_end">
                <div class="flex flex_center">
                    <div>
                        <p class="bar blue"></p>
                        <p class="bar yellow"></p>
                    </div>
                    <p class="text">存活</p>
                </div>
                <div class="flex flex_center">
                    <p class="bar"></p>
                    <p class="text">阵亡</p>
                </div>
                <div class="flex flex_center">
                    <p class="bar black"></p>
                    <p class="text black">首个阵亡</p>
                </div>
                <div class="flex flex_center">
                    <p class="bar red"></p>
                    <p class="text red">被爆头</p>
                </div>
                <div class="hide">隐藏阵亡详情</div>
            </div>
        </div>
    </div>
</template>

<script>
    import killArms from '@/components/detail/content/table/killArms'  // 对局击杀
    import killSign from '@/components/detail/content/table/killSign'  // 对局击杀
    import killBar from '@/components/detail/content/table/killBar'    // 击杀条状
    export default {
        props: {
            battleData: {    // battle 对局数组
                type: Array,
                default: () => []
            },
            mapData: {       // 地图数据
                type: Array,
                default: () => []
            },
            targetMatchId: {    // 当前tab battle id
                type: Number,
                default: 0
            },
            teamData: {     // 队伍数据
                type: Array,
                default: () => []
            }
        },
        data() {
            return {

            }
        },
        created() {
            this.sortTeam()
        },
        methods:{
            sortTeam() {
                // 无论什么情况，将手动排序 第一阵营为ct， 第二阵营为terrorist
                for(let item of this.battleData) {
                    item.teams.forEach(e => {
                        this.teamData.forEach(i => {
                            if(e.team_id === i.team_id) {
                                e.team_snapshot = i.team_snapshot
                            }
                        })
                    })
                    if(item.teams[0].starting_side !== 'ct') {
                        item.teams.reverse()
                    }
                    item.rounds_detail.forEach(k => {
                        if(k.side[0].side !== 'ct') {
                            k.side.reverse()
                        }
                    })
                }
            }
        },
        watch: {
            battleData() {
                this.sortTeam()
            }
        },
        components: {
            killArms,
            killSign,
            killBar
        }
    }
</script>

<style lang="less" scoped>
    .play-csgo {
        .map {
            width:960px;
            height:90px;
            background-color: #fff;
            .center {
                p {
                    width: 24px;
                    font-size: 18px;
                    font-weight: 600;
                    text-align: center;
                    &.left {
                        margin-left: 10px;
                    }
                    &.right {
                        margin-right: 10px;
                    }
                    &.green {
                        color: #09A709;
                    }
                    &.red {
                        color: #E64D11;
                    }
                }
                img {
                    width: 108px;
                    height: 70px;
                    margin: 0 30px;
                    border-radius: 4px;
                }
            }
        }
        table {
            width: 960px;
            margin-top: 6px;
            background-color: #fff;
            border-collapse: collapse;
            tr {
                td {
                    padding: 5px 10px;
                    border: 1px solid #f1f1f1;
                    &:nth-child(1) {
                        width: 20%;
                    }
                    &:nth-child(2) {
                        width: 40%;
                    }
                    &:nth-child(3) {
                        width: 40%;
                    }
                }
            }
            .team-img {
                width: 21px;
                height: 24px;
            }
            .team-name {
                width: 90px;
                padding: 0 8px;
                font-size: 16px;
                font-weight: 500;
                color: #0F0F0F;
                cursor: pointer;
            }
            .team-win {
                width: 42px;
                height: 23px;
            }
            .list {
                .item {
                    width: 20px;
                    height: 20px;
                    margin-left: 4px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .info {
            margin-top: 6px;
            .flex {
                    margin-right: 20px;
                    .bar {
                        width: 16px;
                        height: 3px;
                        margin-right: 4px;
                        background-color: #878787;
                        &.blue {
                            margin-bottom: 5px;
                            background-color: #008CD4;
                        }
                        &.yellow {
                            background-color: #F7B700;
                        }
                        &.black {
                            background-color: #303030;
                        }
                        &.red {
                            background-color: #FF1E34;
                        }
                    }
                    .text {
                        color: #878787;
                        font-size: 12px;
                        font-weight: 600;
                        &.blue {
                            color: #008CD4;
                        }
                        &.yellow {
                            color: #F7B700;
                        }
                        &.black {
                            color: #303030;
                        }
                        &.red {
                            color: #FF1E34;
                        }
                    }
            }
            .hide {
                color: #2F3A5A;
                font-weight: 600;
                padding: 5px 15px;
                background-color: #fff;
                border: 1px solid #CFCFCF;
            }
        }
    }
</style>
