<template>
    <div class="play-detail">
        <!-- 阵容分析 -->
        <detail-battle></detail-battle>
        <!-- 对局详情 -->
        <play-content></play-content>
        <!-- 比赛日志 -->
        <detail-logs></detail-logs>
        <!-- 经济差/经验差 -->
        <detail-finance></detail-finance>
        <!-- 选手对局详情 -->
        <detail-player></detail-player>
        <!-- 出装/技能/天赋 -->
        <detail-art></detail-art>
    </div>
</template>

<script>
    import detailBattle from '@/components/detail/content/detail/detailBattle'   // 阵容分析
    import playContent from '@/components/index/content/detail/lol/playContent'  // 对局详情
    import detailLogs from '@/components/detail/content/detail/detailLogs'       // 比赛日志
    import detailFinance from '@/components/detail/content/detail/detailFinance' // 经济差
    import detailPlayer from '@/components/detail/content/detail/detailPlayer'   // 对局详情
    import detailArt from '@/components/detail/content/detail/detailArt'         // 出装技能
    export default {
        data() {
            return {

            }
        },
        components: {
            detailBattle,
            playContent,
            detailLogs,
            detailFinance,
            detailPlayer,
            detailArt
        }
    }
</script>

<style lang="less" scoped>

</style>
