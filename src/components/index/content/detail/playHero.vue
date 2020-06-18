<template>
    <div :class="['play-hero flex flex_wrap flex_start',
          {flex_row_reverse:seatData}]">
        <div :class="['hero',
            sizeData==='dota'?'dota-size':'lol-size']"
            v-for="item in heroData"
            :key="item.id"
        >
            <img src="../../../../assets/imgs/detail/2.png">
            <span>1</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            sizeData: {
                type: String,
                default: ''
            },
            seatData: {
                type: Boolean,
                default: true
            },
            heroData: {
                type: Array,
                default: []
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .play-hero {
        .hero {
            margin-top: 9px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            span {
                width: 16px;
                height: 16px;
                color: #878787;
                font-size: 12px;
                line-height: 16px;
                text-align: center;
                border-radius: 100%;
                background-color: #fff;
                position: absolute;
                bottom: -8px;
                left: 50%;
                margin-left: -8px;
            }
        }
        .dota-size {
            width: 55px;
            height: 35px;
            margin-right: 5px;
        }
        .lol-size {
            width: 54px;
            height: 55px;
            margin-right: 9px;
        }
    }
</style>
