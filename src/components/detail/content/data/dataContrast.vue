<template>
    <div class="data-contrast">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">数据对比</span>
        </div>
        <div class="contrast">
            <filter-bar></filter-bar>
            <div class="content flex flex_start">
                <side-bar></side-bar>
                <histogram></histogram>
            </div>
        </div>
    </div>
</template>

<script>
    import filterBar from '@/components/detail/content/filter/filterBar'  // 筛选
    import sideBar from '@/components/detail/content/side/sideBar'        // 侧边栏
    import histogram from '@/components/detail/content/chart/histogram'   // 柱状图
    export default {
        data() {
            return {

            }
        },
        components: {
            filterBar,
            sideBar,
            histogram
        }
    }
</script>

<style lang="less" scoped>
    .data-contrast {
        .contrast {
            .content {
                width: 960px;
                height: 420px;
                margin-top: 3px;
                background-color: #F2F2F2;
            }
        }
    }
</style>
