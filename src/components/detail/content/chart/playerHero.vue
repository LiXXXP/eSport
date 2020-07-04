<template>
    <div class="player-hero flex flex_between flex_only_center">
        <div class="list flex flex_start">
            <div v-for="item in heroList"
                :key="item.num">
                <img :src="item.url">
                <p>{{item.num}}</p>
            </div>
        </div>
        <div class="text">
            <p>常用英雄</p>
            <p>获胜次数/选取次数</p>
        </div>
        <div class="list flex flex_end">
            <div v-for="item in heroList"
                :key="item.num">
                <img :src="item.url">
                <p>{{item.num}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                heroList: [
                    {
                        num: '3/5',
                        url: require('../../../../assets/imgs/detail/2.png')
                    },
                    {
                        num: '2/4',
                        url: require('../../../../assets/imgs/detail/2.png')
                    },
                    {
                        num: '3/4',
                        url: require('../../../../assets/imgs/detail/2.png')
                    },
                    {
                        num: '2/5',
                        url: require('../../../../assets/imgs/detail/2.png')
                    },
                    {
                        num: '1/5',
                        url: require('../../../../assets/imgs/detail/2.png')
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .player-hero {
        margin-top: 25px;
        .list {
            div {
                width: 36px;
                margin-right: 6px;
                text-align: center;
                img {
                    width: 36px;
                    height: 36px;
                    border-radius: 100%;
                }
                p {
                    color: #878787;
                    font-size: 12px;
                }
            }
        }
        .text {
            color: #878787;
            line-height: 22px;
            text-align: center;
            position: relative;
            p:first-child {
                color: #101010;
                font-weight:bold;
            }
            &::before,
            &::after {
                content: '';
                height: 1px;
                width: 150px;
                display: block;
                background-color: #CFCFCF;
            }
            &::before {
                position: absolute;
                top: 20px;
                left: -130px;
            }
            &::after {
                position: absolute;
                top: 20px;
                left: 100px;
            }
        }
    }
</style>
