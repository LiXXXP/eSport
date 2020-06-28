<template>
    <div class="game-table">
        <table>
            <thead>
                <th>
                    <div class="flex flex_start flex_only_center">
                        <img
                            :src="inningData.tournament.image"
                            class="event-icon"
                            v-if="inningData.tournament"
                        >
                        <img
                            :src="inningData.image"
                            class="event-icon"
                            v-else
                        >
                        <span
                            class="beyond-ellipsis"
                            v-if="inningData.tournament"
                        >
                            {{inningData.tournament.name_cn}}
                        </span>
                        <span
                            class="beyond-ellipsis"
                            v-else
                        >
                            {{inningData.name_cn}}
                        </span>
                    </div>
                </th>
                <th colspan="3">
                    <!-- 比赛类型 Best of=BO，OW Best of=BO，Frist to=FT，Best Ranking=BR -->
                    {{inningData.match_type === 'best_of' || 'OW Best of' ? 'BO' :
                      inningData.match_type === 'first_to' ? 'FT' : 'BR'
                    }}{{inningData.number_of_games}}
                </th>
                <th>
                    <img src="../../../../assets/imgs/index/sword.png" class="icons">
                </th>
                <th>
                    <img src="../../../../assets/imgs/index/xp.png" class="icons">
                </th>
                <th>
                    <img src="../../../../assets/imgs/index/tower.png" class="icons">
                </th>
                <th>
                    <img src="../../../../assets/imgs/index/barrack.png" class="icons">
                </th>
                <th>
                    <img src="../../../../assets/imgs/index/icon04.png" class="icons">
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">
                        <div class="flex flex_start">
                            <div class="flex flex_start flex_only_center">
                                <img :src="inningData.game.image" class="game-icon">
                                <div class="game-time">
                                    <p v-if="inningData.begin_at">
                                        {{inningData.begin_at.substring(11,16)}}
                                        <br>
                                        {{inningData.begin_at.substring(5,10)}}
                                    </p>
                                    <p v-else>
                                        {{inningData.scheduled_begin_at.substring(11,16)}}
                                        <br>
                                        {{inningData.scheduled_begin_at.substring(5,10)}}
                                    </p>
                                </div>
                            </div>
                            <div class="teams">
                                <div v-for="(item,index) in inningData.teams"
                                    :key=""
                                >
                                    <div v-if="index<2"
                                        class="flex flex_start flex_only_center"
                                    >
                                        <img
                                            :src="item.team_snapshot.image"
                                            class="team-icon"
                                            v-if="item.team_snapshot"
                                        >
                                        <p
                                            v-if="item.team_snapshot"
                                            class="beyond-ellipsis"
                                            :title="item.team_snapshot.name"
                                        >
                                            {{item.team_snapshot.name}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="game-score">2</td>
                    <td rowspan="2">
                        <div class="game-etc">
                            <p>第五局</p>
                            <p>25:06</p>
                        </div>
                    </td>
                    <td class="game-rank r">
                        <span>R</span>
                    </td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="game-score">2</td>
                    <td class="game-rank d">
                        <span>D</span>
                    </td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                        <i class="sign-icon"></i>
                    </td>
                    <td>
                        <i class="sign-icon"></i>
                    </td>
                    <td>
                        <i class="sign-icon"></i>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import formatDate from '@/scripts/utils'
    export default {
        props: {
            inningData: {
                type: Object,
                defalue: {}
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    @r: #00AB49;
    @d: #DF2017;
    @b: #1254CC;
    @t: #008CD4;
    @ct: #F6B600;
    .game-table {
        width: 880px;
        height: 99px;
        box-sizing: border-box;
        table {
            cursor: pointer;
            thead {
                border-bottom: 1px solid #cfcfcf;
                th {
                    width: 36px;
                    color: #303030;
                    font-weight: 400;
                    text-align: left;
                    &:nth-child(1) {
                        width: 256px;
                    }
                    &:nth-child(2) {
                        width: 120px;
                    }
                }
            }
            tbody {
                tr {
                    td {
                        text-align: center;
                        border-top: 1px solid #cfcfcf;
                    }
                }
            }
            th,tr {
                height: 33px;
            }
        }
        .icons {
            width: 18px;
            height: 18px;
            display: block;
            margin: 7.5px auto;
        }
        .event-icon {
            width: 20px;
            height: 20px;
            display: block;
            margin-left: 22px;
            margin-right: 5px;
        }
        .game-time {
            width: 40px;
            margin-right: 19px;
        }
        .teams {
            & > div {
                &:nth-child(2) {
                    margin-top: 7px;
                }
                p {
                    width: 80px;
                    text-align: left;
                }
            }
        }
        .game-etc {
            p {
                color: #00AB49;
                font-size: 14px;
                font-weight: bold;
                line-height: 20px;
            }
        }
        .game-icon {
            width: 30px;
            height: 30px;
            margin: auto 20px;
        }
        .team-icon {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }
        .game-score {
            border: 0;
            color: #00AB49;
            font-size: 14px;
            font-weight: bold;
            padding-left: 3px;
        }
        .game-rank {
            span {
                color: #fff;
                width: 16px;
                height: 16px;
                display: block;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                text-align: center;
                border-radius: 100%;
            }
            &.r {
                span {
                    background-color: @r;
                }
            }
            &.d {
                span {
                    background-color: @d;
                }
            }
            &.b {
                span {
                    background-color: @b;
                }
            }
            &.t {
                span {
                    background-color: @t;
                }
            }
            &.ct {
                span {
                    background-color: @ct;
                }
            }
        }
        .sign-icon {
            width: 20px;
            height: 20px;
            display: block;
            background: url('../../../../assets/imgs/index/icon07.png') no-repeat 0 0;
            background-size: 100%;
        }
    }
</style>
