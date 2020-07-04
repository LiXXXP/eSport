<template>
    <div class="player-head">
        <div :class="['small flex',playerSeat? 'flex_end':'flex_start']">
            <div v-for="(item,index) in playerList"
                :key="item.id"
                :class="{active:currentIndex===index}"
                @click="getPlayer(index,item.url)">
                <img :src="item.url">
            </div>
        </div>
        <div :class="['big flex flex_start flex_only_center',
            {flex_row_reverse:playerSeat}]">
            <img :src="currentPlayer">
            <div>
                <div :class="['team flex flex_start flex_only_center',
                    {flex_row_reverse:playerSeat}]">
                    <img src="../../../../assets/imgs/detail/4.png">
                    <p>UZI</p>
                </div>
                <div :class="['country flex flex_start flex_only_center',
                    {flex_row_reverse:playerSeat}]">
                    <img src="../../../../assets/imgs/detail/q.png">
                    <p>何双龙</p>
                </div>
                <div class="text">(对局总数：258局)</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            playerSeat: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                currentIndex: 0,     // 当前index
                currentPlayer: require('../../../../assets/imgs/detail/head.png'),   // 当前选手
                playerList: [
                    {
                        id: 0,
                        url: require('../../../../assets/imgs/detail/head.png')
                    },
                    {
                        id: 1,
                        url: require('../../../../assets/imgs/detail/head.png')
                    },
                    {
                        id: 2,
                        url: require('../../../../assets/imgs/detail/head.png')
                    }
                ]
            }
        },
        methods: {
            getPlayer(index,url) {
                this.currentIndex = index
                this.currentPlayer = url
            }
        }
    }
</script>

<style lang="less" scoped>
    .player-head {
        width: 245px;
        margin: 15px 0;
        .small {
            div {
                width: 42px;
                height: 42px;
                cursor: pointer;
                border-radius: 50%;
                margin-right: 10px;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                }
                &::after {
                    content: '';
                    width: 100%;
                    height: 100%;
                    display: block;
                    border-radius: 50%;
                    background-color: rgba(232,232,232,.5);
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                &.active::after {
                    display: none;
                }
            }
        }
        .big {
            color: #101010;
            font-size: 16px;
            font-weight: 500;
            margin-top: 15px;
            & > img {
                width: 112px;
                height: 112px;
                margin-right: 6px;
                border-radius: 100%;
            }
            .team {
                img {
                    width: 18px;
                    height: 20px;
                    margin: 0 7px;
                }
            }
            .country {
                margin: 10px 0;
                img {
                    width: 20px;
                    height: 12px;
                    margin: 0 5px;
                }
            }
            .text {
                color: #878787;
                font-size: 14px;
            }
        }
    }
</style>
