<template>
    <div class="index-tab flex flex_start">
        <!-- tab栏 -->
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
        ></tab-nav>
        <!-- 日历筛选 -->
        <date-picker></date-picker>
    </div>
</template>

<script>
    import tabNav from '@/components/common/tabNav'                    // tab切换自定义
    import datePicker from '@/components/index/content/tab/datePicker' // 日期选择
    export default {
        data() {
            return {
                // 当前tab栏样式，
                // 1为首页橙色填充样式
                // 2为详情页边框样式
                // 3为详情页蓝色填充样式
                selectStyle: 1,
                navList: [
                    {
                        id: 0,
                        title: '全部赛事'
                    },
                    {
                        id: 1,
                        title: '已结束赛事'
                    },
                    {
                        id: 2,
                        title: '我的收藏'
                    },
                    {
                        id: 3,
                        title: '赛事筛选'
                    }
                ]
            }
        },
        components: {
            tabNav,
            datePicker
        }
    }
</script>

<style lang="less" scoped>

</style>
