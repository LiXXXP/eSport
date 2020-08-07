<template>
    <div class="detail-content">
        <video-content v-if="currentData === 0"></video-content>
        <map-content v-else></map-content>
    </div>
</template>

<script>
    import mapContent from '@/components/index/content/detail/csgo/mapContent'     // 地图模块
    import videoContent from '@/components/index/content/detail/videoContent'      // 视频模块
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
            videoContent
        }
    }
</script>

<style lang="less" scoped>

</style>
