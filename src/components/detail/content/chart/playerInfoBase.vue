<template>
    <div class="player-info">
        <div class="flex flex_between">
            <player-head
                :typeBase="true"
                :playerSeat="true"
            ></player-head>
            <player-head
                :typeBase="true"
                :playerSeat="false"
            ></player-head>
        </div>
        <div class="diagram flex flex_wrap flex_start">
            <diagram-bar
                class="bar"
                :diagramData="item.title"
                v-for="item in diagramList"
                :key="item.title"
            ></diagram-bar>
        </div>
    </div>
</template>

<script>
    import playerHead from '@/components/detail/content/chart/playerHead'   // 选手头像部分
    import diagramBar from '@/components/detail/content/chart/diagramBar'   // 条形图
    export default {
        data() {
            return {
                playContrast: {        // 进度条配置参数
                    barType: 'circle',   // 所需进度条类型：line为条状，circle为圆状
                },
                diagramList: [
                    {
                        title: '平均参团率'
                    },
                    {
                        title: 'KDA'
                    },
                    {
                        title: '分均补刀'
                    },
                    {
                        title: '分均承伤'
                    },
                    {
                        title: '平均伤害转化率'
                    },
                    {
                        title: '峡谷先锋控制率'
                    },
                    {
                        title: '元素巨龙控制率'
                    }
                ]
            }
        },
        components: {
            playerHead,
            diagramBar,
        }
    }
</script>

<style lang="less" scoped>
    .player-info {
        .diagram {
            .bar {
                margin: 0 30px 25px 0;
                &:nth-child(3n) {
                    margin-right: 0;
                }
            }
        }
    }
</style>

<style lang="less">
    .player-info {
        .el-progress__text {
            color: #101010;
            font-weight: 600;
            top: 45%;
        }
    }
</style>
