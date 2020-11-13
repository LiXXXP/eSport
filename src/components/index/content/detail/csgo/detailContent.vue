<template>
    <div class="detail-content">
        <video-content
            v-if="currentData === 0"
            :streamsData="matchDetail.streams"
        ></video-content>
        <map-content
            v-if="currentData === 1"
        ></map-content>
        <play-score
            v-if="currentData === 1"
            :scoreData="matchDetail.scores"
            :battleData="matchDetail.battle_list"
        ></play-score>
        <!-- <play-content></play-content> -->
        <tab-nav
            v-if="matchDetail && currentData === 1"
            :selectStyle="selectStyle"
            :navData="navList"
            @clickIndex="navDetail"
        ></tab-nav>
        <!-- 对局详情 -->
        <play-csgo
            v-if="currentData === 1"
            :targetIndex="currentIndex"
            :battleData="matchDetail.battle_list"
            :mapData="matchDetail.maps"
        ></play-csgo>
        <!-- <csgo-play-data v-if="isDetai"></csgo-play-data> -->
        <!-- <csgo-play-detail v-else></csgo-play-detail> -->
    </div>
</template>

<script>
    import videoContent from '@/components/index/content/detail/videoContent'      // 视频模块
    import mapContent from '@/components/index/content/detail/csgo/mapContent'     // 地图模块
    import playScore from '@/components/index/content/detail/playScore'            // 比赛比分
    import playContent from '@/components/index/content/detail/csgo/playContent'   // 对局详情
    import tabNav from '@/components/common/tabNav'                                // 导航
    import playCsgo from '@/components/index/content/detail/playCsgo'              // 对局详情
    import csgoPlayData from '@/components/detail/content/csgoPlayData'            // 数据分析
    import csgoPlayDetail from '@/components/detail/content/csgoPlayDetail'        // 数据详情

    import { getBattles } from '@/scripts/request'

    export default {
        inheritAttrs: false,
        props: {
            currentData: {
                type: Number,
                default: 0
            },
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
                isDetai: true,  // 显示对战分析
                currentIndex: 0,
            }
        },
        created() {
            this.getNavTitle()
        },
        methods: {
            navDetail(index) {
                this.currentIndex = index
            },
            getNavTitle() {
                let battlesData = this.$store.state.matchsData.battle_list
                for(let index in battlesData) {
                    let item = {
                        title: `MAP ${parseInt(index)+1}`
                    }
                    this.navList.push(item)
                }
                if(this.$route.query.openType) {
                    this.navList.unshift({
                        title: '对战分析'
                    })
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
                return this.$store.state.matchsData
            }
        },
        components: {
            videoContent,
            mapContent,
            playScore,
            playContent,
            tabNav,
            playCsgo,
            csgoPlayData,
            csgoPlayDetail
        }
    }
</script>

<style lang="less" scoped>

</style>
