<template>
    <div class="detail-content">
        <video-content v-if="currentData === 0"></video-content>
        <map-content v-else></map-content>
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
             @clickIndex="navDetail"
        ></tab-nav>
        <!-- 对局分析 -->
        <play-data v-if="isDetai"></play-data>
        <!-- 对局详情 -->
        <play-detail v-else></play-detail>
    </div>
</template>

<script>
    import mapContent from '@/components/index/content/detail/lol/mapContent'     // 地图模块
    import videoContent from '@/components/index/content/detail/videoContent'     // 视频模块
    import tabNav from '@/components/common/tabNav'                               // tab切换
    import playData from '@/components/detail/content/playData'                   // 数据分析
    import playDetail from '@/components/detail/content/playDetail'               // 数据详情

    import { getBattles } from '@/scripts/request'

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
                isDetai: true,  // 显示对战分析
            }
        },
        created() {
            this.getNavTitle()
        },
        methods: {
            navDetail(index) {
                if( index > 0 ) {
                    let _this = this
                    let params = {
                        battle_id: this.navList[index].battleId
                    }
                    getBattles(params).then(res => {
                        if (res.code === 1000) {
                            _this.$store.dispatch('getBattles',res.data)
                            _this.isDetai = false
                        }
                    })
                } else {
                    this.isDetai = true
                }
            },
            getNavTitle() {
                let battlesData = this.$store.state.matchsData.battles
                for(let index in battlesData) {
                    let item = {
                        title: `MAP ${parseInt(index)+1}`,
                        battleId: battlesData[index].battle_id
                    }
                    this.navList.push(item)
                }
                if(this.$route.query.openType) {
                    this.navList.unshift({
                        title: '对战分析'
                    })
                }
            }
        },
        components: {
            mapContent,
            videoContent,
            tabNav,
            playData,
            playDetail
        }
    }
</script>

<style lang="less" scoped>

</style>
