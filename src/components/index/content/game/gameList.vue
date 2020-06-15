<template>
    <div class="game-list">
        <!-- 标题 -->
        <div v-for="item in gameList"
            :key="item.title">
            <div class="game-title">
                {{item.title}}
            </div>
            <!-- 游戏比分 -->
            <div class="list flex flex_between"
                v-for="key in item.list"
                :key="key.tournament_id">
                <game-table></game-table>
                <game-edit></game-edit>
            </div>
            <!-- 分页 -->
            <paging-page v-if="item.list.length>5"></paging-page>
        </div>
    </div>
</template>

<script>
    import gameTable from '@/components/index/content/game/gameTable'   // 游戏比分列表
    import gameEdit from '@/components/index/content/game/gameEdit'     // 游戏操作板
    import pagingPage from '@/components/common/pagingPage'             // 分页
    import {
        getOnGoing,
        getUpComning,
        getPast
    } from '@/scripts/request'
    export default {
       data() {
           return {
               gameList: [
                   {
                       title: '进行中的比赛',
                       list: []
                   },
                   {
                       title: '未开始的比赛',
                       list: []
                   },
                   {
                       title: '已结束的比赛',
                       list: []
                   }
               ]
           }
       },
       mounted() {
            this.getGoingList()
            this.getComningList()
            this.getPastList()
       },
       methods: {
            // 进行中的比赛
            getGoingList() {
                let _this = this
                getOnGoing().then(res => {
                    if (res.code === 1000) {
                        _this.gameList[0].list = res.data.list
                    }
                })
            },
            // 未开始的比赛
            getComningList() {
                let _this = this
                getUpComning().then(res => {
                    if (res.code === 1000) {
                        _this.gameList[1].list = res.data.list
                    }
                })
            },
            // 已结束的比赛
            getPastList() {
                let _this = this
                getPast().then(res => {
                    if (res.code === 1000) {
                        _this.gameList[2].list = res.data.list
                    }
                })
            },
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
