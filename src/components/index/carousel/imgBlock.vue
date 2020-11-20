<template>
    <div class="img-block flex flex_between">
        <a :href="spaceHref" target="_blank" v-if="spaceHref">
            <img :src="spaceUrl" class="space">
        </a>
        <img-carousel></img-carousel>
    </div>
</template>

<script>
    import imgCarousel from '@/components/index/carousel/imgCarousel'
    import { getFirstImage } from '@/scripts/request'
    export default {
        data() {
            return {
                spaceUrl: '',      // 广告位图片地址
                spaceHref: ''
            }
        },
        created() {
            this.getFirstImg()
        },
        methods: {
            getFirstImg() {
                let _this = this
                getFirstImage().then(res => {
                    if (res.code === 200) {
                        _this.spaceUrl = res.data[0].image_name
                        _this.spaceHref = res.data[0].jump_url
                    }
                })
            }
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
