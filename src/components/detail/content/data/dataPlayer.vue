<template>
    <div class="data-player">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">选手对位信息</span>
        </div>
        <div class="player">
            <filter-bar :filterData="filterTitle"></filter-bar>
            <div class="content">
                <side-bar></side-bar>
            </div>
        </div>
    </div>
</template>

<script>
    import filterBar from '@/components/detail/content/filter/filterBar'  // 筛选
    import sideBar from '@/components/detail/content/side/sideBar'        // 侧边栏
    export default {
        data() {
            return {
                filterTitle: [   // 筛选条件
                    {
                        title: '查询对局数量'
                    },
                    {
                        title: '阵营'
                    }
                ]
            }
        },
        components: {
            filterBar,
            sideBar
        }
    }
</script>

<style lang="less" scoped>
    .data-player {
        .player {
            .content {
                width: 960px;
                margin-top: 3px;
            }
        }
    }
</style>
