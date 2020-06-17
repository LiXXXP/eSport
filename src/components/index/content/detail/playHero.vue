<template>
    <div class="play-hero flex flex_wrap flex_start">
        <div class="hero"
            v-for="item in heroList"
            :key="item.id"
        >
            <img src="../../../../assets/imgs/detail/2.png">
            <span>1</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                heroList: [
                    {
                        id: 0
                    },
                    {
                        id: 1
                    },
                    {
                        id: 2
                    },
                    {
                        id: 3
                    },
                    {
                        id: 4
                    },
                    {
                        id: 5
                    },
                    {
                        id: 6
                    },
                    {
                        id: 7
                    },
                    {
                        id: 8
                    },
                    {
                        id: 9
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .play-hero {
        width: 320px;
        .hero {
            width: 54px;
            height: 55px;
            margin: 9px 9px 0 0;
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
    }
</style>
