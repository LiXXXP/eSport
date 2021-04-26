<template>
    <div class="data-events">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">近期比赛情况</span>
        </div>
        <div class="content clearfix" v-if="nearList.length>0">
            <div :class="['team',{'f-left': index === 0,'f-right': index === 1}]"
                v-for="(item,index) in nearList" :key="item.team_id">
                <div class="title flex flex_only_center">
                    <img :src="item.team_image">
                    <p>{{item.team_name}}</p>
                </div>
                <div class="board">
                    <el-collapse>
                        <el-collapse-item v-for="key in item.match_list" :key="key.match_id">
                            <template slot="title">
                                <div class="title">
                                    <p class="beyond-ellipsis">{{key.tournament_name}}</p>
                                    <p class="time">{{key.match_begin_time}}</p>
                                </div>
                                <div class="rank">{{key.match_type_number}}</div>
                                <div class="enemy flex flex_only_center">
                                    <img :src="key.enemy_team_image">
                                    <p class="beyond-ellipsis">{{key.enemy_team_name}}</p>
                                </div>
                                <div>{{key.score}}</div>
                            </template>
                            <div v-for="battle in key.battle_list" :key="battle.battle_id">
                                <div class="cont flex flex_around">
                                    <p>{{battle.battle_order}}</p>
                                    <p v-if="battle.duration">{{battle.duration}}</p>
                                    <p v-if="battle.battle_score">{{battle.battle_score}}</p>
                                    <p v-if="battle.map_short_name">{{battle.map_short_name}}</p>
                                    <p>{{battle.battle_score}}</p>
                                    <p :class="['state',{win:battle.battle_is_winner}]">
                                        {{battle.battle_is_winner?'胜':'负'}}
                                    </p>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getMatchNear } from "@/scripts/request"

    export default {
        data() {
            return {
                nearList: []
            }
        },
        created() {
            this.getMatchNearInfo()
        },
        methods: {
            getMatchNearInfo() {
                let params = {
                    game_id: parseInt(this.$route.query.gameId),
                    match_id: parseInt(this.$route.query.matchId)
                }
                getMatchNear(params).then(res => {
                    if(res.code === 200) {
                        this.nearList = res.data
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .data-events {
        .content {
            width: 960px;
            .team {
                width: 475px;
                background-color: #fff;
                .title {
                    height: 48px;
                    padding: 0 10px;
                    box-sizing: border-box;
                    img {
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
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
                            width: 100px;
                            text-align: center;
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
    .data-events {
        .el-collapse-item__header {
            justify-content: space-between;
            .el-collapse-item__arrow {
                margin: 0;
                margin-right: 10px;
            }
        }
        .el-collapse-item__wrap {
          background-color: #F7F5F5;
        }
        .el-collapse-item__content {
            padding-bottom: 0;
        }
    }
</style>
