<template>
    <div class="play-progress">
        <div class="list flex flex_center"
            v-for="item in outputList"
            :key="item.head">
            <div class="left flex flex_only_center">
                <p>{{item.num1}}</p>
                <progress-bar
                    class="bar"
                    :progressData="carryData"
                ></progress-bar>
            </div>
            <p class="head">{{item.head}}</p>
            <div class="right flex flex_only_center">
                <progress-bar
                    class="bar"
                    :progressData="carryData"
                ></progress-bar>
                <p>{{item.num2}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'
    export default {
        data() {
            return {
                carryData: {           // 父组件向进度条子组件传参数据
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                    inside: false,     // 进度条显示文字是否在进度条内 true / false
                    width: 12,         // 进度条的高度
                    showText: false,   // 是否显示文字
                },
                outputList: [
                    {
                        head: '经济',
                        num1: 32,
                        num2: 28
                    },
                    {
                        head: '推塔',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '水晶',
                        num1: 32,
                        num2: 28
                    },
                    {
                        head: '小龙',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '远程营',
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
        .list {
            margin-bottom: 8px;
            .left {
                .bar {
                    width: 160px;
                    margin-left: 2px;
                    transform:rotate(180deg);
                }
                p {
                    width: 15px;
                    text-align: right;
                }
            }
            .head {
                width: 100px;
                color: #101010;
                text-align: center;
            }
            .right {
                .bar {
                    width: 160px;
                    margin-right: 2px;
                }
                p {
                    width: 15px;
                }
            }
        }
    }
</style>
