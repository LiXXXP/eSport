<template>
    <div class="detail-logs">
        <div class="flex flex_between">
            <div class="play-header flex flex_start flex_only_center">
                <i class="play-header-bar"></i>
                <span class="play-header-text">经济差/经验差</span>
            </div>
            <div class="play-header flex flex_start flex_only_center"
                 style="width:240px">
                <i class="play-header-bar"></i>
                <span class="play-header-text">数据排行</span>
            </div>
        </div>
        <div class="content flex flex_between">
            <ve-line
                :timeLine="battleDetail.battle_detail.events_timeline"
            ></ve-line>
            <battle-rank
                :factionData="battleDetail.battle_detail.factions"
            ></battle-rank>
        </div>
    </div>
</template>

<script>
    import battleLog from '@/components/detail/content/chart/battleLog'      // 比赛日志
    import veLine from '@/components/detail/content/chart/veLine'            // 折线图
    import battleRank from '@/components/detail/content/chart/battleRank'    // 排行榜

    export default {
        data() {
            return {

            }
        },
        computed: {
            battleDetail() {
                return this.$store.state.battlesData
            }
        },
        watch: {
            battleDetail() {
                return this.$store.state.battlesData
            }
        },
        components: {
            battleLog,
            veLine,
            battleRank
        }
    }
</script>

<style lang="less" scoped>

</style>
