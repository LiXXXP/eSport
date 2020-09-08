<template>
    <div class="detail-cont">
        <!-- 战队比分 -->
        <play-score
            v-if="flag"
        ></play-score>
        <!-- 比赛信息 -->
        <play-info
            v-if="flag"
        ></play-info>
        <game-info
            v-if="flag"
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
                flag: false,
                timer: null
            }
        },
        created() {
            this.getMatchDetail()
            let _this = this
            this.timer = setInterval( () => {
                _this.getMatchDetail()
            }, 5000)
        },
        destroyed() {
            clearInterval(this.timer)
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
                        _this.$store.commit('getMatchsData',res.data)
                        _this.flag = true
                        if(res.data.status !== 'ongoing') {
                            clearInterval(_this.timer)
                        }
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
