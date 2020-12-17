<template>
    <div class="play-detail">
        <!-- 比赛日志 -->
        <detail-logs
            v-bind="$attrs"
            :battleData="matchDetail.battle_list"
            :scoresData="matchDetail.scores"
        ></detail-logs>
        <!-- 经济差/经验差 -->
        <detail-finance
            v-bind="$attrs"
            :battleData="matchDetail.battle_list"
        ></detail-finance>
        <!-- 选手对局详情 -->
        <detail-player
            v-bind="$attrs"
            :battleData="matchDetail.battle_list"
            :scoresData="matchDetail.scores"
        ></detail-player>
        <!-- 出装/技能/天赋 -->
        <detail-art
            v-bind="$attrs"
            :battleData="matchDetail.battle_list"
            :scoresData="matchDetail.scores"
        ></detail-art>
    </div>
</template>

<script>
    import detailLogs from '@/components/detail/content/detail/detailLogs'       // 比赛日志
    import detailFinance from '@/components/detail/content/detail/detailFinance' // 经济差
    import detailPlayer from '@/components/detail/content/detail/detailPlayer'   // 对局详情
    import detailArt from '@/components/detail/content/detail/detailArt'         // 出装技能
    export default {
        data() {
            return {

            }
        },
        inheritAttrs: false,
        computed: {
            matchDetail() {
                return this.$store.state.matchsData
            }
        },
        watch: {
            matchDetail() {
                return this.$store.state.matchsData
            }
        },
        components: {
            detailLogs,
            detailFinance,
            detailPlayer,
            detailArt
        }
    }
</script>

<style lang="less" scoped>

</style>
