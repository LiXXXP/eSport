<template>
    <div class="map-block">
        <canvas id="myCanvas"></canvas>
    </div>
</template>

<script>
    export default {
        props: {
            mapData: {
                type: Object,
                default: {}
            }
        },
        data () {
            return {

            }
        },
        mounted(){
            //绘制canvas图像
            // this.getCanvas()
        }
    }
</script>

<style lang="less" scoped>
    .map-block {
        width: 300px;
        height: 300px;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100%;
    }
</style>
