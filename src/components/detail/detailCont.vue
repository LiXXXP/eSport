<template>
    <div class="detail-cont">
        <!-- 战队比分 -->
        <play-score
            v-if="flag"
            :teamsData="matchTeams"
        ></play-score>
        <!-- 比赛信息 -->
        <play-info
            v-if="flag"
            :infoData="matchInfo"
        ></play-info>
        <game-info
            v-if="flag"
            :gameDetail="matchDetail"
            :openType="this.$route.query.openType"
        ></game-info>
    </div>
</template>

<script>
    import playScore from '@/components/detail/content/playScore'    // 对局分数
    import playInfo from '@/components/detail/content/playInfo'      // 比赛信息
    import gameInfo from '@/components/index/content/game/gameInfo'  // 游戏详情

    import { getMatches } from '@/scripts/request'

    export default {
        name: 'detail',
        data() {
            return {
                matchDetail: {},     // 比赛详情
                matchTeams: {},      // 战队比分所需数据
                matchInfo: {},       // 比赛信息
                flag: false
            }
        },
        created() {
            this.getMatchDetail()
        },
        mounted() {

        },
        methods: {
            // 请求赛事详情
            getMatchDetail() {
                let _this = this
                let params = {
                    match_id: _this.$route.query.matchId
                }
                getMatches(params).then(res => {
                    if (res.code === 1000) {
                        // console.log(res.data)
                        // 战队比分
                        _this.matchTeams = {
                            teams: res.data.teams,
                            scores: res.data.scores,
                            scheduled_begin_at: res.data.scheduled_begin_at,
                            tournament: {
                                name : res.data.tournament.name
                            },
                            match_type: res.data.match_type,
                            number_of_games: res.data.number_of_games,
                            status: res.data.status
                        }
                        // 比赛信息
                        _this.matchInfo = {
                            round_order: res.data.round_order,
                            round_name: res.data.round_name,
                            location: res.data.location,
                            description: res.data.description
                        }
                        // 比赛对局信息
                        _this.matchDetail = {
                            battles: res.data.battles
                        }
                        _this.flag = true
                    }
                })
            }
        },
        components: {
            playScore,
            playInfo,
            gameInfo
        }
    }
</script>

<style lang="less" scoped>

</style>
