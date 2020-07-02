<template>
    <div class="data-contrast">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">数据对比</span>
        </div>
        <div class="contrast">
            <filter-bar :filterData="filterTitle"></filter-bar>
            <div class="content flex flex_start">
                <side-bar></side-bar>
                <data-chart></data-chart>
            </div>
        </div>
    </div>
</template>

<script>
    import filterBar from '@/components/detail/content/filter/filterBar'  // 筛选
    import sideBar from '@/components/detail/content/side/sideBar'        // 侧边栏
    import dataChart from '@/components/detail/content/data/dataChart'    // 图表
    export default {
        data() {
            return {
                filterTitle: [   // 筛选条件
                    {
                        title: '查询比赛数量'
                    },
                    {
                        title: '比赛时长'
                    },
                    {
                        title: '总击杀'
                    },
                    {
                        title: '阵营'
                    }
                ]
            }
        },
        components: {
            filterBar,
            sideBar,
            dataChart
        }
    }
</script>

<style lang="less" scoped>
    .data-contrast {
        .contrast {
            .content {
                width: 960px;
                margin-top: 3px;
            }
        }
    }
</style>
