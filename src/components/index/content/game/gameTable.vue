<template>
    <div class="game-table">
        <table>
            <thead @click="gotoDetail(inningData.game_id,inningData.match_id,inningData.is_supported)">
                <th :title="inningData.tournament_name">
                    <div class="flex flex_start flex_only_center">
                        <img :src="inningData.tournament_image"
                            class="event-icon"
                        >
                        <span class="beyond-ellipsis">
                            {{inningData.tournament_name}}
                        </span>
                    </div>
                </th>
                <th colspan="3" :title="inningData.match_type_full + ' ' + inningData.number_of_games">
                    <!-- 比赛类型 Best of=BO，OW Best of=BO，Frist to=FT，Best Ranking=BR -->
                    {{inningData.match_type}}{{inningData.number_of_games}}
                </th>
                <th v-for="icon in tableTitleList" :key="icon.i">
                    <img
                        class="icons"
                        :src="icon.iconUrl"
                        :title="icon.tip"
                        v-if="(inningData.game_id === icon.gameLoLId || inningData.game_id === icon.gameDotaId) && isDatas"
                    >
                    <p class="csgomap-name" v-if="inningData.game_id === 1" :title="icon.mapNameFull">
                        {{icon.mapName}}
                    </p>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">
                        <div class="flex flex_start">
                            <div class="flex flex_start flex_only_center">
                                <img :src="inningData.game_image" class="game-icon" :title="inningData.name_cn">
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
                                    <div class="flex flex_start flex_only_center" :title="item.team_snapshot.name">
                                        <img :src="item.team_snapshot.image" class="team-icon">
                                        <p class="beyond-ellipsis">
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
                        </div>
                        <div class="game-etc"
                            :style="{'color':inningData.status === '已开始'?'#00AB49':''}"
                            v-else-if="inningData.status!== '未开始' && inningData.status!== '已推迟'">
                            {{inningData.status}}
                        </div>
                    </td>
                    <td>
                        <div class="game-rank">
                            <div v-if="inningData.game_id === 1"></div>
                            <div v-if="inningData.game_id === 2">
                                <div v-if="inningData.battle_list && inningData.battle_list.length > 0 && inningData.battle_list[0].factions.length>0">
                                    <p class="b">
                                        <span title="'blue'">B</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td v-for="data in tableBodyList.datas" :key="data.td">
                        <span v-if="inningData.battle_list&&inningData.battle_list.length !== 0">
                            {{data.blue}}
                        </span>
                    </td>
                    <td v-for="e in tableBodyList.events" :key="e.type">
                        <img :src="e.url" class="sign-icon" v-if="e.faction === 'blue'" :title="durationTime(e.ingame)+' '+ e.tip">
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
                        <div class="game-rank">
                            <div v-if="inningData.game_id === 1"></div>
                            <div v-if="inningData.game_id === 2">
                                <div v-if="inningData.battle_list && inningData.battle_list.length > 0 && inningData.battle_list[0].factions.length>0">
                                    <p class="r">
                                        <span title="'red'">R</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td v-for="data in tableBodyList.datas" :key="data.td">
                        <span v-if="inningData.battle_list&&inningData.battle_list.length !== 0">
                            {{data.red}}
                        </span>
                    </td>
                    <td v-for="e in tableBodyList.events" :key="e.type">
                        <img :src="e.url" class="sign-icon" v-if="e.faction === 'red'" :title="durationTime(e.ingame)+' '+ e.tip">
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
                        tip: '击杀',
                        iconUrl: require('../../../../assets/imgs/index/lol/lol01.png'),
                        gameLoLId: 2,
                        gameDotaId: 3
                    },
                    {
                        i: 1,
                        tip: '经济',
                        iconUrl: require('../../../../assets/imgs/index/lol/lol02.png'),
                        gameLoLId: 2,
                        gameDotaId: 3
                    },
                    {
                        i: 2,
                        tip: '摧毁防御塔',
                        iconUrl: require('../../../../assets/imgs/index/lol/lol03.png'),
                        gameLoLId: 2,
                        gameDotaId: 3
                    },
                    {
                        i: 3,
                        tip: '摧毁水晶',
                        iconUrl: require('../../../../assets/imgs/index/lol/lol04.png'),
                        gameLoLId: 2,
                        gameDotaId: 3
                    },
                    {
                        i: 4,
                        tip: '击杀元素巨龙',
                        iconUrl: require('../../../../assets/imgs/index/lol/lol05.png'),
                        gameLoLId: 2,
                        gameDotaId: 0
                    },
                    {
                        i: 5,
                        tip: '击杀纳什男爵',
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
                            faction: '',
                            ingame: '',
                            tip: '一血'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills02.png'),
                            type: 'first_to_5_kills',
                            faction: '',
                            ingame: '',
                            tip: '率先获得五个击杀'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills01.png'),
                            type: 'first_to_10_kills',
                            faction: '',
                            ingame: '',
                            tip: '率先获得十个击杀'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills04.png'),
                            type: 'first_turret',
                            faction: '',
                            ingame: '',
                            tip: '首塔'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills05.png'),
                            type: 'first_inhibitor',
                            faction: '',
                            ingame: '',
                            tip: '首水晶'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills06.png'),
                            type: 'first_rift_herald',
                            faction: '',
                            ingame: '',
                            tip: '首峡谷先锋'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills07.png'),
                            type: 'first_dragon',
                            faction: '',
                            ingame: '',
                            tip: '首元素巨龙'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills08.png'),
                            type: 'first_baron_nashor',
                            faction: '',
                            ingame: '',
                            tip: '首纳什男爵'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/kills08.png'),
                            type: 'first_elder_dragon',
                            faction: '',
                            ingame: '',
                            tip: '首远古巨龙'
                        }
                    ]
                },
                isDatas: false       // 是否显示battle_scores
            }
        },
        created() {
            this.getScores()
        },
        methods: {
            getScores() {
                if(this.inningData.game_id === 1 && this.inningData.battle_list) {

                    for(let i in this.inningData.battle_list) {
                        this.tableTitleList[i].mapName = this.inningData.battle_list[i].map_name || ''
                        this.tableTitleList[i].mapNameFull = this.inningData.battle_list[i].map_name_full || ''
                        if(this.inningData.battle_list[i].battle_scores.length>0) {
                            this.tableBodyList.datas[i].red = this.inningData.battle_list[i].battle_scores[0].score
                            this.tableBodyList.datas[i].blue = this.inningData.battle_list[i].battle_scores[1].score
                        }
                    }
                }
                if(this.inningData.game_id === 2 && this.inningData.battle_list && this.inningData.battle_list.length>0) {
                    if(this.inningData.battle_list[0].factions !== 'blue') {
                        this.inningData.battle_list[0].factions.reverse()
                        if(this.inningData.scores[0].team_id !== this.inningData.battle_list[0].factions[0].team_id) {
                            this.inningData.scores.reverse()
                        }
                        if(this.inningData.battle_list[0].factions.length > 0) {
                            for(let item of this.tableBodyList.datas) {
                                let field = item.type
                                item.red = this.inningData.battle_list[0].factions[0][field] || 0
                                item.blue = this.inningData.battle_list[0].factions[1][field] || 0
                                if(item.red !== '') {
                                    this.isDatas = true
                                } else {
                                    this.isDatas = false
                                }
                            }
                        }
                    }
                    for(let event of this.tableBodyList.events) {
                        let field = event.type
                        if(this.inningData.battle_list[0].first_events[field]) {
                            event.faction = this.inningData.battle_list[0].first_events[field].faction || ''
                            event.ingame = this.inningData.battle_list[0].first_events[field].ingame_timestamp
                        }
                    }
                }
            },
            gotoDetail(gameId,matchId,isSupported) {
                this.$router.push({
                    path: '/detail',
                    query: {
                        gameId: parseInt(gameId),
                        matchId: parseInt(matchId),
                        isSupported: isSupported
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
            text-align: left;
            font-size: 14px;
            font-weight: bold;
            padding-left: 10px;
            &.red {
                color: #F22509;
            }
            &.green {
                color: #00AB49;
            }
        }
        .game-rank {
            width: 16px;
            height: 16px;
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            p {
                color: #fff;
                border-radius: 100%;
                &.r {
                    background-color: @r;
                }
                &.b {
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
