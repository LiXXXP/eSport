<template>
    <div class="play-detail">
        <div class="flex flex_between flex_only_center">
            <div class="flex flex_start flex_only_center">
                <img src="../../assets/imgs/1.png">
                <p>dddd</p>
            </div>
            <div class="flex flex_start flex_only_center">
                <i></i>
                <span>00:22:22</span>
            </div>
            <div class="flex flex_start flex_only_center">
                <p>lllll</p>
                <img src="../../assets/imgs/1.png">
            </div>
        </div>
        <div class="flex flex_between flex_center">
            <div class="flex flex_start flex_wrap">
                <img v-for="item in playList" 
                    :key="item.id"
                    :src="item.url"
                >
            </div>
            <div>
                <p>sss</p>
                <p>aaa</p>
            </div>
            <div class="flex flex_start flex_wrap">
                <img v-for="item in playList" 
                    :key="item.id"
                    :src="item.url"
                >
            </div>
        </div>
        <div>
            <div class="flex flex_start flex_center">
                <img src="../../assets/imgs/1.png">
                <div style="width:200px">
                    <progress-bar :progressData="carryData"></progress-bar>
                </div>
                <p>击杀</p>
                <div style="width:200px">
                    <progress-bar :progressData="carryData"></progress-bar>
                </div>
                <img src="../../assets/imgs/1.png">
            </div>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'      // 进度条
    export default {
        data() {
            return {
                carryData: {           // 父组件向进度条子组件传参数据 
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                },
                playList:[
                    {
                        id: 0,
                        url: require('../../assets/imgs/1.png')
                    },
                    {
                        id: 1,
                        url: require('../../assets/imgs/1.png')
                    },
                    {
                        id: 2,
                        url: require('../../assets/imgs/1.png')
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

</style>