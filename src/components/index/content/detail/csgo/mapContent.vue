<template>
    <div class="map-content">
        <kill-list></kill-list>
        <play-score></play-score>
    </div>
</template>

<script>

    import killList from '@/components/index/content/detail/csgo/killList'  // 击杀列表
    import playScore from '@/components/index/content/detail/playScore'     // 比赛比分

    export default {
        data () {
            return {

            }
        },
        components: {
            killList,
            playScore
        }
    }
</script>

<style lang="less" scoped>
    .map-content {

    }
</style>
