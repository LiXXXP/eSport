<template>
    <div class="play-content">
        <map-info></map-info>
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
        ></tab-nav>
        <play-csgo></play-csgo>
    </div>
</template>

<script>
    import mapInfo from '@/components/index/content/detail/mapInfo'     // 地图模块
    import tabNav from '@/components/common/tabNav'                     // 导航
    import playCsgo from '@/components/index/content/detail/playCsgo'   // 对局详情

    export default {
        data() {
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
                        title: 'NUK'
                    },
                    {
                        title: 'Map2'
                    },
                    {
                        title: 'Map3'
                    },
                    {
                        title: 'NUK2'
                    }
                ]
            }
        },
        components: {
            mapInfo,
            tabNav,
            playCsgo
        }
    }
</script>

<style lang="less" scoped>
    .play-content {

    }
</style>
