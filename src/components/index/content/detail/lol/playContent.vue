<template>
    <div class="play-content">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">队伍对局详情</span>
        </div>
        <div class="content">
            <play-team
                :teamsData="battleDetail"
            ></play-team>
            <div class="flex flex_center">
                <play-hero
                    :sizeData="size"
                    :seatData="false"
                    :heroList="battleDetail.battle_detail.ban_pick"
                ></play-hero>
                <div class="role">
                    <p>Ban</p>
                    <p>Pick</p>
                </div>
                <play-hero
                    :sizeData="size"
                    :seatData="true"
                    :heroList="battleDetail.battle_detail.ban_pick"
                ></play-hero>
            </div>
            <play-progress
                :barColor="colorData"
                :outputData="outputList"
            ></play-progress>
        </div>
    </div>
</template>

<script>
    import playTeam from '@/components/index/content/detail/playTeam'
    import playHero from '@/components/index/content/detail/playHero'
    import playProgress from '@/components/index/content/detail/playProgress'

    export default {
        data() {
            return {
                size: 'lol',  // 英雄列表头像大小区分
                colorData: {
                    left: '#2980D9',
                    right: '#CC5728'
                },
                outputList: [
                    {
                        head: '击杀',
                        type: 'kills',
                        num1: 0,
                        num2: 0,
                        imgs: [
                            {
                                ingame: 0,
                                faction: '',
                                type: 'first_to_10_kills',
                                url: require('../../../../../assets/imgs/detail/kills01.png')
                            },
                            {
                                ingame: 0,
                                faction: '',
                                type: 'first_to_5_kills',
                                url: require('../../../../../assets/imgs/detail/kills02.png')
                            },
                            {
                                ingame: 0,
                                faction: '',
                                type: 'first_blood',
                                url: require('../../../../../assets/imgs/detail/kills03.png')
                            }
                        ]
                    },
                    {
                        head: '经济',
                        type: 'gold',
                        num1: 0,
                        num2: 0,
                        imgs: []
                    },
                    {
                        head: '防御塔',
                        type: 'turret_kills',
                        num1: 0,
                        num2: 0,
                        imgs: [
                            {
                                ingame: 0,
                                faction: '',
                                type: 'first_turret',
                                url: require('../../../../../assets/imgs/detail/kills04.png')
                            }
                        ]
                    },
                    {
                        head: '水晶',
                        type: 'inhibitor_kills',
                        num1: 0,
                        num2: 0,
                        imgs: [
                            {
                                ingame: 0,
                                faction: '',
                                type: 'first_inhibitor',
                                url: require('../../../../../assets/imgs/detail/kills05.png')
                            }
                        ]
                    },
                    {
                        head: '峡谷先锋',
                        type: 'rift_herald_kills',
                        num1: 0,
                        num2: 0,
                        imgs: [
                            {
                                ingame: 0,
                                faction: '',
                                type: 'first_rift_herald',
                                url: require('../../../../../assets/imgs/detail/kills06.png')
                            }
                        ]
                    },
                    {
                        head: '元素巨龙',
                        type: 'dragon_kills',
                        num1: 0,
                        num2: 0,
                        imgs: [
                            {
                                ingame: 0,
                                faction: '',
                                type: 'first_dragon',
                                url: require('../../../../../assets/imgs/detail/kills07.png')
                            }
                        ]
                    },
                    {
                        head: '纳什男爵',
                        type: 'baron_nashor_kills',
                        num1: 0,
                        num2: 0,
                        imgs: [
                            {
                                ingame: 0,
                                faction: '',
                                type: 'first_baron_nashor',
                                url: require('../../../../../assets/imgs/detail/kills08.png')
                            }
                        ]
                    }
                ],
            }
        },
        created() {

        },
        computed: {
            battleDetail() {
                let detail = this.$store.state.battlesData.battle_detail
                for(let item of this.outputList) {
                    let field = item.type
                    item.num1 = detail.factions[0][field]
                    item.num2 = detail.factions[1][field]
                    for(let key of item.imgs) {
                        let type = key.type
                        key.ingame = detail.first_events[type].ingame_timestamp
                        key.faction = detail.first_events[type].faction
                    }
                }
                return this.$store.state.battlesData
            }
        },
        watch: {
            battleDetail() {
                return this.$store.state.battlesData
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
