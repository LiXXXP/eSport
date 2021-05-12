<template>
    <div class="play-content">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">队伍对局详情</span>
        </div>
        <div class="content" v-if="matchData.battle_list.length > 0">
            <div v-for="item in matchData.battle_list" :key="item.battle_id">
                <div v-if="item.battle_id === targetMatchId">
                    <play-team
                        :factionsData="item.factions"
                        :scoresData="matchData.scores"
                        :winnerId="item.winner.team_id"
                        :durationData="item.duration"
                    ></play-team>
                    <div class="flex flex_center">
                        <play-hero
                            :sizeData="size"
                            :seatData="false"
                            :teamId="item.factions[0].faction === 'radiant'?item.factions[0].team_id:item.factions[1].team_id"
                            :heroList="item.ban_pick"
                        ></play-hero>
                        <div class="role">
                            <p>Ban</p>
                            <p>Pick</p>
                        </div>
                        <play-hero
                            :sizeData="size"
                            :seatData="true"
                            :teamId="item.factions[1].faction === 'dire'?item.factions[1].team_id:item.factions[0].team_id"
                            :heroList="item.ban_pick"
                        ></play-hero>
                    </div>
                    <play-progress
                        :outputData="item.outputList"
                    ></play-progress>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import playTeam from '@/components/index/content/detail/playTeam'
    import playHero from '@/components/index/content/detail/playHero'
    import playProgress from '@/components/index/content/detail/playProgress'

    export default {
        props: {
            matchData: {
                type: Object,
                default: {}
            },
            targetMatchId: {    // 当前tab battle id
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                size: 'dota',  // 英雄列表头像大小区分
            }
        },
        created() {
            this.battleDetail()
        },
        methods: {
            battleDetail() {
                let detail = this.matchData.battle_list
                for(let item of detail) {
                    item.outputList = [
                        {
                            head: '击杀',
                            type: 'kills',
                            num1: 0,
                            num2: 0,
                            imgs: [
                                {
                                    ingame: 0,
                                    faction: '',
                                    info: '十杀',
                                    type: 'first_to_10_kills',
                                    url: require('../../../../../assets/imgs/detail/kills01.png')
                                },
                                {
                                    ingame: 0,
                                    faction: '',
                                    info: '五杀',
                                    type: 'first_to_5_kills',
                                    url: require('../../../../../assets/imgs/detail/kills02.png')
                                },
                                {
                                    ingame: 0,
                                    faction: '',
                                    info: '一血',
                                    type: 'first_blood',
                                    url: require('../../../../../assets/imgs/detail/kills03.png')
                                }
                            ]
                        },
                        {
                            head: '财产',
                            type: 'net_worth',
                            num1: 0,
                            num2: 0,
                            imgs: []
                        },
                        {
                            head: '防御塔',
                            type: 'tower_kills',
                            num1: 0,
                            num2: 0,
                            imgs: [
                                {
                                    ingame: 0,
                                    faction: '',
                                    info: '首塔',
                                    type: 'first_tower',
                                    url: require('../../../../../assets/imgs/detail/kills04.png')
                                }
                            ]
                        },
                        {
                            head: '近战兵营',
                            type: 'melee_barrack_kills',
                            num1: 0,
                            num2: 0,
                            imgs: [
                                {
                                    ingame: 0,
                                    faction: '',
                                    info: '首兵营',
                                    type: 'first_barracks',
                                    url: require('../../../../../assets/imgs/detail/kills05.png')
                                }
                            ]
                        },
                        {
                            head: '远战兵营',
                            type: 'ranged_barrack_kills',
                            num1: 0,
                            num2: 0,
                            imgs: []
                        },
                        {
                            head: '肉山',
                            type: 'roshan_kills',
                            num1: 0,
                            num2: 0,
                            imgs: [
                                {
                                    ingame: 0,
                                    faction: '',
                                    info: '首肉山',
                                    type: 'first_roshan',
                                    url: require('../../../../../assets/imgs/detail/kills09.png')
                                }
                            ]
                        }
                    ]
                    item.outputList.forEach( e => {
                        let field = e.type
                        if(item.factions[0].faction === 'radiant') {
                            e.num1 = item.factions[0][field]
                            e.num2 = item.factions[1][field]
                        } else {
                            e.num1 = item.factions[1][field]
                            e.num2 = item.factions[0][field]
                        }
                        for(let key of e.imgs) {
                            let type = key.type
                            key.ingame = item.first_events[type] ? parseInt(item.first_events[type].ingame_timestamp) : 0
                            key.faction = item.first_events[type] ? item.first_events[type].faction : ''
                        }
                    })
                }
            }
        },
        watch: {
            targetMatchId() {
                this.battleDetail()
            }
        },
        components: {
            playTeam,
            playHero,
            playProgress
        }
    }
</script>

<style lang="less" scoped>
    .play-content {
        .content {
            width: 960px;
            height: 472px;
            padding: 20px 70px;
            box-sizing: border-box;
            background-color: #fff;
            .role {
                height: 119px;
                margin-top: 9px;
                line-height: 60px;
                p {
                    width: 100px;
                    color: #101010;
                    font-size: 16px;
                    text-align: center;
                }
            }
        }
    }
</style>
