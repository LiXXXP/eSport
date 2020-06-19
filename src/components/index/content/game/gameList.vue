<template>
    <div class="game-list">
        <!-- 标题 -->
        <div v-for="item in gameList"
            :key="item.title">
            <div class="game-title">
                {{item.title}}
            </div>
            <!-- 游戏比分 -->
            <div class="list"
                v-for="(key,index) in item.list"
                :key="key.tournament_id">
                <div class="flex flex_between">
                    <game-table
                        :inningData="key"
                    ></game-table>
                    <game-edit
                        :clickIndex="index"
                        @openDetail="openDetail"
                    ></game-edit>
                </div>
                <!-- 详情 -->
                <game-info
                    :openType="key.game.name"
                    v-show="currentIndex===index"
                    @packDetail="packDetail"
                ></game-info>
            </div>
            <!-- 分页 -->
            <paging-page v-if="item.list.length>5"></paging-page>
        </div>
    </div>
</template>

<script>
    import gameTable from '@/components/index/content/game/gameTable'   // 游戏比分列表
    import gameEdit from '@/components/index/content/game/gameEdit'     // 游戏操作板
    import gameInfo from '@/components/index/content/game/gameInfo'     // 游戏详情
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
               ],
               currentIndex: -1,      // 当前index
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
            // 打开游戏详情
            openDetail(openDetail) {
                this.currentIndex = openDetail
            },
            // 收起游戏详情
            packDetail(packDetail) {
                this.currentIndex = packDetail
            }
       },
       components: {
          gameTable,
          gameEdit,
          gameInfo,
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
