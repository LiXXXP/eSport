<template>
    <div class="detail-battle">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">阵容分析</span>
        </div>
        <div class="player" v-if="battleData.length > 0">
            <div v-for="item in battleData" :key="item.battle_id">
                <div v-if="item.battle_id === targetMatchId">
                    <filter-bar
                        :filterData="filtersData"
                    ></filter-bar>
                    <div class="content">
                        <tab-nav
                            :selectStyle="selectStyle"
                            :navData="navList"
                        ></tab-nav>
                        <div class="teams flex flex_between flex_only_center">
                            <div class="name flex flex_start flex_only_center">
                                <img :src="(item.factions[0].faction === 'blue' && item.factions[0].team_id === scoresData[0].team_id) ?
                                        scoresData[0].team_snapshot.image : scoresData[1].team_snapshot.image">
                                <p class="beyond-ellipsis"
                                    :title="(item.factions[0].faction === 'blue' && item.factions[0].team_id === scoresData[0].team_id) ?
                                            scoresData[0].team_snapshot.full_name : scoresData[1].team_snapshot.full_name">
                                    {{
                                        (item.factions[0].faction === 'blue' && item.factions[0].team_id === scoresData[0].team_id) ?
                                        scoresData[0].team_snapshot.name : scoresData[1].team_snapshot.name
                                    }}
                                </p>
                            </div>
                            <div class="block flex flex_around">
                                <div class="blue">
                                    <span></span>
                                    <span>蓝色方</span>
                                </div>
                                <div class="red">
                                    <span></span>
                                    <span>红色方</span>
                                </div>
                                <div class="all">
                                    <span></span>
                                    <span>全部阵营</span>
                                </div>
                            </div>
                            <div class="name flex flex_end flex_only_center">
                                <p class="beyond-ellipsis"
                                    :title="(item.factions[1].faction === 'red' && item.factions[1].team_id === scoresData[1].team_id) ?
                                            scoresData[1].team_snapshot.full_name : scoresData[0].team_snapshot.full_name">
                                    {{
                                        (item.factions[1].faction === 'red' && item.factions[1].team_id === scoresData[1].team_id) ?
                                        scoresData[1].team_snapshot.name : scoresData[0].team_snapshot.name
                                    }}
                                </p>
                                <img :src="(item.factions[1].faction === 'red' && item.factions[1].team_id === scoresData[1].team_id) ?
                                        scoresData[1].team_snapshot.image : scoresData[0].team_snapshot.image">
                            </div>
                        </div>
                        <div class="battle flex flex_between">
                            <battle-team
                                :teamsData="item.factions[0].faction === 'blue'? item.factions[0]:item.factions[1]"
                            ></battle-team>
                            <battle-team
                                :teamsData="item.factions[1].faction === 'red'? item.factions[1]:item.factions[0]"
                            ></battle-team>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import filterBar from '@/components/detail/content/filter/filterBar'  // 筛选
    import tabNav from '@/components/common/tabNav'                       // tab切换
    import battleTeam from '@/components/detail/content/chart/battleTeam' // 战队
    export default {
        props: {
            battleData: {
                type: Array,
                default: () => []
            },
            scoresData: {
                type: Array,
                default: () => []
            },
            targetMatchId: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                filtersData: {
                    isText: false,
                    filterTitle: [   // 筛选条件
                        {
                            title: '查询时间范围'
                        }
                    ]
                },
                // 当前tab栏样式，
                // 1为首页橙色填充样式
                // 2,5为详情页蓝色边框样式
                // 3为详情页橙色填充样式
                // 4为详情直播按钮
                selectStyle: 5,
                navList: [
                    {
                        title: '选取'
                    },
                    {
                        title: '胜率'
                    },
                    {
                        title: '一血率'
                    },
                    {
                        title: '五杀率'
                    },
                    {
                        title: '十杀率'
                    },
                    {
                        title: '一血塔率'
                    },
                    {
                        title: '首小龙率'
                    },
                    {
                        title: '首峡谷先锋率'
                    },
                    {
                        title: '峡谷先锋控制率'
                    },
                    {
                        title: '元素巨龙控制率'
                    }
                ],
            }
        },
        components: {
            filterBar,
            tabNav,
            battleTeam
        }
    }
</script>

<style lang="less" scoped>
    .detail-battle {
        .content {
            width: 960px;
            margin-top: 2px;
            padding: 15px 10px;
            box-sizing: border-box;
            background-color: #fff;
            .teams {
                color: #333;
                font-size: 14px;
                font-weight: 600;
                padding: 20px 0 40px;
                .name {
                    width: 200px;
                    text-align: right;
                }
                img {
                    width: 24px;
                    height: 24px;
                    margin: 0 7px;
                }
                .block {
                    width: 360px;
                    height: 24px;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 24px;
                    border-radius:4px;
                    border: 1px solid #CFCFCF;
                    div {
                        span {
                            &:first-child {
                                width: 20px;
                                height: 8px;
                                border-radius: 4px;
                                display: inline-block;
                            }
                        }
                    }
                    .blue {
                        color: #2980D9;
                        span:first-child {
                            background-color: #2980D9;
                        }
                    }
                    .red {
                        color: #D94629;
                        span:first-child {
                            background-color: #D94629;
                        }
                    }
                    .all {
                        color: #5166A4;
                        span:first-child {
                            background-color: #5166A4;
                        }
                    }
                }
            }
        }
    }
</style>
