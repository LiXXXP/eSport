<template>
    <div class="data-chart">
        <diagram-bar></diagram-bar>
        <histogram></histogram>
    </div>
</template>

<script>
    import diagramBar from '@/components/detail/content/chart/diagramBar' // 条形图
    import histogram from '@/components/detail/content/chart/histogram'   // 柱状图
    export default {
        data() {
            return {}
        },
        components: {
            diagramBar,
            histogram
        }
    }
</script>

<style lang="less" scoped>
    .data-chart {
        min-width: 923px;
        padding: 10px 0;
        overflow-x: auto;
        overflow-y: hidden;
        box-sizing: border-box;
        background-color: #fff;
        &::-webkit-scrollbar {
            height: 12px;
            background-color: #E4E4E4;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 6px;
            background-color: #fff;
        }
        &::-webkit-scrollbar-track {
            background: #E4E4E4;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        }
    }
</style>
