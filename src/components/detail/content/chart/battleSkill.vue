<template>
    <div class="battle-shill">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">技能</span>
        </div>
        <div class="skill flex flex_start flex_wrap">
            <div class="block"
                v-for="item in list"
                :key="item.id">
                <div class="image">
                    <img src="../../../../assets/imgs/detail/3.png">
                    <span>Q</span>
                </div>
                <p>Lv.1</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
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
        },
        components: {

        }
    }
</script>

<style lang="less" scoped>
    .battle-shill {
        .skill {
            .block {
                margin-right: 3px;
                margin-bottom: 16px;
                &:nth-child(9n) {
                    margin-right: 0;
                }
                p {
                    color: #878787;
                    margin-top: 5px;
                    font-weight: 600;
                    text-align: center;
                }
                .image {
                    width: 46px;
                    height: 46px;
                    cursor: pointer;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    span {
                        color: #fff;
                        padding: 0 2px;
                        font-size: 12px;
                        background-color: #000;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                    }
                }
            }
        }
    }
</style>
