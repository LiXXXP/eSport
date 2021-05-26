<template>
    <div class="event-list">
        <!-- tab栏 -->
        <tab-nav
            style="margin-bottom:30px;"
            :navData="navList"
            :selectStyle="selectStyle"
            @clickIndex="openEvents"
        ></tab-nav>
        <div class="flex flex_start flex_wrap"
            v-if="tournamentList.length !== 0">
            <div class="list"
                v-for="item in tournamentList"
                :key="item.tournament_id"
                 @click="gotoDetail(item.tournament_id)"
            >
                <div class="top">
                    <img :src="item.tournament_image">
                </div>
                <div class="text">
                    <p class="title beyond-ellipsis"
                        :title="item.tournament_name"
                    >{{item.tournament_name}}</p>
                    <p>开始时间：{{item.scheduled_begin_at}}</p>
                    <p>结束时间：{{item.scheduled_end_at}}</p>
                    <p>举办地：{{item.location}}</p>
                    <p>举办方：{{item.organizer}}</p>
                </div>
            </div>
            <paging-page
                style="width:1200px;"
                v-if="page.count>10"
                :indexData="0"
                :pageSize="10"
                :countData="page.count"
                @currentPage="currentPage"
            ></paging-page>
        </div>
        <div v-else class="none">暂无数据</div>
    </div>
</template>

<script>
    import tabNav from '@/components/common/tabNav'           // tab切换自定义
    import pagingPage from '@/components/common/pagingPage'   // 分页

    import { getTournamentsList } from '@/scripts/request'

    export default {
        name: 'eventList',
        metaInfo: {
            title: '电竞比分网 - 赛事列表', // set a title
            meta: [{                 // set meta
              name: 'keyWords',
              content: '电竞比分网 - eSportLiveScore.cn|实时比分直播|比赛日程|比赛结果|历史数据'
            }],
            link: [{                 // set link
              rel: 'asstes',
              href: 'https://esportlivescore.cn/#/eventlist'
            }]
        },
        data () {
            return {
                // 当前tab栏样式，
                // 1为首页橙色填充样式
                // 2为详情页边框样式
                // 3为详情页蓝色填充样式
                selectStyle: 1,
                navList: [
                    {
                        title: '全部游戏',
                        id: 0
                    },
                    {
                        title: '反恐精英：全球攻势',
                        id: 1
                    },
                    {
                        title: '英雄联盟',
                        id: 2
                    },
                    {
                        title: '刀塔2',
                        id: 3
                    }
                ],
                tournamentList: [],
                gameId: 0,
                page: {
                    count: 0,    // 总数
                    current: 1   // 当前页
                }
            }
        },
        created() {
            this.getList()
        },
        methods: {
            // 列表
            getList() {
                let _this = this
                let params = {
                    game_id: _this.gameId,
                    page: _this.page.current,
                    limit: 8
                }
                getTournamentsList(params).then( res => {
                    if (res.code === 200) {
                        _this.tournamentList = res.data.tournament_list
                        _this.page.count = res.data.count
                    }
                })
            },
            // 选择游戏
            openEvents(val) {
                this.gameId = this.navList[val].id
                this.getList()
            },
            // 赛事详情页
            gotoDetail(tournamentId) {
                this.$router.push({
                    path: '/events',
                    query: {
                        tournamentId: tournamentId
                    }
                })
            },
            // 获取分页页数
            currentPage(val) {
                this.page.current = val
                this.getList()
            },
        },
        components: {
            tabNav,
            pagingPage
        }
    }
</script>

<style lang="less" scoped>
    .event-list {
        .dropdown {
            padding-bottom: 20px;
        }
        .list {
            cursor: pointer;
            margin-right: 80px;
            margin-bottom: 50px;
            &:nth-child(4n) {
                margin-right: 0;
            }
            .top {
                width: 240px;
                height: 150px;
                padding: 20px 0;
                box-sizing: border-box;
                background-color: #FAFAFA;
                img {
                    width: 110px;
                    height: 110px;
                    display: block;
                    margin: 0 auto;
                }
            }
            .text {
                width: 240px;
                p {
                    padding-bottom: 5px;
                    &.title {
                        font-size: 18px;
                        padding: 20px 0;
                        font-weight: 600;
                        &:hover {
                            color: #F77500;
                        }
                    }
                }
            }
        }
        .none {
            font-size: 18px;
            font-weight: 600;
            text-align: center;
        }
    }
</style>
