<template>
    <div class="detail-content">
        <video-content
            v-if="currentData === 0 && this.$store.state.isSupported"
            :streamsData="matchDetail.streams"
        ></video-content>
        <map-content
            v-if="currentData === 1 && this.$store.state.isSupported"
        ></map-content>
        <play-score
            v-if="currentData === 1"
            :scoreData="matchDetail.scores"
            :battleData="matchDetail.battle_list"
        ></play-score>
        <tab-nav
            v-if="currentData === 1"
            :selectStyle="selectStyle"
            :navData="navList"
            @clickIndex="navDetail"
        ></tab-nav>
        <!-- 阵容分析 -->
        <!-- <detail-battle
            v-if="this.$route.path === '/detail' && currentData === 1 && currentMatchId > 0"
            :battleData="matchDetail.battle_list"
            :scoresData="matchDetail.scores"
            :targetMatchId="currentMatchId"
        ></detail-battle> -->
        <!-- 队伍对局详情 -->
        <play-content
            v-if="currentData === 1 && currentMatchId > 0"
            :matchData="matchDetail"
            :targetMatchId="currentMatchId"
        ></play-content>
        <!-- 对局详情 -->
        <play-detail
            v-if="this.$route.path === '/detail' && currentData === 1 && currentMatchId > 0"
            :targetMatchId="currentMatchId"
        ></play-detail>
        <!-- 对局分析 -->
        <play-data
            v-if="this.$route.path === '/detail' && currentData === 1 && currentMatchId === 0"
        ></play-data>
    </div>
</template>

<script>
    import videoContent from '@/components/index/content/detail/videoContent'     // 视频模块
    import mapContent from '@/components/index/content/detail/lol/mapContent'     // 地图模块
    import playScore from '@/components/index/content/detail/playScore'           // 比赛比分
    import tabNav from '@/components/common/tabNav'                               // tab切换
    import detailBattle from '@/components/detail/content/detail/detailBattle'    // 阵容分析
    import playContent from '@/components/index/content/detail/lol/playContent'   // 队伍对局详情
    import playData from '@/components/detail/content/playData'                   // 数据分析
    import playDetail from '@/components/detail/content/playDetail'               // 数据详情

    export default {
        props: {
            currentData: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                // 当前tab栏样式，
                // 1为首页橙色填充样式
                // 2为详情页边框样式
                // 3为详情页填充样式
                // 4为详情直播按钮
                selectStyle: 3,
                navList: [],
                currentMatchId: 0
            }
        },
        created() {
            this.getNavTitle()
            if(this.navList.length > 0) {
                this.currentMatchId = this.navList[0].battleId
            }
        },
        methods: {
            navDetail(index) {
                this.currentMatchId = this.navList[index].battleId
            },
            getNavTitle() {
                let navArr = []
                for(let index in this.$store.state.matchsData.battle_list) {
                    let item = {
                        title: `MAP ${parseInt(index)+1}`,
                        battleId: this.$store.state.matchsData.battle_list[index].battle_id
                    }
                    navArr.push(item)
                    this.navList = [...navArr]
                }
                if(this.$route.path === '/detail') {
                    this.navList.unshift({
                        title: '对战分析',
                        battleId: 0
                    })
                }
            }
        },
        computed: {
            matchDetail() {
                return this.$store.state.matchsData
            }
        },
        watch: {
            matchDetail() {
                this.getNavTitle()
                if(this.navList.length > 0) {
                    this.currentMatchId = this.navList[0].battleId
                }
                return this.$store.state.matchsData
            }
        },
        components: {
            mapContent,
            videoContent,
            playScore,
            tabNav,
            detailBattle,
            playContent,
            playData,
            playDetail
        }
    }
</script>

<style lang="less" scoped>

</style>
