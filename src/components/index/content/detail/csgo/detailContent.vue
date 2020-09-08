<template>
    <div class="detail-content">
        <video-content
            v-if="currentData === 0"
        ></video-content>
        <map-content
            v-else
        ></map-content>
        <play-content></play-content>
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
            @clickIndex="navDetail"
        ></tab-nav>
        <csgo-play-data v-if="isDetai"></csgo-play-data>
        <csgo-play-detail v-else></csgo-play-detail>
    </div>
</template>

<script>
    import mapContent from '@/components/index/content/detail/csgo/mapContent'     // 地图模块
    import videoContent from '@/components/index/content/detail/videoContent'      // 视频模块
    import playContent from '@/components/index/content/detail/csgo/playContent'   // 对局详情
    import tabNav from '@/components/common/tabNav'                                // 导航
    import csgoPlayData from '@/components/detail/content/csgoPlayData'            // 数据分析
    import csgoPlayDetail from '@/components/detail/content/csgoPlayDetail'        // 数据详情

    import { getBattles } from '@/scripts/request'

    export default {
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
            }
        },
        created() {
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
                            // console.log(res.data)
                            _this.$store.dispatch('getBattles',res.data)
                            _this.isDetai = false
                        }
                    })
                } else {
                    this.isDetai = true
                }
            }
        },
        components: {
            mapContent,
            videoContent,
            playContent,
            tabNav,
            csgoPlayData,
            csgoPlayDetail
        }
    }
</script>

<style lang="less" scoped>

</style>
