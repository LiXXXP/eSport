<template>
    <div class="logs-list">
        <div v-if="logsType === 'lol'">
            <div ref="chat_main">
                <div class="title">比赛日志：</div>
                <div class="lol-list flex flex_only_end" v-for="item in events" :key="item.position">

                    <span>{{durationTime(item.ingame_timestamp)}}</span>

                    <img :src="item.killer.champion.image.image">

                    <span :class="item.killer.faction">
                        {{item.killer.champion.name}}
                    </span>

                    <span v-if="item.event_type === 'building_kill'">
                        摧毁了
                    </span>

                    <span v-else>击杀了</span>

                    <img :src="item.victim.ingame_obj_type.champion.image.image" v-if="item.event_type === 'player_kill'">

                    <span :class="item.victim.ingame_obj_type.faction" v-if="item.event_type === 'building_kill'">
                        {{item.victim.ingame_obj_type.faction === 'blue'?'蓝':'红'}}方防御塔
                    </span>

                    <span v-if="item.first_event_type === 'first_dragon'">
                        元素巨龙 (首元素巨龙)
                    </span>

                    <span v-if="item.first_event_type === 'first_baron_nashor'">
                        纳什男爵 (首纳什男爵)
                    </span>

                    <span v-if="item.first_event_type === 'first_rift_herald'">
                        峡谷先锋 (首峡谷先锋)
                    </span>

                    <span v-if="item.first_event_type === 'first_inhibitor'">
                        水晶 (首水晶)
                    </span>

                    <span v-if="item.first_event_type === 'first_turret'">
                        (首塔)
                    </span>

                    <span v-if="item.first_event_type === 'first_blood'">
                        (首先获得一血)
                    </span>

                    <span v-if="item.first_event_type === 'first_to_5_kills'">
                        (首先获得五杀)
                    </span>

                    <span v-if="item.first_event_type === 'first_to_10_kills'">
                        (首先获得十杀)
                    </span>
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
            this.init()
        },
        methods: {
            init() {
                let _this = this
                this.$nextTick(() => {
                    _this.$refs.chat_main.scrollTop = _this.$refs.chat_main.scrollHeight
                })
            }
        },
        watch: {
            logsData() {
                this.init()
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
            span {
                color: #D3D3D3;
                &.red {
                    color: #C1200D;
                    padding-right: 5px;
                }
                &.blue {
                    color: #457CF4;
                    padding-right: 5px;
                }
            }
            img {
                width: 20px;
                height: 20px;
                margin: 0 5px;
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
