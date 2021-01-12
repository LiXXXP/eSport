<template>
    <div class="logs-list">
        <div v-if="logsType === 'lol'">
            <div ref="chat_main">
                <div class="title">比赛日志：</div>
                <div class="lol-list">
                    <div class="item flex flex_start flex_only_center">
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
        </div>
        <div v-if="logsType === 'csgo'">
            <div class="csgo-list" ref="chat_main">
                <div v-for="item in logsData" :key="">
                    <div class="item flex flex_start flex_only_center"
                        v-if="item.event_type === 'round_start'">
                        <p>回合开始 （第{{item.round_ordinal}}回合）</p>
                    </div>
                    <div class="item flex flex_start flex_only_center"
                         v-if="item.killer && item.victim">
                        <p :class="{
                            blue:item.killer.side === 'ct',
                            yellow: item.killer.side === 'terrorist'
                        }">{{item.killer.nick_name}}</p>
                        <p>击杀了</p>
                        <p :class="{
                            blue:item.victim.side === 'ct',
                            yellow: item.victim.side === 'terrorist'
                        }">{{item.victim.nick_name}}</p>
                        <img :src="item.weapon.image">
                    </div>
                    <div class="item flex flex_start flex_only_center"
                        v-if="item.event_type === 'bomb_planted'">
                        <p :class="{
                            blue:item.side === 'ct',
                            yellow: item.side === 'terrorist'
                        }">{{item.nick_name}}</p>
                        <p>放置了炸弹</p>
                        <div class="flex flex_start">
                            ( <p class="blue">{{item.survived_players_ct}}</p>
                            on <p class="yellow">{{item.survived_players_t}}</p> )
                        </div>
                    </div>
                    <div class="item flex flex_start flex_only_center"
                        v-if="item.event_type === 'player_joined'">
                        <p>{{item.nick_name}} 进入游戏</p>
                    </div>
                    <div class="item flex flex_start flex_only_center"
                        v-if="item.event_type === 'player_suicide'">
                        <p>{{item.nick_name}} 自杀</p>
                    </div>
                    <div class="item flex flex_start flex_only_center"
                        v-if="item.event_type === 'round_end'">
                        <p>回合结束</p>
                        <div class="flex flex_start">
                            ( <p class="blue">{{item.ct_score}}</p>
                            on <p class="yellow">{{item.t_score}}</p> )
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            logsData: {
                type: Array,
                default: []
            },
            logsType: {
                type: String,
                default: ''
            }
        },
        data () {
            return {

            }
        },
        created() {
            let _this = this
            this.$nextTick(() => {
                _this.$refs.chat_main.scrollTop = _this.$refs.chat_main.scrollHeight
            })
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
