<template>
    <div class="logs-list">
        <div v-if="type === 'lol'">
            <div class="title">比赛日志：</div>
            <div class="lol-list">
                <div class="item flex flex_start flex_only_center"
                    v-for="item in listData"
                    :key="item.id"
                >
                    <p class="time">12:24</p>
                    <div class="red flex flex_start flex_only_center">
                        <img src="../../../../assets/imgs/detail/2.png">
                        <p>Liquid.Marecle(猛犸人战士)</p>
                    </div>
                    <p>摧毁了</p>
                    <div class="blue flex flex_start flex_only_center">
                        <img src="../../../../assets/imgs/detail/2.png">
                        <p>蓝色防御塔，</p>
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
        <div v-if="type === 'csgo'">
            <div class="csgo-list">
                <div class="item flex flex_start flex_only_center"
                    v-for="item in listData"
                    :key="item.id"
                >
                    <p class="blue">SyrsoN</p>
                    <p>击杀了</p>
                    <p class="yellow">Pronax</p>
                    <p class="info">(爆头)</p>
                    <img src="../../../../assets/imgs/detail/csgo/ak47.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                type: 'csgo',
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
        .lol-list {
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
                        color: #228EFC;
                        margin-left: 7px;
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
        .csgo-list {
            height: 200px;
            overflow-y: auto;
            padding: 15px 20px;
            box-sizing: border-box;
            &::-webkit-scrollbar {
                width: 14px;
                background-color: #1B1F29;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 7px;
                background-color: #1B1F29;
            }
            .item {
                margin-bottom: 10px;
                p {
                    font-size: 16px;
                    padding: 0 3px;
                    &.blue {
                        color: #008BD3;
                    }
                    &.yellow {
                        color: #F6B600;
                    }
                    &.info {
                        color: #D94629;
                    }
                }
                img {
                    width: auto;
                    height: 18px;
                    margin-left: 10px;
                }
            }
        }
    }
</style>
