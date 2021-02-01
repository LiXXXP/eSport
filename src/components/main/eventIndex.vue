<template>
    <div class="event">
        <div class="info flex flex_between flex_only_center">
            <div class="img">
                <img :src="tDetail.tournament_logo">
            </div>
            <div class="text">
                <p class="title">{{tDetail.tournament_name}}</p>
                <div class="flex flex_between">
                    <div class="addr">
                        <p>{{tDetail.scheduled_begin_at}} ～ {{tDetail.scheduled_end_at}}</p>
                        <p>举办地：{{tDetail.location}}</p>
                        <p>举办方：{{tDetail.organizer}}</p>
                    </div>
                    <div class="num">
                        <p>{{tDetail.team_count}}</p>
                        <p>参赛队伍</p>
                    </div>
                    <div class="num">
                        <p>{{tDetail.prize_bonus}}</p>
                        <p>总奖金</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="team" v-if="tDetail.team_list&&tDetail.team_list.length>0">
            <p class="title">参赛队伍</p>
            <div class="flex flex_start flex_wrap">
                <div class="list"
                    v-for="item in tDetail.team_list"
                    :key="item.team_id"
                    @click="gotoTeam(item.team_id)"
                >
                    <img :src="item.team_image" :title="item.team_name">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="table" v-if="tList.length>0">
            <p class="title">近期赛事</p>
            <team-page-table
                :tableData="tList"
                @gotoDetail="gotoDetail"
            ></team-page-table>
            <paging-page
                style="width:1200px;"
                v-if="page.count>10"
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

    import { getTournaments, getTournamentMatch, getCollectMatch } from '@/scripts/request'

    export default {
        name: 'eventIndex',
        data () {
            return {
                tDetail: {},   // 赛事详情
                tList: [],     // 赛事列表
                page: {
                    count: 0,    // 总数
                    current: 1   // 当前页
                },
                tournamentId: 0
            }
        },
        created() {
            this.tournamentId = this.$route.query.tournamentId
            if(this.tournamentId) {
                this.tournamentDetail()
                this.tournamentList()
            }
        },
        methods: {
            // 赛事详情
            tournamentDetail() {
                let _this = this
                let params = {
                    tournament_id: _this.tournamentId
                }
                getTournaments(params).then( res => {
                    if (res.code === 200) {
                        _this.tDetail = res.data
                    }
                })
            },
            // 赛事列表
            tournamentList() {
                let _this = this
                let params = {
                    tournament_id: _this.tournamentId,
                    page: _this.page.current,
                    limit: 10
                }
                getTournamentMatch(params).then( res => {
                    if (res.code === 200) {
                        _this.tList = res.data.list
                        _this.page.count = res.data.count
                    }
                })
            },
            // 获取分页页数
            currentPage(val) {
                this.page.current = val
                this.tournamentList()
            },
            // 跳转战队页
            gotoTeam(teamId) {
                this.$router.push({
                    path: '/teams',
                    query: {
                        teamId: teamId
                    }
                })
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
                this.tournamentId = this.$route.query.tournamentId
            },
            tournamentId(val,old) {
                this.tournamentDetail()
                this.tournamentList()
            }
        },
        components: {
            teamPageTable,
            pagingPage
        }
    }
</script>

<style lang="less" scoped>
    .event {
        .info {
            width: 1200px;
            height: 200px;
            padding: 25px 50px;
            box-sizing: border-box;
            background-color: #fff;
            .img {
                width: 260px;
                height: 150px;
                img {
                    width: 170px;
                    height: 100%;
                }
            }

            .text {
                width: 800px;
                .title {
                    font-size: 24px;
                    font-weight: 600;
                    padding-bottom: 30px;
                }
                .addr {
                    p {
                        padding-bottom: 10px;
                    }
                }
                .num {
                    p {
                        text-align: center;
                        &:first-child {
                            font-size: 24px;
                            font-weight: 600;
                            padding-bottom: 30px;
                        }
                    }
                }
            }
        }
        .team {
            .title {
                font-size: 18px;
                font-weight: 600;
                padding-top: 20px;
                margin-bottom: -20px;
            }
            .list {
                width: 130px;
                height: 170px;
                cursor: pointer;
                border: 2px solid;
                margin-right: 43px;
                margin-top: 40px;
                border-image: linear-gradient(180deg, #E0BF90, #B29873) 10 10;
                position: relative;
                &:nth-child(7n) {
                    margin-right: 0;
                }
                img {
                    width: 120px;
                    height: 120px;
                    display: block;
                    margin: 25px auto;
                }
                span {
                    &:nth-child(2) {
                        position: absolute;
                        top: -5px;
                        left: -5px;
                        padding: 15px;
                        border-style: solid;
                        border-color: #DFBF90;
                        border-width: 1px 0 0 1px;
                    }
                    &:nth-child(3) {
                        position: absolute;
                        top: -5px;
                        right: -5px;
                        padding: 15px;
                        border-style: solid;
                        border-color: #DFBF90;
                        border-width: 1px 1px 0 0;
                    }
                    &:nth-child(4) {
                        position: absolute;
                        right: -5px;
                        bottom: -5px;
                        padding: 15px;
                        border-style: solid;
                        border-color: #DFBF90;
                        border-width: 0 1px 1px 0;
                    }
                    &:nth-child(5) {
                        position: absolute;
                        left: -5px;
                        bottom: -5px;
                        padding: 15px;
                        border-style: solid;
                        border-color: #DFBF90;
                        border-width: 0 0 1px 1px;
                    }
                }
            }
        }
        .table {
            .title {
                font-size: 18px;
                padding: 20px 0;
                font-weight: 600;
            }
        }
    }
</style>
