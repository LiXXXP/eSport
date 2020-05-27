<template>
    <div class="game-list">
        <div class="game-title">
            进行中的比赛
        </div>
        <!-- 游戏比分 -->
        <div class="list flex flex_between">
            <game-table></game-table>
            <game-edit></game-edit>
        </div>
    </div>
</template>

<script>
    import gameTable from '@/components/index/content/game/gameTable'   // 游戏比分列表
    import gameEdit from '@/components/index/content/game/gameEdit'     // 游戏操作板
    export default {
       data() {
           return {

           }
       },
       components: {
          gameTable,
          gameEdit
       }
    }
</script>

<style lang="less" scoped>
    .game-list {
        .game-title {
            color: #101010;
            margin: 14px 0 9px;
        }
        .list {
          background-color: #fff;
        }
    }
</style>
