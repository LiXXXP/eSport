<template>
    <div class="side-bar">
        <div class="bar-title">
            <span class="title">{{titleData.title}}</span>
            <!-- <span>（2804）</span> -->
        </div>
        <slot name="search"></slot>
        <div class="bar-list">
            <!-- 折叠面板 -->
            <el-collapse
                accordion
                v-model="activeNames"
                @change="getEvent"
                v-if="titleData.title === '全部游戏'"
            >
                <el-collapse-item
                    v-for="item in titleData.list"
                    :key="item.game_id"
                    :name="item.game_id"
                >
                    <template slot="title">
                        <img :src="item.image" class="title-icon">
                        <span class="beyond-ellipsis" :title="item.name">{{item.name}}</span>
                    </template>
                    <div class="detail">
                        <router-link
                            class="link"
                            :to="`/events?tournamentId=${key.tournament_id}`"
                            v-for="key in eventsList"
                            :key="key.tournament_id"
                        >
                            {{key.name}}
                        </router-link>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!-- 无折叠 -->
            <div v-else
                v-for="(item,index) in titleData.list"
                :key="item.tournament_id"
                @click="gotoEvents(item.tournament_id,item.game_id,item.team_id,item.name)">
                <div v-if="index<6" class="twig flex flex_start flex_only_center">
                    <img :src="item.image">
                    <span class="beyond-ellipsis" :title="item.name">{{item.name}}</span>
                </div>
            </div>
        </div>
        <slot name="page"></slot>
    </div>
</template>

<script>

    import { getGameTournament } from '@/scripts/request'

    export default {
        props: {
            titleData: {
                type: Object,
                default: null
            }
        },
        data() {
            return {
                activeNames: '',
                eventsList: []
            }
        },
        methods: {
            getEvent(val) {
                let params = {
                    game_id: val
                }
                let _this = this
                getGameTournament(params).then(res => {
                    if (res.code === 200) {
                        _this.eventsList = res.data
                    }
                })
            },
            gotoEvents(tournamentId,gameId,teamId,teamName) {
                if(tournamentId) {
                    this.$router.push({
                        path: '/events',
                        query: {
                            tournamentId: tournamentId
                        }
                    })
                }
                if(teamId) {
                    this.$router.push({
                        path: '/teams',
                        query: {
                            teamId: teamId,
                            gameId: gameId,
                            teamName: teamName
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .side-bar {
        width: 205px;
        margin-bottom: 15px;
        .bar-title {
            height: 50px;
            padding: 0 10px;
            line-height: 50px;
            box-sizing: border-box;
            background-color: #2f375d;
            .title {
                color: #fff;
                font-size: 18px;
                font-weight: 500;
            }
        }
        .bar-list {
            .title-icon {
                width: 22px;
                height: 22px;
                margin: 10px 12px 10px 10px;
            }
            .detail {
                font-size: 12px;
                padding: 0 10px;
                padding-top: 5px;
                .link {
                    color: #878787;
                    display: block;
                    &:hover {
                        color: #ff7800;
                    }
                }
            }
            .twig {
                cursor: pointer;
                min-height: 40px;
                line-height: 40px;
                box-sizing: border-box;
                background-color: #fff;
                &:nth-child(2n) {
                    background-color: #F6F6F6;
                }
                img {
                    width: 20px;
                    height: 20px;
                    margin: 10px;
                }
                span {
                    color: #101010;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
    }
</style>

<style lang="less">
    .bar-list {
        .el-collapse {
            border: 0;
            .el-collapse-item {
                .el-collapse-item__header {
                      color: #101010;
                      font-size: 16px;
                      font-weight: 500;
                }
                .el-collapse-item__wrap {
                    border-bottom: 0;
                }
                &:nth-child(2n) {
                    .el-collapse-item__header,
                    .el-collapse-item__wrap {
                        background-color: #F6F6F6;
                    }
                }
            }
        }
        .el-collapse-item__header {
            height: 44px;
            border-bottom: 0;
            line-height: 44px;
        }
    }
</style>
