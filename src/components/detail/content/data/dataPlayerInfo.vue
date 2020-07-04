<template>
    <div class="player-info">
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
        ></tab-nav>
        <div class="flex flex_between">
            <div>
                <player-head
                    :playerSeat="false"
                ></player-head>
                <state-list
                    :playerSeat="false"
                ></state-list>
                <div class="progress">
                    <div class="circle">
                        <progress-bar
                            :progressData="playContrast"
                            :progressColor="'#2980D9'"
                            :progressRate="77"
                        ></progress-bar>
                        <p>胜率</p>
                    </div>
                    <p>
                        <span>22胜6负</span>
                        <span>(实际显示28局)</span>
                    </p>
                </div>
            </div>
            <div class="diagram">
                <diagram-bar
                    :diagramData="item.title"
                    v-for="item in diagramList"
                    :key="item.title"
                ></diagram-bar>
            </div>
            <div>
                <player-head
                    :playerSeat="true"
                ></player-head>
                <div class="flex flex_end">
                    <state-list
                        :playerSeat="true"
                    ></state-list>
                </div>
                <div class="flex flex_end">
                    <div class="progress">
                        <div class="circle">
                            <progress-bar
                                :progressData="playContrast"
                                :progressColor="'#D94629'"
                                :progressRate="77"
                            ></progress-bar>
                            <p>胜率</p>
                        </div>
                        <p>
                            <span>22胜6负</span>
                            <span>(实际显示28局)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <player-hero></player-hero>
    </div>
</template>

<script>
    import tabNav from '@/components/common/tabNav'                          // tab切换
    import playerHead from '@/components/detail/content/chart/playerHead'    // 选手头像部分
    import stateList from '@/components/detail/content/chart/stateList'      // 胜负标记
    import progressBar from '@/components/common/progressBar'                // 环形进度条
    import diagramBar from '@/components/detail/content/chart/diagramBar'    // 条形图
    import playerHero from '@/components/detail/content/chart/playerHero'    // 常用英雄
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
            tabNav,
            playerHead,
            stateList,
            progressBar,
            diagramBar,
            playerHero
        }
    }
</script>

<style lang="less" scoped>
    .player-info {
        width: 923px;
        padding: 15px;
        box-sizing: border-box;
        background-color: #fff;
        .progress {
            width: 204px;
            text-align: center;
            .circle {
                position: relative;
                p {
                    color: #878787;
                    font-size: 16px;
                    font-weight: 600;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            p {
                color: #101010;
                margin-top: 10px;
                font-weight: 600;
                span:nth-child(2) {
                    color: #878787;
                    font-size: 12px;
                    font-weight: 400;
                }
            }
        }
        .diagram {
            padding-top: 65px;
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
