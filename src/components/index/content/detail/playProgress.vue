<template>
    <div class="play-progress">
        <div class="list flex flex_center"
            v-for="item in outputList"
            :key="item.head">
            <div class="icons flex flex_start flex_only_center">
                <el-tooltip placement="top">
                    <div slot="content">
                        <img src="../../../../assets/imgs/detail/t.png" class="tip">
                    </div>
                    <el-button><img src="../../../../assets/imgs/index/icon08.png"></el-button>
                </el-tooltip>
                <el-tooltip placement="top">
                    <div slot="content">
                        <img src="../../../../assets/imgs/detail/t.png" class="tip">
                    </div>
                    <el-button><img src="../../../../assets/imgs/index/icon08.png"></el-button>
                </el-tooltip>
            </div>
            <div class="left flex flex_only_center">
                <p :style="{'color': barColor.left}">
                    {{item.num1}}
                </p>
                <progress-bar
                    class="bar"
                    :progressData="playContrast"
                    :progressColor="barColor.left"
                    :progressRate="parseInt(item.num1/(item.num1+item.num2)*100)"
                ></progress-bar>
            </div>
            <p class="head">{{item.head}}</p>
            <div class="right flex flex_only_center">
                <progress-bar
                    class="bar"
                    :progressData="playContrast"
                    :progressColor="barColor.right"
                    :progressRate="parseInt(item.num2/(item.num1+item.num2)*100)"
                ></progress-bar>
                <p :style="{'color': barColor.right}">
                    {{item.num2}}
                </p>
            </div>
            <div class="icons flex flex_start flex_only_center">
                <el-tooltip placement="top">
                    <div slot="content">
                        <img src="../../../../assets/imgs/detail/t.png" class="tip">
                        <img src="../../../../assets/imgs/detail/t.png" class="tip">
                    </div>
                    <el-button><img src="../../../../assets/imgs/index/icon08.png"></el-button>
                </el-tooltip>
                <el-tooltip placement="top">
                    <div slot="content">
                        <img src="../../../../assets/imgs/detail/t.png" class="tip">
                    </div>
                    <el-button><img src="../../../../assets/imgs/index/icon08.png"></el-button>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'
    export default {
        props: {
            barColor: {
                type: Object,
                default: null
            },
        },
        data() {
            return {
                playContrast: {        // 进度条配置参数
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                    inside: false,     // 进度条显示文字是否在进度条内 true / false
                    width: 12,         // 进度条的高度
                    showText: false,   // 是否显示文字
                },
                outputList: [
                    {
                        head: '击杀',
                        num1: 7,
                        num2: 28
                    },
                    {
                        head: '经济(k)',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '推塔',
                        num1: 32,
                        num2: 28
                    },
                    {
                        head: '水晶',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '峡谷先锋',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '元素巨龙',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '纳什男爵',
                        num1: 8,
                        num2: 5
                    }
                ]
            }
        },
        components: {
            progressBar
        }
    }
</script>

<style lang="less" scoped>
    .play-progress {
        margin-top: 10px;
        padding-top: 20px;
        border-top: 1px solid #CFCFCF;
        .list {
            margin-bottom: 13px;
            .left {
                .bar {
                    width: 160px;
                    margin-left: 2px;
                    transform:rotate(180deg);
                }
                p {
                    width: 15px;
                    margin-right: 3px;
                    margin-left: 12px;
                    text-align: center;
                }
            }
            .head {
                width: 109px;
                color: #101010;
                font-size: 16px;
                text-align: center;
            }
            .right {
                .bar {
                    width: 160px;
                    margin-right: 2px;
                }
                p {
                    width: 15px;
                    margin-left: 3px;
                    margin-right: 12px;
                    text-align: center;
                }
            }
        }
        .icons {
            img {
                width: 20px;
                height: 20px;
            }
            .tip {
                width: 15px;
                height: 17px;
                margin-right: 2px;
            }
        }
    }
</style>

<style lang="less">
    .play-progress {
        .el-button {
            border: 0;
            padding: 0;
            line-height: 0;
            margin-left: 3px;
            &:hover {
                background-color: #fff;
            }
        }
    }
</style>
