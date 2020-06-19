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
                v-for="key in item.list"
                :key="key.match_id">
                <div class="flex flex_between">
                    <game-table
                        :inningData="key"
                    ></game-table>
                    <game-edit
                        :clickId="key.match_id"
                        @openDetailId="openDetailId"
                    ></game-edit>
                </div>
                <!-- 详情 -->
                <game-info
                    :openType="key.game.name"
                    v-show="currentId === key.match_id"
                    @packDetailId="packDetailId"
                ></game-info>
            </div>
            <!-- 分页 -->
            <paging-page
                v-if="item.count>10"
                :countData="item.count"
                @currentPage="currentPage"
            ></paging-page>
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
                       list: [],
                       count: 0
                   },
                   {
                       title: '未开始的比赛',
                       list: [],
                       count: 0
                   },
                   {
                       title: '已结束的比赛',
                       list: [],
                       count: 0
                   }
               ],
               currentId: -1,      // 当前打开详情的赛事id：tournament_id
               page: 1             // 当前页
           }
       },
       mounted() {
            this.getGoingList()
            // this.getComningList()
            // this.getPastList()
       },
       methods: {
            // 进行中的比赛
            getGoingList() {
                let params = {
                    page: this.page,
                    per_page: 10
                }
                let _this = this
                getOnGoing(params).then(res => {
                    if (res.code === 1000) {
                        _this.gameList[0].list = res.data.list
                        _this.gameList[0].count = res.data.count
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
            openDetailId(id) {
                this.currentId = id
            },
            // 收起游戏详情
            packDetailId(id) {
                this.currentId = id
            },
            // 获取分页页数
            currentPage(val) {
                this.page = val
                this.getGoingList()
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
