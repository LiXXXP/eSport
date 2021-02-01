<template>
    <div class="team">
        <div class="info flex flex_between flex_only_center">
            <div class="img">
                <img :src="tDetail.team_image">
            </div>
            <div class="text">
                <p class="title">{{tDetail.team_name}}</p>
                <p class="depict">{{tDetail.full_name}}</p>
                <p>{{tDetail.introduction}}</p>
            </div>
        </div>
        <div class="player" v-if="tDetail.player_list&&tDetail.player_list.length>0">
            <p class="title">现役成员</p>
            <div class="flex flex_start flex_wrap">
                <div class="list"
                    v-for="item in tDetail.player_list"
                    :key="item.player_id"
                >
                    <span v-if="item.role">{{item.role}}</span>
                    <div class="img flex flex_only_end flex_center">
                        <img :src="item.image">
                    </div>
                    <p>{{item.nick_name}}</p>
                </div>
            </div>
        </div>
        <div class="event" v-if="tList.length>0">
            <p class="title">近期赛事</p>
            <team-page-table
                :tableData="tList"
                @gotoDetail="gotoDetail"
            ></team-page-table>
            <paging-page
                style="width:1200px;"
                :indexData="0"
                :pageSize="10"
                :countData="page.count"
                @currentPage="currentPage"
            ></paging-page>
        </div>
    </div>
</template>

<script>
    import teamPageTable from '@/components/main/table/teamPageTable'  // 近期赛事列表
    import pagingPage from '@/components/common/pagingPage'            // 分页

    import { getTeamDetail, getTeamMatch, getCollectMatch } from '@/scripts/request'

    export default {
        name: 'teamIndex',
        data () {
            return {
                tDetail: {},   // 战队详情
                tList: [],     // 战队列表
                page: {
                    count: 0,    // 总数
                    current: 1   // 当前页
                },
                teamId: 0,
                gameId: 0,
                teamName: ''
            }
        },
        created() {
            this.teamId = this.$route.query.teamId || 0
            this.gameId = this.$route.query.gameId || 0
            this.teamName = this.$route.query.teamName || ''
            if(this.teamId) {
                this.teamDetail()
            }
            if(this.gameId && this.teamName) {
                this.teamList()
            }
        },
        methods: {
            // 战队详情
            teamDetail() {
                let _this = this
                let params = {
                    team_id: _this.teamId
                }
                getTeamDetail(params).then( res => {
                    if (res.code === 200) {
                        _this.tDetail = res.data
                    }
                })
            },
            // 战队赛事列表
            teamList() {
                let _this = this
                let params = {
                    game_id: _this.gameId,
                    team_name: _this.teamName,
                    page: _this.page.current,
                    limit: 10
                }
                getTeamMatch(params).then( res => {
                    if (res.code === 200) {
                        _this.tList = res.data.match_list
                        _this.page.count = res.data.count
                    }
                })
            },
            // 详情页
            gotoDetail(gameId,matchId) {
                this.$router.push({
                    path: '/detail',
                    query: {
                        gameId: gameId,
                        matchId: matchId
                    }
                })
            },
            // 获取分页页数
            currentPage(val) {
                this.page.current = val
                this.teamList()
            },
            // 跳转详情页
            gotoDetail(gameId, matchId, status) {
                if(status === '详情') {
                    this.$router.push({
                        path: '/detail',
                        query: {
                            gameId: gameId,
                            matchId: matchId
                        }
                    })
                }
                if(status === '预约直播') {
                    let params = {
                        match_id: matchId
                    }
                    getCollectMatch(params).then(res => {
                        if (res.code === 200) {
                            this.$message.success(res.message)
                        } else {
                            this.$message.error(res.message)
                        }
                    })
                }
            }
        },
        watch: {
            $route(){
                this.teamId = this.$route.query.teamId || 0
                this.gameId = this.$route.query.gameId || 0
                this.teamName = this.$route.query.teamName || ''
            },
            teamId(val,old) {
                if(this.teamId) {
                    this.teamDetail()
                }
                if(this.gameId && this.teamName) {
                    this.teamList()
                }
            }
        },
        components: {
            teamPageTable,
            pagingPage
        }
    }
</script>

<style lang="less" scoped>
    .team {
        .info {
            width: 1200px;
            height: 300px;
            border-radius: 1px;
            padding: 63px 110px;
            box-sizing: border-box;
            background-color: #fff;
            .img {
                width: 288px;
                height: 174px;
                img {
                    width: 200px;
                    height: 100%;
                    display: block;
                    margin: 0 auto;
                }
            }
            .text {
                width: 598px;
                p {
                    line-height: 20px;
                    &.title {
                        font-size: 36px;
                        font-weight: 600;
                    }
                    &.depict {
                        font-size: 16px;
                        font-weight: 600;
                        padding: 10px 0 30px;
                    }
                }
            }
        }
        .player {
            .title {
                font-size: 18px;
                font-weight: 600;
                padding-top: 20px;
                margin-bottom: -20px;
            }
            .list {
                width: 190px;
                height: 220px;
                margin-right: 62px;
                border-radius: 2px;
                margin-top: 40px;
                background-image: linear-gradient(#676c6e,#8c8e8f);
                position: relative;
                &:nth-child(5n) {
                    margin-right: 0;
                }
                .img {
                    width: 100%;
                    height: 185px;
                    border-radius: 2px 2px 0 0;
                    img {
                        width: 160px;
                        height: 140px;
                    }
                }
                p {
                    height: 35px;
                    font-size: 20px;
                    line-height: 35px;
                    text-align: center;
                    background-color: #fff;
                    border-radius: 0 0 2px 2px;
                }
                span {
                    height: 20px;
                    display: block;
                    padding: 0 5px;
                    font-weight: 500;
                    line-height: 20px;
                    text-align: center;
                    border-radius: 10px;
                    border: 1px solid #434343;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                }
            }
        }
        .event {
            .title {
                font-size: 18px;
                padding: 20px 0;
                font-weight: 600;
            }
        }
    }
</style>
