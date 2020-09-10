<template>
    <div class="no-hero">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">最常禁用英雄</span>
        </div>
        <div class="hero">
            <filter-bar
                :filterData="filtersData"
            ></filter-bar>
            <div class="content">
                <div class="list flex flex_between flex_center"
                    v-for="item in heroList"
                    :key="item.title">
                    <div class="title beyond-ellipsis">
                        {{item.title}}
                    </div>
                    <div class="item flex flex_between flex_center"
                        v-for="key in item.list"
                        :key="key.id">
                        <img :src="key.url">
                        <div>
                            <p>禁用次数：17/30</p>
                            <p>禁用机率：68.3%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import filterBar from '@/components/detail/content/filter/filterBar'  // 筛选
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
                },
                heroList: [
                    {
                        title: 'Alliance',
                        list: [
                            {
                                id: 0,
                                url: require('../../../../assets/imgs/detail/2.png')
                            },
                            {
                                id: 1,
                                url: require('../../../../assets/imgs/detail/2.png')
                            },
                            {
                                id: 2,
                                url: require('../../../../assets/imgs/detail/2.png')
                            },
                            {
                                id: 3,
                                url: require('../../../../assets/imgs/detail/2.png')
                            },
                            {
                                id: 4,
                                url: require('../../../../assets/imgs/detail/2.png')
                            }
                        ]
                    },
                    {
                        title: 'Team.liquid',
                        list: [
                            {
                                id: 0,
                                url: require('../../../../assets/imgs/detail/2.png')
                            },
                            {
                                id: 1,
                                url: require('../../../../assets/imgs/detail/2.png')
                            },
                            {
                                id: 2,
                                url: require('../../../../assets/imgs/detail/2.png')
                            },
                            {
                                id: 3,
                                url: require('../../../../assets/imgs/detail/2.png')
                            },
                            {
                                id: 4,
                                url: require('../../../../assets/imgs/detail/2.png')
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            filterBar
        }
    }
</script>

<style lang="less" scoped>
    .no-hero {
        .content {
            width: 960px;
            padding: 0 10px;
            margin-top: 3px;
            box-sizing: border-box;
            background-color: #fff;
            .list {
                height: 58px;
                border-bottom: 1px solid #F2F2F2;
                .title {
                    width: 100px;
                    color: #434343;
                    font-size: 16px;
                    font-weight: bold;
                }
                .item {
                    width: 153px;
                    color: #434343;
                    img {
                        width: 36px;
                        height: 36px;
                    }
                }
            }
        }
    }
</style>
