<template>
    <div class="data-history">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">历史交锋记录</span>
        </div>
        <div class="content">
            <div class="team">
                <div class="title flex flex_between flex_center">
                    <div class="flex flex_start flex_center">
                        <img src="../../../../assets/imgs/detail/4.png">
                        <p>Immortal Gaming</p>
                    </div>
                    <div class="chessboard flex flex_start">
                        <div>
                            <p class="score">8</p>
                            <p class="plays">24-9</p>
                            <p>获胜</p>
                        </div>
                        <div>
                            <p class="score">2</p>
                            <p class="plays">3-3</p>
                            <p>平局</p>
                        </div>
                        <div>
                            <p class="score">4</p>
                            <p class="plays">21-6</p>
                            <p>获胜</p>
                        </div>
                    </div>
                    <div class="flex flex_start flex_center">
                        <p>Newbee.young</p>
                        <img src="../../../../assets/imgs/detail/4.png">
                    </div>
                </div>
                <div>
                    <collapse-board
                        :blockType="'long'"
                    ></collapse-board>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import collapseBoard from '@/components/common/collapseBoard'      // 折叠面板
    export default {
        data() {
            return {

            }
        },
        components: {
            collapseBoard
        }
    }
</script>

<style lang="less" scoped>
    .data-history {
        .content {
            width: 960px;
            .team {
                width: 960px;
                background-color: #fff;
                .title {
                    height: 72px;
                    font-size: 16px;
                    font-weight: bold;
                    box-sizing: border-box;
                    .chessboard {
                        font-weight: 400;
                        div {
                            padding: 0 30px;
                            text-align: center;
                            position: relative;
                            &:nth-child(2)::before,
                            &:nth-child(2)::after {
                                width: 1px;
                                height: 40px;
                                content: '';
                                display: block;
                                background-color: #E3E3E3;
                                position: absolute;
                            }
                            &:nth-child(2)::before {
                                left: 0;
                                top: 50%;
                                transform: translate(0, -50%);
                            }
                            &:nth-child(2)::after {
                                right: 0;
                                top: 50%;
                                transform: translate(0, -50%);
                            }
                            p {
                                font-size: 12px;
                                &.score {
                                    color: #37AC60;
                                    font-size: 18px;
                                    font-weight: 600;
                                }
                                &.plays {
                                    color: #878787;
                                }
                            }
                        }
                    }
                    img {
                        width: 30px;
                        height: 30px;
                        margin: 0 10px;
                    }
                }
            }
        }
    }
</style>

<style lang="less">
    .data-history {
        .el-collapse-item__header {
            justify-content: space-between;
            .el-collapse-item__arrow {
                margin: 0;
                margin-right: 10px;
            }
        }
        .el-collapse-item__content {
            padding-bottom: 0;
        }
    }
</style>
