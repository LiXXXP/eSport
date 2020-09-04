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
        ></tab-nav>
        <csgo-play-data></csgo-play-data>
        <csgo-play-detail></csgo-play-detail>
    </div>
</template>

<script>
    import mapContent from '@/components/index/content/detail/csgo/mapContent'     // 地图模块
    import videoContent from '@/components/index/content/detail/videoContent'      // 视频模块
    import playContent from '@/components/index/content/detail/csgo/playContent'   // 对局详情
    import tabNav from '@/components/common/tabNav'                                // 导航
    import csgoPlayData from '@/components/detail/content/csgoPlayData'            // 数据分析
    import csgoPlayDetail from '@/components/detail/content/csgoPlayDetail'        // 数据详情

    export default {
        props: {
            currentData: {
                type: Number,
                default: 0
            },
            battlesData: {
                type: Array,
                default: []
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
                navList : [
                    {
                        title: '对战分析'
                    },
                    {
                        title: 'Map1'
                    },
                    {
                        title: 'Map2'
                    },
                    {
                        title: 'Map3'
                    },
                    {
                        title: 'Map4'
                    }
                ]
            }
        },
        created() {
            console.log(this.battlesData)
            for(let item of this.battlesData) {
                console.log(item)
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
