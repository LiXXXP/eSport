<template>
    <div class="data-player">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">选手对位信息</span>
        </div>
        <div class="player">
            <filter-bar
                :filterData="filtersData"
            ></filter-bar>
            <div class="content flex flex_start">
                <side-bar></side-bar>
                <!-- <data-player-info></data-player-info> -->
                <csgo-data-player></csgo-data-player>
            </div>
        </div>
    </div>
</template>

<script>
    import filterBar from '@/components/detail/content/filter/filterBar'          // 筛选
    import sideBar from '@/components/detail/content/side/sideBar'                // 侧边栏
    import dataPlayerInfo from '@/components/detail/content/data/dataPlayerInfo'  // 选手信息
    import csgoDataPlayer from '@/components/detail/content/table/csgoDataPlayer' // csgo选手信息
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
            dataPlayerInfo,
            csgoDataPlayer
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
