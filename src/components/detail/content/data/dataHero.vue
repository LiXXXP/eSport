<template>
    <div class="data-hero">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">擅长英雄</span>
        </div>
        <div class="hero">
            <filter-bar
                :filterData="filtersData"
            ></filter-bar>
            <div class="content flex flex_start">
                <side-bar></side-bar>
                <hero-list></hero-list>
            </div>
        </div>
    </div>
</template>

<script>
    import filterBar from '@/components/detail/content/filter/filterBar'  // 筛选
    import sideBar from '@/components/detail/content/side/sideBar'        // 侧边栏
    import heroList from '@/components/detail/content/chart/heroList'     // 英雄列表
    export default {
        data() {
            return {
                filtersData: {
                    isText: false,
                    filterTitle: [   // 筛选条件
                        {
                            title: '查询比赛数量'
                        },
                        {
                            title: '回合数超过'
                        }
                    ]
                }
            }
        },
        components: {
            filterBar,
            sideBar,
            heroList
        }
    }
</script>

<style lang="less" scoped>
    .data-hero {
        .hero {
            .content {
                width: 960px;
                margin-top: 3px;
            }
        }
    }
</style>
