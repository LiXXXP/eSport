<template>
    <div class="game-list">
        <!-- 标题 -->
        <div v-for="item in gameList"
            :key="item.id">
            <div class="game-title">
                {{item.title}}
            </div>
            <!-- 游戏比分 -->
            <div class="list flex flex_between"
                v-for="key in item.list"
                :key="key.id">
                <game-table></game-table>
                <game-edit></game-edit>
            </div>
            <!-- 分页 -->
            <paging-page></paging-page>
        </div>
    </div>
</template>

<script>
    import gameTable from '@/components/index/content/game/gameTable'   // 游戏比分列表
    import gameEdit from '@/components/index/content/game/gameEdit'     // 游戏操作板
    import pagingPage from '@/components/common/pagingPage'             // 分页
    export default {
       data() {
           return {
               gameList: [
                   {
                       id: 0,
                       title: '进行中的比赛',
                       list: [
                            {
                                id: 0,

                            },
                            {
                                id: 1,

                            }
                       ]
                   },
                   {
                       id: 1,
                       title: '未开始的比赛',
                       list: [
                            {
                                id: 0
                            }
                       ]
                   },
                   {
                       id: 2,
                       title: '已结束的比赛',
                       list: [
                            {
                                id: 0
                            }
                       ]
                   }
               ]
           }
       },
       components: {
          gameTable,
          gameEdit,
          pagingPage
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
            margin-bottom: 8px;
            background-color: #fff;
        }
    }
</style>
