<template>
    <div class="game-list">
        <!-- 标题 -->
        <div v-for="(item,index) in gameList" :key="item.title">
            <div class="game-title flex flex_between" v-if="item.list.length!==0">
                <p>{{item.title}}</p>
                <p>更新倒计时：<span>05</span> 秒</p>
            </div>
            <!-- 游戏比分 -->
            <div class="list" v-for="key in item.list" :key="key.match_id">
                <div class="flex flex_between">
                    <game-table
                        :inningData="key"
                    ></game-table>
                    <game-edit
                        :matchId="key.match_id"
                        :gameId="key.game_id"
                        :supported="key.is_supported"
                        @openDetailId="openDetailId"
                    ></game-edit>
                </div>
                <!-- 详情 -->
                <game-info
                    :openType="key.game_id"
                    v-show="currentId === key.match_id"
                    @packDetailId="packDetailId"
                ></game-info>
            </div>
            <!-- 分页 -->
            <paging-page
                :indexData="index"
                v-if="item.page.count>10"
                :countData="item.page.count"
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
        getPast,
        getBattles,
        getMatches
    } from '@/scripts/request'
    export default {
        props: {
            gameList: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
              currentId: -1, // 当前打开详情的赛事id：tournament_id

           }
        },
        created() {
            this.getGoingList()
            this.getComningList()
            this.getPastList()
        },
        methods: {
            // 进行中的比赛
            getGoingList() {
                let _this = this
                let params = {
                    page: _this.gameList[0].page.current,
                    limit: 10
                }
                getOnGoing(params).then(res => {
                    if (res.code === 200) {
                        _this.gameList[0].list = res.data.match_info
                        _this.gameList[0].page.count = res.data.count
                    }
                })
            },
            // 未开始的比赛
            getComningList() {
                let _this = this
                let params = {
                    page: _this.gameList[1].page.current,
                    limit: 10
                }
                getUpComning(params).then(res => {
                    if (res.code === 200) {
                        _this.gameList[1].list = res.data.match_info
                        _this.gameList[1].page.count = res.data.count
                    }
                })
            },
            // 已结束的比赛
            getPastList() {
                let _this = this
                let params = {
                    page: _this.gameList[2].page.current,
                    limit: 10
                }
                getPast(params).then(res => {
                    if (res.code === 200) {
                        _this.gameList[2].list = res.data.match_info
                        _this.gameList[2].page.count = res.data.count
                    }
                })
            },
            // 打开游戏详情
            openDetailId(Mid,Gid) {
                this.currentId = Mid
                if(Mid && Gid) {
                    let params = {
                        game_id: Gid,
                        match_id: Mid
                    }
                    let _this = this
                    getMatches(params).then(res => {
                        if (res.code === 200) {
                            _this.$store.dispatch('getMatches',res.data)
                            _this.$store.commit('getMatchId', Mid)
                        }
                    })
                }
            },
            // 收起游戏详情
            packDetailId(id) {
                this.currentId = id
            },
            // 获取分页页数
            currentPage(val,index) {
                this.gameList[index].page.current = val
                if (this.gameList.length === 1) {
                    this.getPastList()
                } else {
                    if(index === 0) {
                        this.getGoingList()
                    }
                    else if(index === 1) {
                        this.getComningList()
                    }
                    else {
                        this.getPastList()
                    }
                }
            },
        },
        watch: {
            gameList(val,old) {
                if(val.length === 1) {
                    let _this = this
                    let params = {
                        page: _this.gameList[0].page.current,
                        limit: 10
                    }
                    getPast(params).then(res => {
                        if (res.code === 200) {
                            _this.gameList[0].list = res.data.match_info
                            _this.gameList[0].page.count = res.data.count
                        }
                    })
                } else {
                    this.getGoingList()
                    this.getComningList()
                    this.getPastList()
                }
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
            span {
                color: #FF7800;
            }
        }
        .list {
            margin-bottom: 8px;
            background-color: #fff;
        }
    }
</style>
