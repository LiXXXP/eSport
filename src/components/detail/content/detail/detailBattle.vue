<template>
    <div class="detail-battle">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">阵容分析</span>
        </div>
        <div class="player">
            <filter-bar :filterData="filterTitle"></filter-bar>
            <div class="content">
                <tab-nav
                    :selectStyle="selectStyle"
                    :navData="navList"
                ></tab-nav>
            </div>
        </div>
    </div>
</template>

<script>
    import filterBar from '@/components/detail/content/filter/filterBar'  // 筛选
    import tabNav from '@/components/common/tabNav'                       // tab切换
    export default {
        data() {
            return {
                filterTitle: [   // 筛选条件
                    {
                        title: '查询时间范围'
                    }
                ],
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
            tabNav
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
        }
    }
</style>
