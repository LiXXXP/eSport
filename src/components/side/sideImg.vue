<template>
    <div class="side-img">
        <a :href="imgHref" target="_blank" v-if="imgHref">
            <img :src="imgUrl">
        </a>
    </div>
</template>

<script>
    import { getThirdImage } from '@/scripts/request'
    export default {
        data() {
            return {
                imgUrl: '',
                imgHref: ''
            }
        },
        created() {
            this.getThirdImg()
        },
        methods: {
            getThirdImg() {
                let _this = this
                let params
                if(window.location.host.includes('cn')) {
                    params = {
                        order: 1
                    }
                } else {
                    params = {
                        order: 2
                    }
                }
                getThirdImage(params).then(res => {
                    if (res.code === 200) {
                        _this.imgUrl = res.data[0].image_name
                        _this.imgHref = res.data[0].jump_url
                    }
                })
            }
        },
    }
</script>

<style lang="less" scoped>
    .side-img {
        width: 205px;
        height: 120px;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
