<template>
    <div class="detail-content">
        <video-content v-if="currentData === 0"></video-content>
        <map-content v-else></map-content>
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
        ></tab-nav>
        <!-- 对局详情 -->
        <play-content></play-content>
        <play-data></play-data>
        <play-detail></play-detail>
    </div>
</template>

<script>
    import mapContent from '@/components/index/content/detail/dota/mapContent'     // 地图模块
    import playContent from '@/components/index/content/detail/dota/playContent'   // 对局详情
    import videoContent from '@/components/index/content/detail/videoContent'      // 视频模块
    import tabNav from '@/components/common/tabNav'                               // tab切换
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
                navList: [
                    {
                        title: 'MAP 1'
                    },
                    {
                        title: 'MAP 2'
                    },
                    {
                        title: 'MAP 3'
                    },
                    {
                        title: 'MAP 4'
                    }
                ]
            }
        },
        components: {
            mapContent,
            playContent,
            videoContent,
            tabNav,
            playData,
            playDetail
        }
    }
</script>

<style lang="less" scoped>

</style>
