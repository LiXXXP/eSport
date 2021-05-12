<template>
    <div class="data-history">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">历史交锋记录</span>
        </div>
        <div class="content">
            <div class="team">
                <div class="title flex flex_between flex_center" v-if="team.master_team">
                    <div class="flex flex_start flex_center">
                        <img :src="team.master_team.team_image">
                        <p>{{team.master_team.team_name}}</p>
                    </div>
                    <div class="chessboard flex flex_start">
                        <div>
                            <p class="score">{{team.master_team.matches_win_count}}</p>
                            <p class="plays">{{team.master_team.battles_win_count}} - {{team.master_team.total_number_of_battles}}</p>
                            <p>获胜</p>
                        </div>
                        <!-- <div>
                            <p class="score" style="color:#434343;">2</p>
                            <p class="plays">3-3</p>
                            <p>平局</p>
                        </div> -->
                        <div>
                            <p class="score">{{team.guest_team.matches_win_count}}</p>
                            <p class="plays">{{team.guest_team.battles_win_count}} - {{team.guest_team.total_number_of_battles}}</p>
                            <p>获胜</p>
                        </div>
                    </div>
                    <div class="flex flex_start flex_center">
                        <p>{{team.guest_team.team_name}}</p>
                        <img :src="team.guest_team.team_image">
                    </div>
                </div>
                <div class="board" v-if="historyList.length > 0">
                    <el-collapse>
                        <el-collapse-item v-for="key in historyList" :key="key.match_id">
                            <template slot="title">
                                <div class="title">
                                    <p class="beyond-ellipsis">{{key.tournament_name}}</p>
                                    <p class="time">{{key.scheduled_begin_at}}</p>
                                </div>
                                <div class="rank">{{key.match_type_number}}</div>
                                <div class="enemy flex flex_only_center">
                                    <p class="beyond-ellipsis">{{key.team_vs_info}}</p>
                                </div>
                                <div>{{key.score_info}}</div>
                            </template>
                            <div v-for="item in key.battle" :key="item.order">
                                <div class="cont flex flex_around">
                                    <p>{{item.order}}</p>
                                    <p v-if="item.duration">{{item.duration}}</p>
                                    <p v-if="item.winner_team_name">{{item.winner_team_name}}胜</p>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                    <paging-page
                        v-if="page.count>10"
                        :indexData="0"
                        :pageSize="10"
                        :countData="page.count"
                        @currentPage="currentPage"
                    ></paging-page>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import pagingPage from '@/components/common/pagingPage'  // 分页
    import { getMatchHistory } from "@/scripts/request"


    export default {
        data() {
            return {
                historyList: [],
                team: {},
                page: {
                    count: 0,    // 总数
                    current: 1   // 当前页
                },
            }
        },
        created() {
            this.getHistoryList()
        },
        methods: {
            getHistoryList() {
                let _this = this
                let params = {
                    game_id: parseInt(_this.$route.query.gameId),
                    match_id: parseInt(_this.$route.query.matchId),
                    page: _this.page.current,
                    limit: 10
                }
                getMatchHistory(params).then(res => {
                    if(res.code === 200) {
                        _this.team = res.data.team
                        _this.historyList = res.data.match.list
                        _this.page.count = res.data.match.count
                    }
                })
            },
            // 获取分页页数
            currentPage(val) {
                this.page.current = val
                this.getHistoryList()
            },
        }
    }
</script>

<style lang="less" scoped>
    .data-history {
        .content {
            width: 960px;
            .team {
                width: 960px;
                background-color: #fff;
                .title {
                    padding: 10px 0;
                    box-sizing: border-box;
                    .chessboard {
                        font-weight: 400;
                        div {
                            padding: 0 30px;
                            text-align: center;
                            position: relative;
                            &:nth-child(2)::before,
                            &:nth-child(2)::after {
                                width: 1px;
                                height: 40px;
                                content: '';
                                display: block;
                                background-color: #E3E3E3;
                                position: absolute;
                            }
                            &:nth-child(2)::before {
                                left: 0;
                                top: 50%;
                                transform: translate(0, -50%);
                            }
                            &:nth-child(2)::after {
                                right: 0;
                                top: 50%;
                                transform: translate(0, -50%);
                            }
                            p {
                                font-size: 12px;
                                &.score {
                                    color: #37AC60;
                                    font-size: 18px;
                                    font-weight: 600;
                                }
                                &.plays {
                                    color: #878787;
                                }
                            }
                        }
                    }
                    img {
                        width: 30px;
                        height: 30px;
                        margin: 0 10px;
                    }
                }
                .board {
                    .title {
                        width: 150px;
                        line-height: 20px;
                        padding-left: 10px;
                        .time {
                            color: #666;
                        }
                    }
                    .rank {
                        padding-left: 10px;
                    }
                    .enemy {
                        width: 200px;
                        padding-left: 20px;
                        img {
                            width: 25px;
                            height: 25px;
                            margin-right: 10px;
                        }
                    }
                    .cont {
                        p {
                            width: 200px;
                            line-height: 30px;
                            &.state {
                                color: #FA4659;
                                &.win {
                                    color: #30B870;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="less">
    .data-history {
        .el-collapse-item__header {
            justify-content: space-between;
            .el-collapse-item__arrow {
                margin: 0;
                margin-right: 10px;
            }
        }
        .el-collapse-item__content {
            padding-bottom: 0;
        }
    }
</style>
