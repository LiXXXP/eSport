<template>
    <div class="detail-content">
        <map-content></map-content>
        <play-content></play-content>
    </div>
</template>

<script>
    import mapContent from '@/components/index/content/detail/dota/mapContent'     // 地图模块
    import playContent from '@/components/index/content/detail/dota/playContent'   // 对局详情
    export default {
        data () {
            return {

            }
        },
        components: {
            mapContent,
            playContent
        }
    }
</script>

<style lang="less" scoped>
    .detail-content {
        width: 960px;
        margin-top: 12px;
        box-sizing: border-box;
        background: url('../../../../../assets/imgs/detail/1.png') no-repeat 0 0;
        background-size: 100%;
    }
</style>
