<template>
    <div class="search-box flex flex_start"
        v-if="searchData.length !== 0"
        @click="goDetail(searchData.game_id,searchData.team_id,searchData.team_name,searchData.teams_name,searchData.tournament_id)"
    >
        <img :src="searchData.team_image" class="events-img" v-if="searchData.team_image">
        <img :src="searchData.player_image" class="events-img" v-if="searchData.player_image">
        <img :src="searchData.tournament_image" class="events-img" v-if="searchData.tournament_image">
        <div class="info">
            <div class="flex flex_start flex_only_center"
                v-if="searchData.team_image">
                <img :src="searchData.country_image">
                <p :title="searchData.team_name">{{searchData.team_name}}</p>
            </div>

            <div class="flex flex_start flex_only_center"
                v-if="searchData.nationality_image">
                <img :src="searchData.nationality_image">
                <p :title="searchData.player_nickname">{{searchData.player_nickname}}</p>
            </div>

            <p v-if="searchData.teams_name" :title="searchData.teams_name">
                效力战队：{{searchData.teams_name}}
            </p>

            <div class="flex flex_start flex_only_center"
                v-if="searchData.location_image">
                <img :src="searchData.location_image">
                <p :title="searchData.tournament_name">{{searchData.tournament_name}}</p>
            </div>

            <p v-if="searchData.game_name_cn || searchData.game_name" :title="searchData.game_name_cn || searchData.game_name">
                游戏项目：{{searchData.game_name_cn || searchData.game_name}}
            </p>

            <p v-if="searchData.location" :title="searchData.location">
                地点：{{searchData.location}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            searchData: {
                type: Object,
                default: null
            }
        },
        data() {
            return {

            }
        },
        methods: {
            goDetail(gameId,teamId,teamName,teamsName,tournamentId) {
                if(tournamentId) {
                    this.$router.push({
                        path: '/events',
                        query: {
                            tournamentId: tournamentId
                        }
                    })
                } else {
                    if(!teamId) return
                    this.$router.push({
                        path: '/teams',
                        query: {
                            teamId: teamId,
                            gameId: gameId,
                            teamName: teamName || teamsName
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .search-box {
        width: 280px;
        padding: 8px 0;
        border-bottom: 1px solid #CFCFCF;
        .events-img {
            width: 36px;
            height: 36px;
            margin-right: 10px;
        }
        .info {
            img {
                width: 20px;
                height: 12px;
                margin-right: 5px;
                border: 1px solid #999;
            }
            p {
                width: 200px;
                font-size: 12px;
                color: #101010;
                overflow: hidden;
                white-space: nowrap;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
            }
        }
    }
</style>
