<template>
    <div class="img-carousel flex flex_between">
        <div class="carousel-big">
            <transition name="fade" mode="out-in" appear type="transition">
                <img :src="carouselList[mainIndex].url">
            </transition>
        </div>
        <div class="carousel-small flex flex_column flex_between">
            <div :class="['list',{active:index===mainIndex}]"
                v-for="(item,index) in carouselList"
                :key="item.id"
                @click="cutCarousel(index)">
                <img :src="item.url">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mainIndex: 0,     // 图片轮播的当前索引
                timer: null,      // 轮播图定时器
                carouselList: [   // 轮播图片列表
                    {
                        id: 0,
                        url: require('../../../assets/imgs/index/b01.png')
                    },
                    {
                        id: 1,
                        url: require('../../../assets/imgs/index/b02.png')
                    },
                    {
                        id: 2,
                        url: require('../../../assets/imgs/index/b03.png')
                    },
                    {
                        id: 3,
                        url: require('../../../assets/imgs/index/b04.png')
                    }
                ]
            }
        },
        mounted() {
            this.timer = setInterval(() => {
                this.cutCarousel(this.nextIndex)
            }, 3000)
        },
        beforeDestroy() {
            if(this.timer) {
                clearInterval(this.timer)
                this.timer = null
            }
        },
        methods: {
            cutCarousel(index) {
                this.mainIndex = index
            }
        },
        computed: {
            nextIndex() {
                if(this.mainIndex == this.carouselList.length - 1) {
                    return 0;
                }else {
                    return this.mainIndex + 1;
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
