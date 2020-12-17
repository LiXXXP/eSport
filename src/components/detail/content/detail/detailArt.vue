<template>
    <div class="detail-art">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">出装/技能/天赋</span>
        </div>
        <div v-if="battleData.length > 0">
            <div v-for="item in battleData" :key="item.battle_id">
                <div v-if="targetMatchId === item.battle_id"
                     class="content flex flex_between">
                    <battle-art
                        :borderColor="true"
                        :factionsData="item.factions[0].faction === 'blue'?item.factions[0]:item.factions[1]"
                    ></battle-art>
                    <battle-art
                        :borderColor="false"
                        :factionsData="item.factions[1].faction === 'red'?item.factions[1]:item.factions[0]"
                    ></battle-art>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import battleArt from '@/components/detail/content/chart/battleArt'      // 比赛日志
    export default {
        props: {
            battleData: {
                type: Array,
                default: () => []
            },
            targetMatchId: {
                type: Number,
                default: 0
            },
            scoresData: {
                type: Array,
                default: () => []
            },
        },
        data() {
            return {

            }
        },
        created() {
            for(let item of this.battleData) {
                item.factions.forEach(e => {
                    this.scoresData.forEach(i => {
                        if(e.team_id === i.team_id) {
                            e.team_snapshot = i.team_snapshot
                        }
                    })
                })
            }
        },
        components: {
            battleArt
        }
    }
</script>

<style lang="less" scoped>
    .detail-art {
        .content {
            width: 960px;
        }
    }
</style>
