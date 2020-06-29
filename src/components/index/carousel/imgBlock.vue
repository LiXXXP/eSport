<template>
    <div class="img-block flex flex_between">
        <img :src="spaceUrl" class="space">
        <img-carousel></img-carousel>
    </div>
</template>

<script>
    import imgCarousel from '@/components/index/carousel/imgCarousel'
    export default {
        data() {
            return {
                spaceUrl: require('../../../assets/imgs/index/s.png'),      // 广告位图片地址
            }
        },
        methods: {

        },
        components: {
            imgCarousel
        }
    }
</script>

<style lang="less" scoped>
    .img-block {
        margin-bottom: 14px;
        .space {
            width: 205px;
            height: 360px;
        }
    }
</style>
