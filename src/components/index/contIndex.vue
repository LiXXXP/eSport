<template>
    <div class="index-content">
        <!-- tab切换栏 -->
        <index-tab @getAllMatch="getAllMatch"></index-tab>
        <!-- 游戏列表 -->
        <game-list :gameList="gameListData"></game-list>
    </div>
</template>

<script>
    import indexTab from '@/components/index/content/tab/indexTab'  // tab切换栏
    import gameList from '@/components/index/content/game/gameList' // 游戏列表

    export default {
        name: 'index',
        data() {
            return {
                isAll: true,
                gameListData: [
                    {
                        title: '进行中的比赛',
                        list: [],
                        page: {
                            count: 0,    // 总数
                            current: 1   // 当前页
                        }
                    },
                    {
                        title: '未开始的比赛',
                        list: [],
                        page: {
                            count: 0,    // 总数
                            current: 1   // 当前页
                        }
                    },
                    {
                        title: '已结束的比赛',
                        list: [],
                        page: {
                            count: 0,    // 总数
                            current: 1   // 当前页
                        }
                    }
                ]
            }
        },
        methods: {
            getAllMatch(val) {
                this.isAll = val
            }
        },
        watch: {
            isAll(val,old) {
                if(val === 0) {
                    this.gameListData = [
                        {
                            title: '进行中的比赛',
                            list: [],
                            page: {
                                count: 0,    // 总数
                                current: 1   // 当前页
                            }
                        },
                        {
                            title: '未开始的比赛',
                            list: [],
                            page: {
                                count: 0,    // 总数
                                current: 1   // 当前页
                            }
                        },
                        {
                            title: '已结束的比赛',
                            list: [],
                            page: {
                                count: 0,    // 总数
                                current: 1   // 当前页
                            }
                        }
                    ]
                }
                if(val === 1) {
                    this.gameListData = [
                        {
                            title: '已结束的比赛',
                            list: [],
                            page: {
                                count: 0,    // 总数
                                current: 1   // 当前页
                            }
                        }
                    ]
                }
            }
        },
        components: {
            indexTab,
            gameList
        }
    }
</script>

<style lang="less" scoped>
    .index-content {
        width: 980px;
    }
</style>
