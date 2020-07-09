<template>
    <div class="detail-player">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">选手对局详情</span>
        </div>
        <battle-table></battle-table>
    </div>
</template>

<script>
    import battleTable from '@/components/detail/content/chart/battleTable'  // 对局
    export default {
        data() {
            return {

            }
        },
        components: {
            battleTable
        }
    }
</script>

<style lang="less" scoped>

</style>
