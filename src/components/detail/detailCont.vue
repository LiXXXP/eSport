<template>
    <div class="detail-cont">
        <play-score></play-score>
        <play-info></play-info>
        <game-info
            :openType="'lol'"
        ></game-info>
        <play-data></play-data>
    </div>
</template>

<script>
    import playScore from '@/components/detail/content/playScore'    // 对局分数
    import playInfo from '@/components/detail/content/playInfo'      // 比赛信息
    import gameInfo from '@/components/index/content/game/gameInfo'  // 游戏详情
    import playData from '@/components/detail/content/playData'      // 数据分析
    export default {
        data() {
            return {
                currentIndex: 0,
            }
        },
        components: {
            playScore,
            playInfo,
            gameInfo,
            playData
        }
    }
</script>

<style lang="less" scoped>

</style>
