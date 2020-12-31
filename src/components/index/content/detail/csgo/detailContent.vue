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
        <!-- 比赛信息 -->
        <map-info
            :teamData="matchDetail.scores"
            :mapData="matchDetail.maps"
            v-if="this.$route.path === '/detail' && currentData === 1"
        ></map-info>
        <!-- 对局 tab栏切换 -->
        <tab-nav
            v-if="currentData === 1"
            :selectStyle="selectStyle"
            :navData="navList"
            @clickIndex="navDetail"
        ></tab-nav>
        <!-- 对局详情 -->
        <play-csgo
            v-if="currentData === 1 && currentMatchId > 0"
            :targetMatchId="currentMatchId"
            :battleData="matchDetail.battle_list"
            :mapData="matchDetail.maps"
            :teamData="matchDetail.scores"
        ></play-csgo>
        <!-- 选手数据 -->
        <csgo-play-detail
            v-if="this.$route.path === '/detail' && currentData === 1 && currentMatchId > 0"
            :targetMatchId="currentMatchId"
        ></csgo-play-detail>
        <!-- 数据分析 -->
        <csgo-play-data
            v-if="this.$route.path === '/detail' && currentData === 1 && currentMatchId === 0"
        ></csgo-play-data>
    </div>
</template>

<script>
    import videoContent from '@/components/index/content/detail/videoContent'      // 视频模块
    import mapContent from '@/components/index/content/detail/csgo/mapContent'     // 地图模块
    import playScore from '@/components/index/content/detail/playScore'            // 比赛比分
    import mapInfo from '@/components/index/content/detail/mapInfo'                // 地图模块
    import tabNav from '@/components/common/tabNav'                                // 导航
    import playCsgo from '@/components/index/content/detail/playCsgo'              // 对局详情
    import csgoPlayData from '@/components/detail/content/csgoPlayData'            // 数据分析
    import csgoPlayDetail from '@/components/detail/content/csgoPlayDetail'        // 数据详情

    export default {
        inheritAttrs: false,
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
                // 2为详情页蓝色边框样式
                // 3为详情页橙色填充样式
                // 4为详情直播按钮
                selectStyle: 3,
                navList : [],   // 对局数导航
                currentMatchId: 0,
            }
        },
        methods: {
            navDetail(index) {
                this.currentMatchId = this.navList[index].battleId
            },
            getNavTitle() {
                if(this.$store.state.matchsData.battle_list.length > 0) {
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
            videoContent,
            mapContent,
            playScore,
            mapInfo,
            tabNav,
            playCsgo,
            csgoPlayData,
            csgoPlayDetail
        }
    }
</script>

<style lang="less" scoped>

</style>
