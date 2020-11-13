<template>
    <div class="play-csgo">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">对局详情</span>
        </div>
        <div v-for="(item,index) in battleData" :key="item.duration">
            <div v-if="index === targetIndex">
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
                            <div v-if="index === targetIndex">
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
                                <div class="flex flex_start">
                                    <kill-bar
                                        v-for="obj in item.rounds_detail.slice(0,15)"
                                        :key="obj.round_ordinal"
                                        :killsData="obj.side[0]"
                                        :backColor="'#008CD4'"
                                        :isReverse="true"
                                    ></kill-bar>
                                </div>
                            </td>
                            <td>
                                <div class="flex flex_start">
                                    <kill-bar
                                        v-for="obj in item.rounds_detail.slice(15,30)"
                                        :key="obj.round_ordinal"
                                        :killsData="obj.side[1]"
                                        :backColor="'#F6B600'"
                                        :isReverse="true"
                                    ></kill-bar>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex flex_only_center">
                                    <!-- <img :src="battleDetail.teams[0].team_snapshot.image" class="team-img">
                                    <p class="team-name"
                                        :title="battleDetail.teams[0].team_snapshot.full_name">
                                        {{battleDetail.teams[0].team_snapshot.name}}
                                    </p>
                                    <img v-if="battleDetail.teams[0].team_id === battleDetail.winner.team_id"
                                        src="../../../../assets/imgs/detail/win.png"
                                        class="team-win"
                                    > -->
                                </div>
                            </td>
                            <td class="list">
                                <div class="flex flex_start flex_only_center">
                                    <!-- <div class="item"
                                        v-for="item in battleDetail.battle_detail.rounds_detail.slice(0,15)"
                                        :key="item.round_ordinal"
                                    >
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png"
                                            v-if="item.win_type === 'cts_win'">
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_dismantle.png"
                                            v-if="item.win_type === 'bomb_defused'">
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_timeup.png"
                                            v-if="item.win_type === 'target_saved'">
                                    </div> -->
                                </div>
                            </td>
                            <td class="list">
                                <div class="flex flex_start flex_only_center">
                                    <!-- <div class="item"
                                        v-for="item in battleDetail.battle_detail.rounds_detail.slice(15,30)"
                                        :key="item.round_ordinal"
                                    >
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_killAll.png"
                                            v-if="item.win_type === 'terrorists_win'">
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png"
                                            v-if="item.win_type === 'target_bombed'">
                                    </div> -->
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex flex_only_center">
                                    <!-- <img :src="battleDetail.teams[1].team_snapshot.image" class="team-img">
                                    <p class="team-name"
                                        :title="battleDetail.teams[1].team_snapshot.full_name">
                                        {{battleDetail.teams[1].team_snapshot.name}}
                                    </p>
                                    <img v-if="battleDetail.teams[1].team_id === battleDetail.winner.team_id"
                                        src="../../../../assets/imgs/detail/win.png"
                                        class="team-win"
                                    > -->
                                </div>
                            </td>
                            <td class="list">
                                <div class="flex flex_start flex_only_center">
                                    <!-- <div class="item"
                                        v-for="item in battleDetail.battle_detail.rounds_detail.slice(0,15)"
                                        :key="item.round_ordinal"
                                    >
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_killAll.png"
                                            v-if="item.win_type === 'terrorists_win'">
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png"
                                            v-if="item.win_type === 'target_bombed'">
                                    </div> -->
                                </div>
                            </td>
                            <td class="list">
                                <div class="flex flex_start flex_only_center">
                                    <!-- <div class="item"
                                        v-for="item in battleDetail.battle_detail.rounds_detail.slice(15,30)"
                                        :key="item.round_ordinal"
                                    >
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png"
                                            v-if="item.win_type === 'cts_win'">
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_dismantle.png"
                                            v-if="item.win_type === 'bomb_defused'">
                                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_timeup.png"
                                            v-if="item.win_type === 'target_saved'">
                                    </div> -->
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div class="flex flex_start">
                                    <kill-bar
                                        v-for="obj in item.rounds_detail.slice(0,15)"
                                        :key="obj.round_ordinal"
                                        :killsData="obj.side[1]"
                                        :backColor="'#F6B600'"
                                        :isReverse="false"
                                    ></kill-bar>
                                </div>
                            </td>
                            <td>
                                <div class="flex flex_start">
                                    <kill-bar
                                        v-for="obj in item.rounds_detail.slice(15,30)"
                                        :key="obj.round_ordinal"
                                        :killsData="obj.side[0]"
                                        :backColor="'#008CD4'"
                                        :isReverse="false"
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
</template>

<script>
    import killArms from '@/components/detail/content/table/killArms'  // 对局击杀
    import killSign from '@/components/detail/content/table/killSign'  // 对局击杀
    import killBar from '@/components/detail/content/table/killBar'    // 击杀条状
    export default {
        props: {
            battleData: {
                type: Array,
                default: []
            },
            mapData: {
                type: Array,
                default: []
            },
            targetIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {

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
