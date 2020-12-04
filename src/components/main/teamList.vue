<template>
    <div class="team-list">
        <!-- tab栏 -->
        <tab-nav
            style="margin-bottom:30px;"
            :navData="navList"
            :selectStyle="selectStyle"
            @clickIndex="openEvents"
        ></tab-nav>
        <div v-if="teamList.length !== 0">
            <div class="flex flex_start flex_wrap">
                <div class="list"
                    v-for="item in teamList"
                    :key="item.team_id"
                    @click="gotoDetail(item.team_id,item.game_id,item.team_name)"
                >
                    <p class="type">{{item.game_name}}</p>
                    <img :src="item.team_image">
                    <p class="name beyond-ellipsis"
                        :title="item.team_name"
                    >{{item.team_name}}</p>
                </div>
            </div>
            <paging-page
                style="width:1200px;"
                v-if="page.count > 10"
                :indexData="0"
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

    import { getTeamsList } from '@/scripts/request'

    export default {
        name: 'teamList',
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
                teamList: [],
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
                    limit: 20
                }
                getTeamsList(params).then( res => {
                    if (res.code === 200) {
                        _this.teamList = res.data.team_list
                        _this.page.count = res.data.count
                    }
                })
            },
            // 选择游戏
            openEvents(val) {
                this.gameId = this.navList[val].id
                this.getList()
            },
            // 详情页
            gotoDetail(teamId, gameId, teamName) {
                this.$router.push({
                    path: '/teams',
                    query: {
                        teamId: teamId,
                        gameId: gameId,
                        teamName: teamName
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
    .team-list {
        .list {
            width: 220px;
            height: 150px;
            cursor: pointer;
            margin-right: 20px;
            margin-bottom: 40px;
            box-sizing: border-box;
            background-color: #fff;
            box-shadow: 0 0 5px 5px rgba(181,181,181,.2);
            border: 3px solid transparent;
            &:hover {
                border-color: #F77500;
            }
            .type {
                color: #999;
                font-weight: 500;
                text-align: left;
                padding: 6px 0 0 10px;
            }
            img {
                width: 100px;
                height: 80px;
                display: block;
                margin: 4px auto;
            }
            .name {
                color: #666;
                font-size: 20px;
                font-weight: 600;
                text-align: center;
            }
            &:nth-child(5n) {
                margin-right: 0;
            }
        }
        .none {
            font-size: 18px;
            font-weight: 600;
            text-align: center;
        }
    }
</style>
