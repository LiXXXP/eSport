<template>
    <div class="detail-logs">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">比赛日志</span>
        </div>
        <battle-log></battle-log>
    </div>
</template>

<script>
    import battleLog from '@/components/detail/content/chart/battleLog'      // 比赛日志
    export default {
        data() {
            return {

            }
        },
        components: {
            battleLog
        }
    }
</script>

<style lang="less" scoped>

</style>
