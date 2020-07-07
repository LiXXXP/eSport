<template>
    <div class="player-info">
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
            @clickIndex="getIndex"
        ></tab-nav>
        <player-info-main v-if="currentIndex===0"></player-info-main>
        <player-info-base v-if="currentIndex===1"></player-info-base>
    </div>
</template>

<script>
    import tabNav from '@/components/common/tabNav'                                // tab切换
    import playerInfoMain from '@/components/detail/content/chart/playerInfoMain'  // 主要数据
    import playerInfoBase from '@/components/detail/content/chart/playerInfoBase'  // 基础数据
    export default {
        data() {
            return {
                // 当前tab栏样式，
                // 1为首页橙色填充样式
                // 2为详情页蓝色边框样式
                // 3为详情页橙色填充样式
                // 4为详情直播按钮
                selectStyle: 2,
                navList: [
                    {
                        title: '上单'
                    },
                    {
                        title: '打野'
                    },
                    {
                        title: '中单'
                    },
                    {
                        title: 'ADC'
                    },
                    {
                        title: '辅助'
                    }
                ],
                currentIndex: 0,   // 当前index
            }
        },
        methods: {
            getIndex(val) {
                this.currentIndex = val
            }
        },
        components: {
            tabNav,
            playerInfoMain,
            playerInfoBase
        }
    }
</script>

<style lang="less" scoped>
    .player-info {
        padding: 15px;
        box-sizing: border-box;
        background-color: #fff;
    }
</style>
