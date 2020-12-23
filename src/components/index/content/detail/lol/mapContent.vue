<template>
    <div class="map-content">
        <div class="top" v-if="framesData != null">
            <div class="head">
                <div class="flex flex_between flex_center">
                    <img src="../../../../../assets/imgs/detail/win.png" class="blue"
                        v-if="framesData.factions[0].faction === 'blue'?
                              framesData.factions[0].team.team_id === framesData.match_winner :
                              framesData.factions[1].team.team_id === framesData.match_winner">
                    <team-play
                        :isPlace="playPlace.left"
                        :factionData="framesData.factions[0].faction === 'blue'?framesData.factions[0]:framesData.factions[1]"
                    ></team-play>
                    <type-sign
                        class="type-sign l"
                        v-if="framesData.factions[0].faction === 'blue' && framesData.factions[0].gold_diff>framesData.factions[1].gold_diff"
                        :goldDiff="framesData.factions[0].gold_diff > framesData.factions[1].gold_diff ?
                                  framesData.factions[0].gold_diff : framesData.factions[1].gold_diff"
                    ></type-sign>
                    <div class="score">
                        <p class="left">
                            {{framesData.factions[0].faction === 'blue'?framesData.factions[0].kills:framesData.factions[1].kills}}
                        </p>
                    </div>
                    <div class="chessboard">
                        <p>第 {{framesData.battle_order}} 局</p>
                        <p>{{durationTime(framesData.duration)}}</p>
                    </div>
                    <div class="score">
                        <p class="right">
                            {{framesData.factions[1].faction === 'red'?framesData.factions[1].kills:framesData.factions[0].kills}}
                        </p>
                    </div>
                    <type-sign
                        class="type-sign r"
                        v-if="framesData.factions[1].faction === 'red' && framesData.factions[1].gold_diff>framesData.factions[0].gold_diff"
                        :goldDiff="framesData.factions[1].gold_diff > framesData.factions[0].gold_diff ?
                                  framesData.factions[1].gold_diff : framesData.factions[0].gold_diff"
                    ></type-sign>
                    <team-play
                        :isPlace="playPlace.right"
                        :factionData="framesData.factions[1].faction === 'red'?framesData.factions[1]:framesData.factions[0]"
                    ></team-play>
                    <img src="../../../../../assets/imgs/detail/win.png" class="red"
                        v-if="framesData.factions[1].faction === 'red'?
                              framesData.factions[1].team.team_id === framesData.match_winner :
                              framesData.factions[0].team.team_id === framesData.match_winner">
                </div>
            </div>
            <div class="flex flex_between flex_center">
                <div>
                    <role-list
                        :isPlace="playPlace.left"
                        :factionData="framesData.factions[0].faction === 'blue'?framesData.factions[0]:framesData.factions[1]"
                    ></role-list>
                </div>
                <map-block
                    :mapData="framesData.map"
                ></map-block>
                <div>
                    <role-list
                        :isPlace="playPlace.right"
                        :factionData="framesData.factions[1].faction === 'red'?framesData.factions[1]:framesData.factions[0]"
                    ></role-list>
                </div>
            </div>
        </div>
        <div class="bottom" v-if="eventsData.length !== 0">
            <logs-list
                :logsData="eventsData"
                :logsType="'lol'"
            ></logs-list>
        </div>
    </div>
</template>

<script>
    import typeSign from '@/components/index/content/detail/typeSign'     // 标志
    import teamPlay from '@/components/index/content/detail/teamPlay'     // 对局数据
    import roleList from '@/components/index/content/detail/lol/roleList' // 角色列表
    import mapBlock from '@/components/index/content/detail/mapBlock'     // 地图
    import logsList from '@/components/index/content/detail/logsList'     // 比赛日志

    import { formatSeconds } from '@/scripts/utils'

    export default {
        data () {
            return {
                websock: null, // WebSocket
                framesData: null,
                eventsData: [],
                playPlace: {   // 对局数据显示方向，1为左，0为右
                    left: 1,
                    right: 0,
                }
            }
        },
        created() {
            // this.initWebSocket('frames')
            // this.initWebSocket('events')
        },
        destroyed () {
            // 销毁监听
            this.websock.close()
            this.websock = null
        },
        methods: {
            // 初始化weosocket
            initWebSocket(url){
                const wsuri = `ws://39.105.105.57:9997/pbpdata/${this.$store.state.matchId}/${url}?token=HCI0p9JsDmUZEc5ueFitw5emDfKQdanvsxf2C9RjzRM5K1gwPdQ`
                this.websock = new WebSocket(wsuri)
                this.websock.onmessage = this.websocketonmessage
                this.websock.onerror = this.websocketonerror
                this.websock.onclose = this.websocketclose
            },
            // 连接建立失败重连
            websocketonerror(){
                this.initWebSocket('frames')
                this.initWebSocket('events')
            },
            // 数据接收
            websocketonmessage(e){
                const redata = JSON.parse(e.data)
                if(e.currentTarget.url.indexOf('frames') > 0) {
                    this.framesData = redata
                } else {
                    this.eventsData.push(redata)
                }
            },
            // 关闭
            websocketclose(e){
                console.log('断开连接',e)
            },
        },
        computed: {
            durationTime(sec) {
                return function(sec) {
                    return formatSeconds(sec)
                }
            }
        },
        components: {
            typeSign,
            teamPlay,
            roleList,
            mapBlock,
            logsList
        }
    }
</script>

<style lang="less" scoped>
    .map-content {
        width: 960px;
        margin-top: 12px;
        margin-bottom: 18px;
        box-sizing: border-box;
        background: url('../../../../../assets/imgs/detail/1.png') no-repeat 0 0;
        background-size: 100%;
        .top {
            height: 516px;
            padding: 30px 70px 0;
            box-sizing: border-box;
            .head {
                position: relative;
                img {
                    width: 42px;
                    height: 23px;
                    position: absolute;
                    top: -15px;
                    &.blue {
                        left: 0;
                    }
                    &.red {
                        right: 0;
                    }
                }
                .type-sign {
                    position: absolute;
                    top: 50px;
                    &.l {
                        left: 50%;
                        margin-left: -170px;
                    }
                    &.r {
                        right: 50%;
                        margin-right: -170px;
                    }
                }
                .score {
                    font-size: 20px;
                    margin-top: 20px;
                    font-weight: bold;
                    p {
                        &.left {
                            color: #228EFC;
                        }
                        &.right {
                            color: #FF1E00;
                        }
                    }
                }
                .chessboard {
                    color: #fff;
                    font-size: 14px;
                    text-align: center;
                    margin-top: 20px;
                }
            }
        }
        .bottom {
            height: 208px;
            background-color: #283459;
            border: 2px solid #E4E4E4;
        }
    }
</style>
