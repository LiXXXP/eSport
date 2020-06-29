<template>
    <div class="detail-cont">
        <play-score></play-score>
        <play-info></play-info>
        <game-info
            :openType="'lol'"
        ></game-info>
        <!-- 数据对比 -->
        <data-contrast></data-contrast>
    </div>
</template>

<script>
    import playScore from '@/components/detail/content/playScore'    // 对局分数
    import playInfo from '@/components/detail/content/playInfo'      // 比赛信息
    import gameInfo from '@/components/index/content/game/gameInfo'  // 游戏详情
    import dataContrast from '@/components/detail/content/data/dataContrast'  // 游戏详情
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
            dataContrast
        }
    }
</script>

<style lang="less" scoped>

</style>
