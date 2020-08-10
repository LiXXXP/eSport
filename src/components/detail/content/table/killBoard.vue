<template>
    <div class="kill-board">
        <div class="item flex flex_start">
            <div class="block flex flex_center"
                v-for="item in list"
                :key="item.id"
            >
                <img :src="item.url" v-if="item.url">
            </div>
        </div>
        <div class="item flex flex_start">
            <div class="block flex flex_center"
                v-for="item in list"
                :key="item.id"
            >
                <img :src="item.url" v-if="item.url">
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
                        id: 0,
                        url: require('../../../../assets/imgs/detail/csgo/csgo_ct_win.png')
                    },
                    {
                        id: 1
                    },
                    {
                        id: 2
                    },
                    {
                        id: 3,
                        url: require('../../../../assets/imgs/detail/csgo/csgo_ct_win_dismantle.png')
                    },
                    {
                        id: 4,
                        url: require('../../../../assets/imgs/detail/csgo/csgo_ct_win_timeup.png')
                    },
                    {
                        id: 5
                    },
                    {
                        id: 6,
                        url: require('../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png')
                    },
                    {
                        id: 7
                    },
                    {
                        id: 8,
                        url: require('../../../../assets/imgs/detail/csgo/csgo_t_win_killAll.png')
                    },
                    {
                        id: 9
                    },
                    {
                        id: 10
                    },
                    {
                        id: 11
                    },
                    {
                        id: 12
                    },
                    {
                        id: 13
                    },
                    {
                        id: 14
                    },
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .kill-board {
        margin: 5px 0;
        padding: 30px 0;
        border-right: 1px solid #878787;
        .item {
            width: 470px;
            padding: 12px 5px;
            box-sizing: border-box;
            border-bottom: 1px solid #878787;
            .block {
                width: 20px;
                height: 20px;
                margin-left: 5px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            &:last-child {
                border-bottom: 0;
            }
        }
    }
</style>
