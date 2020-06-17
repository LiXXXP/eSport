<template>
    <div class="logs-list">
        <div class="title">比赛日志：</div>
        <div class="list">
            <div class="item flex flex_start flex_only_center"
                v-for="item in listData"
                :key="item.id">
                <p class="time">12:24</p>
                <div class="red flex flex_start flex_only_center">
                    <img src="../../../../assets/imgs/detail/2.png">
                    <p>Liquid.Marecle(猛犸人战士)</p>
                </div>
                <p>摧毁了</p>
                <div class="blue flex flex_start flex_only_center">
                    <img src="../../../../assets/imgs/detail/2.png">
                    <p>蓝色防御塔</p>
                </div>
                <div class="help flex flex_start flex_only_center">
                    <p>助攻</p>
                    <img src="../../../../assets/imgs/detail/2.png">
                    <img src="../../../../assets/imgs/detail/2.png">
                    <img src="../../../../assets/imgs/detail/2.png">
                    <img src="../../../../assets/imgs/detail/2.png">
                </div>
                <p class="type">(摧毁第一个防御塔)</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                listData: [
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
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .logs-list {
        color: #fff;
        font-size: 14px;
        .title {
            height: 36px;
            font-size: 16px;
            line-height: 36px;
            padding-left: 25px;
            border-bottom: 1px solid #fff;
        }
        .list {
            height: 171px;
            overflow-y: auto;
            padding-left: 25px;
            &::-webkit-scrollbar {
                width: 14px;
                background-color: #3D4974;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 7px;
                background-color: #526296;
            }
            .item {
                margin: 8px 0;
                .time {
                    width: 45px;
                    margin-right: 13px;
                }
                .red {
                    img {
                        width: 32px;
                        height: 32px;
                        margin-left: 7px;
                        border-radius: 100%;
                        border: 1px solid #FF1E00;
                    }
                    p {
                        margin: 0 7px;
                        color: #FF1E00;
                    }
                }
                .blue {
                    img {
                        width: 32px;
                        height: 32px;
                        margin-left: 7px;
                        border-radius: 100%;
                        border: 1px solid #228EFC;
                    }
                    p {
                        margin: 0 7px;
                        color: #228EFC;
                    }
                }
                .help {
                    img {
                        width: 24px;
                        height: 24px;
                        margin-left: 3px;
                        border-radius: 100%;
                    }
                }
                .type {
                    margin-left: 7px;
                }
            }
        }
    }
</style>
