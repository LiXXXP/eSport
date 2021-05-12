<template>
    <div class="play-progress">
        <div class="list flex flex_center"
            v-for="item in outputData"
            :key="item.head">
            <div class="icons flex flex_start flex_only_center"
                v-if="item.imgs">
                <div v-for="key in item.imgs"
                    :key="key.type" class="tooltip">
                    <el-tooltip placement="top"
                        v-if="key.faction === 'blue'">
                        <div slot="content">
                            {{key.info}} - {{durationTime(key.ingame || 0)}}
                        </div>
                        <el-button>
                            <img :src="key.url" class="tip">
                        </el-button>
                    </el-tooltip>
                </div>
            </div>
            <div class="left flex flex_only_center">
                <p style="color: #2980D9;">
                    {{item.num1==null?'-':thousands(parseInt(item.num1))}}
                </p>
                <progress-bar
                    class="bar"
                    :progressData="playContrast"
                    :progressColor="'#2980D9'"
                    :progressRate="parseInt(item.num1/(item.num1+item.num2)*100 || 0)"
                ></progress-bar>
            </div>
            <p class="head">{{item.head}}</p>
            <div class="right flex flex_only_center">
                <progress-bar
                    class="bar"
                    :progressData="playContrast"
                    :progressColor="'#CC5728'"
                    :progressRate="parseInt(item.num2/(item.num1+item.num2)*100 || 0)"
                ></progress-bar>
                <p style="color: #CC5728;">
                    {{item.num2==null?'-':thousands(parseInt(item.num2))}}
                </p>
            </div>
            <div class="icons flex flex_start flex_only_center"
                v-if="item.imgs">
                <div v-for="key in item.imgs"
                    :key="key.type" class="tooltip">
                    <el-tooltip placement="top"
                        v-if="key.faction === 'red'">
                        <div slot="content">
                            {{key.info}} - {{durationTime(key.ingame || 0)}}
                        </div>
                        <el-button>
                            <img :src="key.url" class="tip">
                        </el-button>
                    </el-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'

    import {formatNumber, formatSeconds} from '@/scripts/utils'

    export default {
        props: {
            outputData: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                playContrast: {        // 进度条配置参数
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                    inside: false,     // 进度条显示文字是否在进度条内 true / false
                    width: 12,         // 进度条的高度
                    showText: false,   // 是否显示文字
                }
            }
        },
        computed: {
            thousands(num) {
                return function (num) {
                    return formatNumber(num)
                }
            },
            durationTime(sec) {
                return function(sec) {
                    return formatSeconds(sec)
                }
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
                    width: 30px;
                    margin: 0 10px;
                    text-align: right;
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
                    width: 30px;
                    margin: 0 10px;
                }
            }
        }
        .icons {
            .tooltip {
                width: 20px;
                height: 20px;
                margin: 0 2px;
                &:nth-child(3) {
                    .tip {
                        width: 14px;
                        height: 18px;
                        margin-top: 1px;
                    }
                }
                .tip {
                    width: 20px;
                    height: 20px;
                }
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
