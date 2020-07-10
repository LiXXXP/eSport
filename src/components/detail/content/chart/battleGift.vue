<template>
    <div class="battle-gift">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">天赋</span>
        </div>
        <div class="gift flex flex_start flex_only_center">
            <div class="block"
                v-for="item in list"
                :key="item.id">
                <img src="../../../../assets/imgs/detail/3.png">
                <p>精密</p>
            </div>
        </div>
        <div class="gift flex flex_start flex_only_center">
            <div class="block"
                v-for="item in list"
                :key="item.id">
                <img src="../../../../assets/imgs/detail/3.png">
                <p>精密</p>
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
                    }
                ]
            }
        },
        components: {

        }
    }
</script>

<style lang="less" scoped>
    .battle-gift {
        .gift {
            .block {
                cursor: pointer;
                margin-right: 35px;
                img {
                    width: 56px;
                    height: 56px;
                    border-radius: 100%;
                    background-color: #2D3147;
                }
                p  {
                    color: #E97715;
                    font-size: 16px;
                    margin: 5px 0 30px;
                    text-align: center;
                }
                &:last-child {
                    margin-right: 0;
                }
                &:first-child {
                    img {
                        width: 68px;
                        height: 68px;
                    }
                }
            }
        }
    }
</style>
