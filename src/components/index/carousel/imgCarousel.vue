<template>
    <div class="img-carousel flex flex_between">
        <div class="carousel-big" v-if="carouselList.length !== 0">
            <transition name="fade" mode="out-in" appear type="transition">
                <a :href="carouselList[mainIndex].jump_url" target="_blank">
                    <img :src="carouselList[mainIndex].image">
                </a>
            </transition>
        </div>
        <div class="carousel-small flex flex_column flex_between">
            <div :class="['list',{active:index===mainIndex}]"
                v-for="(item,index) in carouselList"
                :key="item.id"
                @click="cutCarousel(index)">
                <img :src="item.image" :title="item.image_name">
            </div>
        </div>
    </div>
</template>

<script>
    import { getCarousel } from '@/scripts/request'
    export default {
        data() {
            return {
                mainIndex: 0,     // 图片轮播的当前索引
                timer: null,      // 轮播图定时器
                carouselList: [],  // 轮播图片列表
            }
        },
        created() {
            this.getCarouselImg()
        },
        mounted() {
            this.timer = setInterval(() => {
                this.cutCarousel(this.nextIndex)
            }, 3500)
        },
        beforeDestroy() {
            if(this.timer) {
                clearInterval(this.timer)
                this.timer = null
            }
        },
        methods: {
            getCarouselImg() {
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
                getCarousel(params).then(res => {
                    if (res.code === 200) {
                        _this.carouselList = res.data
                    }
                })
            },
            cutCarousel(index) {
                this.mainIndex = index
            }
        },
        computed: {
            nextIndex() {
                if(this.mainIndex === this.carouselList.length - 1) {
                    return 0
                }else {
                    return this.mainIndex + 1
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .img-carousel {
        width: 980px;
        height: 360px;
        .carousel-big {
            width: 778px;
            cursor: pointer;
            img {
                width: 778px;
                height: 360px;
            }
        }
        .carousel-small {
            .list {
                width: 190px;
                height: 85px;
                cursor: pointer;
                box-sizing: border-box;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .list.active {
                border: 1px solid #FF7800;
                &::before {
                    content: "";
                    width: 0;
                    height: 0;
                    border-top: 8px solid transparent;
                    border-right: 8px solid #FF7800;
                    border-bottom: 8px solid transparent;
                    position: absolute;
                    top: 50%;
                    left: -8px;
                    margin-top: -4px;
                }
            }
        }
    }
</style>
