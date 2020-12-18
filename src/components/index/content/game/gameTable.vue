<template>
    <div class="game-table">
        <table>
            <thead @click="gotoDetail(inningData.game_id,inningData.match_id)">
                <th>
                    <div class="flex flex_start flex_only_center">
                        <img
                            :src="inningData.tournament_image"
                            class="event-icon"
                        >
                        <span class="beyond-ellipsis"
                            :title="inningData.tournament_name">
                            {{inningData.tournament_name}}
                        </span>
                    </div>
                </th>
                <th colspan="3">
                    <!-- 比赛类型 Best of=BO，OW Best of=BO，Frist to=FT，Best Ranking=BR -->
                    BO{{inningData.number_of_games}}
                </th>
                <th v-for="icon in tableTitleList" :key="icon.i">
                    <img
                        class="icons"
                        :src="icon.iconUrl"
                        v-if="inningData.game_id === icon.gameLoLId || inningData.game_id === icon.gameDotaId"
                    >
                    <p class="csgomap-name" v-if="inningData.game_id === 1">{{icon.mapName}}</p>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">
                        <div class="flex flex_start">
                            <div class="flex flex_start flex_only_center">
                                <img :src="inningData.game_image" class="game-icon">
                                <div class="game-time">
                                    <p>
                                        {{inningData.scheduled_begin_at.substring(11,16)}}
                                        <br>
                                        {{inningData.scheduled_begin_at.substring(5,10)}}
                                    </p>
                                </div>
                            </div>
                            <div class="teams">
                                <div v-for="item in inningData.scores" :key="item.team_id">
                                    <div class="flex flex_start flex_only_center">
                                        <img :src="item.team_snapshot.image" class="team-icon">
                                        <p class="beyond-ellipsis" :title="item.team_snapshot.full_name">
                                            {{item.team_snapshot.name}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td :class="['game-score',
                        {
                            red: inningData.scores[0].score < inningData.scores[1].score,
                            green: inningData.scores[0].score >= inningData.scores[1].score
                        }]"
                    >
                        <div>{{inningData.scores[0].score || 0}}</div>
                    </td>
                    <td rowspan="2" colspan="1">
                        <div class="game-etc" v-if="inningData.status === 'ongoing'">
                            <p>第{{inningData.battle_list.length || 0}}局</p>
                            <p>{{durationTime(inningData.battle_list[inningData.battle_list.length-1].duration || 0)}}</p>
                        </div>
                        <div class="game-etc" :style="{'color':inningData.status === '已开始'?'#00AB49':''}" v-else>
                            {{inningData.status}}
                        </div>
                    </td>
                    <td :class="['game-rank', {
                        r: inningData.game_id === 2 && inningData.battle_list && inningData.battle_list.length>0 && inningData.battle_list[0].factions[0].faction === 'red',
                        b: inningData.game_id === 2 && inningData.battle_list && inningData.battle_list.length>0 && inningData.battle_list[0].factions[0].faction === 'blue'
                    }]">
                        <p>
                            <span v-if="inningData.game_id === 2 && inningData.battle_list && inningData.battle_list.length>0">
                                {{inningData.battle_list[0].factions[0].faction === 'red'?'R':'B'}}
                            </span>
                        </p>
                    </td>
                    <td v-for="data in tableBodyList.datas" :key="data.td">
                        <span v-if="inningData.battle_list&&inningData.battle_list.length !== 0">
                            {{data.red}}
                        </span>
                    </td>
                    <td v-for="e in tableBodyList.events" :key="e.type">
                        <img :src="e.url" class="sign-icon" v-if="e.faction === 'red'">
                    </td>
                </tr>
                <tr>
                    <td :class="['game-score',
                        {
                            red: inningData.scores[1].score < inningData.scores[0].score,
                            green: inningData.scores[1].score >= inningData.scores[0].score
                        }]"
                    >
                        <div>{{inningData.scores[1].score || 0}}</div>
                    </td>
                    <td>
                        <div v-if="inningData.game_id === 2 && inningData.battle_list && inningData.battle_list.length > 0">
                            <p :class="['game-rank', {
                                r: inningData.battle_list[0].includes('factions') && inningData.battle_list[0].factions[1].faction === 'red',
                                b: inningData.battle_list[0].includes('factions') && inningData.battle_list[0].factions[1].faction === 'blue'
                            }]">
                                <span>
                                    {{inningData.battle_list[0].includes('factions') && inningData.battle_list[0].factions[1].faction === 'blue'?'B':'R'}}
                                </span>
                            </p>
                        </div>
                    </td>
                    <td v-for="data in tableBodyList.datas" :key="data.td">
                        <span v-if="inningData.battle_list&&inningData.battle_list.length !== 0">
                            {{data.blue}}
                        </span>
                    </td>
                    <td v-for="e in tableBodyList.events" :key="e.type">
                        <img :src="e.url" class="sign-icon" v-if="e.faction === 'blue'">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { formatDate, formatSeconds } from '@/scripts/utils'
    export default {
        props: {
            inningData: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                tableTitleList: [    // 比赛列表标题内容
                    {
                        i: 0,
                        iconUrl: require('../../../../assets/imgs/index/lol/lol01.png'),
                        gameLoLId: 2,
                        gameDotaId: 3
                    },
                    {
                        i: 1,
                        iconUrl: require('../../../../assets/imgs/index/lol/lol02.png'),
                        gameLoLId: 2,
                        gameDotaId: 3
                    },
                    {
                        i: 2,
                        iconUrl: require('../../../../assets/imgs/index/lol/lol03.png'),
                        gameLoLId: 2,
                        gameDotaId: 3
                    },
                    {
                        i: 3,
                        iconUrl: require('../../../../assets/imgs/index/lol/lol04.png'),
                        gameLoLId: 2,
                        gameDotaId: 3
                    },
                    {
                        i: 4,
                        iconUrl: require('../../../../assets/imgs/index/lol/lol05.png'),
                        gameLoLId: 2,
                        gameDotaId: 0
                    },
                    {
                        i: 5,
                        iconUrl: require('../../../../assets/imgs/index/lol/lol06.png'),
                        gameLoLId: 2,
                        gameDotaId: 0
                    },
                    {
                        i: 6,
                        iconUrl: null,
                        gameLoLId: 0,
                        gameDotaId: 0
                    },
                    {
                        i: 7,
                        iconUrl: null,
                        gameLoLId: 0,
                        gameDotaId: 0
                    },
                    {
                        i: 8,
                        iconUrl: null,
                        gameLoLId: 0,
                        gameDotaId: 0
                    },
                    {
                        i: 9,
                        iconUrl: null,
                        gameLoLId: 0,
                        gameDotaId: 0
                    },
                    {
                        i: 10,
                        iconUrl: null,
                        gameLoLId: 0,
                        gameDotaId: 0
                    },
                    {
                        i: 11,
                        iconUrl: null,
                        gameLoLId: 0,
                        gameDotaId: 0
                    },
                    {
                        i: 12,
                        iconUrl: null,
                        gameLoLId: 0,
                        gameDotaId: 0
                    },
                    {
                        i: 13,
                        iconUrl: null,
                        gameLoLId: 0,
                        gameDotaId: 0
                    }
                ],
                tableBodyList: {     // 比赛列表数据内容
                    datas: [
                        {
                            td: 0,
                            type: 'kills'
                        },
                        {
                            td: 1,
                            type: 'gold'
                        },
                        {
                            td: 2,
                            type: 'turret_kills'
                        },
                        {
                            td: 3,
                            type: 'inhibitor_kills'
                        },
                        {
                            td: 4,
                            type: 'dragon_kills'
                        },
                        {
                            td: 5,
                            type: 'baron_nashor_kills'
                        }
                    ],
                    events: [
                        {
                            url: require('../../../../assets/imgs/detail/kills03.png'),
                            type: 'first_blood',
                            faction: ''
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills02.png'),
                            type: 'first_to_5_kills',
                            faction: ''
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills01.png'),
                            type: 'first_to_10_kills',
                            faction: ''
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills04.png'),
                            type: 'first_turret',
                            faction: ''
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills05.png'),
                            type: 'first_inhibitor',
                            faction: ''
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills06.png'),
                            type: 'first_rift_herald',
                            faction: ''
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills07.png'),
                            type: 'first_dragon',
                            faction: ''
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills08.png'),
                            type: 'first_baron_nashor',
                            faction: ''
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills08.png'),
                            type: 'first_elder_dragon',
                            faction: ''
                        }
                    ]
                },

            }
        },
        created() {
            this.getScores()
        },
        methods: {
            getScores() {
                if(this.inningData.game_id === 1 && this.inningData.battle_list) {
                    for(let i in this.inningData.battle_list) {
                        this.tableTitleList[i].mapName = this.inningData.battle_list[i].map_name
                        this.tableBodyList.datas[i].red = this.inningData.battle_list[i].battle_scores[0].score
                        this.tableBodyList.datas[i].blue = this.inningData.battle_list[i].battle_scores[1].score
                    }
                }
                if(this.inningData.game_id === 2 && this.inningData.battle_list) {
                    for(let item of this.tableBodyList.datas) {
                        let field = item.type
                        item.red = this.inningData.battle_list[0].factions[0][field]
                        item.blue = this.inningData.battle_list[0].factions[1][field]
                    }
                    for(let event of this.tableBodyList.events) {
                        let field = event.type
                        event.faction = this.inningData.battle_list[0].first_events[field].faction
                    }
                }
            },
            gotoDetail(gameId,matchId) {
                this.$router.push({
                    path: '/detail',
                    query: {
                        gameId: gameId,
                        matchId: matchId
                    }
                })
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

<style lang="less" scoped>
    @r: #DF2017;
    @b: #1254CC;
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
        .csgomap-name {
            font-size: 12px;
            color: #878787;
            text-align: center;
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
            font-size: 14px;
            color: #878787;
            font-weight: 600;
            p {
                color: #00AB49;
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
            font-size: 14px;
            font-weight: bold;
            padding-left: 4px;
            &.red {
                color: #F22509;
            }
            &.green {
                color: #00AB49;
            }
        }
        .game-rank {
            p {
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
                p {
                    background-color: @r;
                }
            }
            &.b {
                p {
                    background-color: @b;
                }
            }
        }
        .sign-icon {
            width: 20px;
            height: 20px;
            display: block;
        }
        .beyond-ellipsis {
            width: 160px;
            display: inline-block;
        }
    }
</style>
