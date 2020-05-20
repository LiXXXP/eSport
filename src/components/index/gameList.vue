<template>
    <div class="game-list">
        <div class="flex flex_start">
            <game-name></game-name>
            <game-score></game-score>
            <game-number></game-number>
            <game-edit></game-edit>
        </div>
        <game-detail></game-detail>
    </div>
</template>

<script>
    import gameName from '@/components/game/gameName'      // 游戏名称
    import gameScore from '@/components/game/gameScore'    // 游戏评分
    import gameNumber from '@/components/game/gameNumber'  // 游戏对局
    import gameEdit from '@/components/game/gameEdit'      // 游戏操作
    import gameDetail from '@/components/game/gameDetail'  // 游戏详情
    export default {
       data() {
           return {

           }
       },
       components: {
           gameName,
           gameScore,
           gameNumber,
           gameEdit,
           gameDetail
       }
    }
</script>

<style lang="less" scoped>

</style>