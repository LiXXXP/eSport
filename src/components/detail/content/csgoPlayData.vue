<template>
    <div class="play-data">
        <!-- 数据对比 -->
        <!-- <data-contrast></data-contrast> -->
        <!-- 擅长地图 -->
        <!-- <data-map></data-map> -->
        <!-- 选手对位信息 -->
        <!-- <data-player></data-player> -->
        <!-- 近期比赛情况 -->
        <data-events></data-events>
        <!-- 历史交锋记录 -->
        <data-history></data-history>
    </div>
</template>

<script>
    import dataContrast from '@/components/detail/content/data/dataContrast'  // 数据分析
    import dataMap from '@/components/detail/content/table/dataMap'           // 数据分析
    import dataPlayer from '@/components/detail/content/data/dataPlayer'      // 选手信息
    import dataEvents from '@/components/detail/content/data/dataEvents'      // 比赛情况
    import dataHistory from '@/components/detail/content/data/dataHistory'    // 比赛情况
    export default {
        data() {
            return {

            }
        },
        components: {
            dataContrast,
            dataMap,
            dataPlayer,
            dataEvents,
            dataHistory
        }
    }
</script>

<style lang="less" scoped>

</style>
