<template>
    <div class="play-score">
        <div class="flex flex_between">
            <div class="play-header flex flex_start flex_only_center">
                <i class="play-header-bar"></i>
                <span class="play-header-text">当前比分</span>
            </div>
            <div class="tips">
                <i class="iconfont icon-jinggao"></i>
                报告网站错误数据
            </div>
        </div>
        <div class="content flex flex_between">
            <div class="flex flex_center">
                <img src="../../../../assets/imgs/detail/4.png">
                <p>Astralis</p>
            </div>
            <div class="score flex flex_center">
                <div class="bar flex flex_start">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p class="left">2</p>
                <p>:</p>
                <p class="right">0</p>
                <div class="bar flex flex_start">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="flex flex_center">
                <p>Astralis</p>
                <img src="../../../../assets/imgs/detail/4.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .play-score {
        .tips {
            color: #878787;
            margin-top: 24px;
        }
        .content {
            width: 960px;
            height: 58px;
            color: #101010;
            padding: 0 30px;
            font-size: 18px;
            margin-bottom: 12px;
            box-sizing: border-box;
            background-color: #fff;
            img {
                width: 38px;
                height: 42px;
                margin: 0 14px;
            }
            .score {
                color:#3D3D3D;
                font-size: 30px;
                p {
                    margin: 0 5px;
                    &.left {
                        color: #12BF12;
                        margin-left: 30px;
                    }
                    &.right {
                        color: #E74E11;
                        margin-right: 30px;
                    }
                }
                .bar {
                    div {
                        width:3px;
                        height:20px;
                        margin-right: 3px;
                        background-color: #E7E7E7;
                    }
                }
            }
        }
    }
</style>
