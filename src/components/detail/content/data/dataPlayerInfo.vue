<template>
    <div class="player-info">
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
        ></tab-nav>
        <div class="flex flex_between">
            <div>
                <!-- <player-head></player-head> -->
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
    import tabNav from '@/components/common/tabNav'                          // tab切换
    import playerHead from '@/components/detail/content/chart/playerHead'    // 选手头像部分
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
                ]
            }
        },
        components: {
            tabNav,
            playerHead
        }
    }
</script>

<style lang="less" scoped>
    .player-info {
        width: 923px;
        padding: 15px;
        box-sizing: border-box;
        background-color: #fff;
    }
</style>
