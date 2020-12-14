<template>
    <div class="detail-content">
        <video-content
            v-if="currentData === 0"
            :streamsData="matchDetail.streams"
        ></video-content>
        <map-content
            v-if="currentData === 1"
        ></map-content>
        <!-- <tab-nav
            v-if="currentData === 1"
            :selectStyle="selectStyle"
            :navData="navList"
            @clickIndex="navDetail"
        ></tab-nav> -->
        <!-- 队伍对局详情 -->
        <!-- <play-content
            v-if="currentData === 1 && currentMatchId > 0"
            :matchData="matchDetail"
            :targetMatchId="currentMatchId"
        ></play-content> -->
        <!-- 对局详情 -->
        <!-- <play-detail
            v-if="this.$route.path === '/detail' && currentData === 1 && currentMatchId > 0"
        ></play-detail> -->
        <!-- 对局分析 -->
        <!-- <play-data
            v-if="this.$route.path === '/detail' && currentData === 1 && currentMatchId === 0"
        ></play-data> -->
    </div>
</template>

<script>
    import videoContent from '@/components/index/content/detail/videoContent'     // 视频模块
    import mapContent from '@/components/index/content/detail/lol/mapContent'     // 地图模块
    import tabNav from '@/components/common/tabNav'                               // tab切换
    import playContent from '@/components/index/content/detail/lol/playContent'   // tab切换
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
                return this.$store.state.matchsData
            },
            currentData() {
                this.getNavTitle()
                if(this.navList.length > 0) {
                    this.currentMatchId = this.navList[0].battleId
                }
            }
        },
        components: {
            mapContent,
            videoContent,
            tabNav,
            playContent,
            playData,
            playDetail
        }
    }
</script>

<style lang="less" scoped>

</style>
