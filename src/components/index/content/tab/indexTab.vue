<template>
    <div class="index-tab">
        <div class="flex flex_start">
            <!-- tab栏 -->
            <tab-nav
                :navData="navList"
                :selectStyle="selectStyle"
                @clickIndex="openEvents"
            ></tab-nav>
            <!-- 日历筛选 -->
            <date-picker></date-picker>
        </div>
        <!-- 赛事筛选 -->
        <event-select
            v-if="isEvent"
            @closeEvent="closeEvent"
        ></event-select>
    </div>
</template>

<script>
    import tabNav from '@/components/common/tabNav'                    // tab切换自定义
    import datePicker from '@/components/index/content/tab/datePicker' // 日期选择
    import eventSelect from '@/components/index/content/tab/eventSelect' // 赛事筛选
    export default {
        data() {
            return {
                // 当前tab栏样式，
                // 1为首页橙色填充样式
                // 2为详情页边框样式
                // 3为详情页蓝色填充样式
                selectStyle: 1,
                isEvent: false,     // 是否打开赛事筛选
                navList: [
                    {
                        title: '全部比赛'
                    },
                    {
                        title: '已结束比赛'
                    },
                    {
                        title: '我的收藏'
                    },
                    {
                        title: '赛事筛选'
                    }
                ]
            }
        },
        mounted() {
            document.addEventListener('click', (e) => {
                if (!this.$el.contains(e.target)) this.isEvent = false
            })
        },
        methods: {
            openEvents(val) {
                this.$store.commit('allMatch', 0)
                this.$store.commit('collectStatus', 2)
                switch(val) {
                    case 0:
                        this.$store.commit('allMatch', 1)
                        break
                    case 1:
                        this.$store.commit('allMatch', 2)
                        break
                    case 2:
                        this.$store.commit('collectStatus', 1)
                        break
                    case 3:
                        this.isEvent = !this.isEvent
                        break
                    default:
                        break
                }
            },
            closeEvent(val) {
                this.isEvent = val
            }
        },
        components: {
            tabNav,
            datePicker,
            eventSelect
        }
    }
</script>

<style lang="less" scoped>
    .index-tab {
        position: relative;
    }
</style>
