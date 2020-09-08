<template>
    <div class="play-content">
        <play-score></play-score>
        <map-info></map-info>
    </div>
</template>

<script>
    import playScore from '@/components/index/content/detail/playScore' // 比赛比分
    import mapInfo from '@/components/index/content/detail/mapInfo'     // 地图模块

    export default {
        data() {
            return {

            }
        },
        components: {
            mapInfo,
            playScore
        }
    }
</script>

<style lang="less" scoped>
    .play-content {

    }
</style>
