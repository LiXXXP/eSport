<template>
    <div class="detail-content">
        <video-content v-if="currentData === 0"></video-content>
        <map-content v-else></map-content>
        <play-content></play-content>
    </div>
</template>

<script>
    import mapContent from '@/components/index/content/detail/lol/mapContent'     // 地图模块
    import playContent from '@/components/index/content/detail/lol/playContent'   // 对局详情
    import videoContent from '@/components/index/content/detail/videoContent'     // 视频模块
    export default {
        props: {
            currentData: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {

            }
        },
        components: {
            mapContent,
            playContent,
            videoContent
        }
    }
</script>

<style lang="less" scoped>

</style>
