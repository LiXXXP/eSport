<template>
    <div class="battle-rank">
        <drop-down class="drop"></drop-down>
        <div class="list flex flex_between"
            v-for="item in list"
            :key="item.id">
            <img src="../../../../assets/imgs/detail/2.png">
            <div class="right">
                <div class="flex flex_between"
                    :style="{'color':item.color}">
                    <span>RNG.UIZ</span>
                    <span>22354</span>
                </div>
                <progressBar
                    :progressData="playContrast"
                    :progressColor="item.color"
                    :progressRate="77"
                ></progressBar>
            </div>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'
    import dropDown from '@/components/common/dropDown'
    export default {
        data() {
            return {
                playContrast: {        // 进度条配置参数
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                    inside: false,     // 进度条显示文字是否在进度条内 true / false
                    width: 8,          // 进度条的高度
                    showText: false,   // 是否显示文字
                },
                list: [
                    {
                        id: 0,
                        color: '#2980D9'
                    },
                    {
                        id: 1,
                        color: '#CC5728'
                    },
                    {
                        id: 2,
                        color: '#2980D9'
                    },
                    {
                        id: 3,
                        color: '#CC5728'
                    },
                    {
                        id: 4,
                        color: '#2980D9'
                    },
                    {
                        id: 5,
                        color: '#CC5728'
                    },
                    {
                        id: 6,
                        color: '#2980D9'
                    },
                    {
                        id: 7,
                        color: '#CC5728'
                    },
                    {
                        id: 8,
                        color: '#2980D9'
                    },
                    {
                        id: 9,
                        color: '#CC5728'
                    }
                ]
            }
        },
        components: {
            progressBar,
            dropDown
        }
    }
</script>

<style lang="less" scoped>
    .battle-rank {
        width: 240px;
        height: 427px;
        padding: 15px;
        box-sizing: border-box;
        background-color: #fff;
        .drop {
            padding: 5px 10px;
            margin-bottom: 18px;
            .el-dropdown {
                font-size: 14px;
            }
        }
        .list {
            margin-bottom: 5px;
            img {
                width: 30px;
                height: 30px;
            }
            .right {
                width: 170px;
                font-size: 12px;
                span {
                    margin-bottom: 4px;
                }
            }
        }
    }
</style>
