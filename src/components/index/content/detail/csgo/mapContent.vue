<template>
    <div class="map-content">
        <div class="flex flex_end">
            <div class="tab flex flex_center">
                <p :class="{active: tabIndex === 0}"
                    @click="tabNormal"
                >Normal</p>
                <p :class="{active: tabIndex === 1}"
                    @click="tabAdvanced"
                >Advanced</p>
            </div>
        </div>
        <div class="content-bg">
            <img :src="framesData.map.image.thumbnail">
            <div class="content">
                <div class="top">
                    <div class="header flex flex_between flex_center">
                        <div>
                            Ronud-<span class="round">{{framesData.current_round}}</span>
                            {{framesData.map.name}} (map1)
                        </div>
                        <div class="score">
                            <span class="left">{{framesData.side[0].score}}</span>
                            <span>:</span>
                            <span class="right">{{framesData.side[1].score}}</span>
                        </div>
                        <div class="team">
                            <span>{{durationTime(framesData.duration)}}</span>
                            <img :src="framesData.battle_winner.image" :title="framesData.battle_winner.name">
                        </div>
                    </div>
                    <kill-table
                        :colorBar="'blue'"
                        :tableData="framesData.side[0]"
                    ></kill-table>
                    <div class="board">
                        <kill-bar
                            class="top-bar"
                        ></kill-bar>
                        <div class="flex flex_center">
                            <kill-board></kill-board>
                            <kill-board
                                class="kill"
                            ></kill-board>
                        </div>
                        <kill-bar
                            class="bottom-bar"
                        ></kill-bar>
                    </div>
                    <kill-table
                        :colorBar="'yellow'"
                        :tableData="framesData.side[1]"
                    ></kill-table>
                </div>
                <div class="bottom">
                    <logs-list></logs-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import killTable from '@/components/detail/content/table/killTable'     // 击杀表格
    import killBoard from '@/components/detail/content/table/killBoard'     // 击杀面板
    import killBar from '@/components/detail/content/table/killBar'         // 击杀条状
    import logsList from '@/components/index/content/detail/logsList'       // 比赛日志

    import { formatSeconds } from '@/scripts/utils'
    import { Message } from 'element-ui'

    export default {
        props: {

        },
        data () {
            return {
                websock: null, // WebSocket
                tabIndex: 0,  // 切换tab状态
                framesData: {},
                eventsData: {}
            }
        },
        created() {
            this.initWebSocket('frames')
            this.initWebSocket('events')
        },
        methods: {
            tabNormal() {
                this.tabIndex = 0
            },
            tabAdvanced() {
                this.tabIndex = 1
            },
            // 初始化weosocket
            initWebSocket(url){
                const wsuri = `ws://39.105.105.57:9998/pbpdata/${this.$store.state.matchId}/${url}`
                this.websock = new WebSocket(wsuri)
                this.websock.onmessage = this.websocketonmessage
                this.websock.onerror = this.websocketonerror
                this.websock.onclose = this.websocketclose
            },
            // 连接建立失败重连
            websocketonerror(){
                this.initWebSocket()
            },
            // 数据接收
            websocketonmessage(e){
                const redata = JSON.parse(e.data)
                if(e.currentTarget.url.indexOf('frames') > 0) {
                    this.framesData = redata
                } else {
                    this.eventsData = redata
                }
            },
            // 关闭
            websocketclose(e){
                console.log('断开连接',e)
                Message.error('连接断开')
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
            killTable,
            killBoard,
            killBar,
            logsList
        }
    }
</script>

<style lang="less" scoped>
    .map-content {
        .tab {
            width: 200px;
            height: 28px;
            cursor: pointer;
            color: #2F3A5A;
            line-height: 28px;
            border-radius: 4px;
            border: 1px solid#2F3A5A;
            p {
                width: 100px;
                text-align: center;
                &.active {
                    color: #fff;
                    background-color: #2F3A5A;
                }
            }
        }
        .content-bg {
            width: 960px;
            height: 960px;
            margin-top: 10px;
            position: relative;
            background-color: #000;
            img {
                width: 100%;
                height: 100%;
                opacity: 0.5;
                filter: alpha(opacity=50);
            }
            .content {
                position: absolute;
                top: 0;
                left: 0;
                .top {
                    width: 960px;
                    height: 760px;
                    padding: 10px;
                    box-sizing: border-box;
                    .header {
                        color: #CFCFCF;
                        .round {
                            color: #fff;
                            font-size: 16px;
                            font-weight: 600;
                        }
                        .score {
                            color: #fff;
                            font-size: 30px;
                            margin-left: -62px;
                            .left {
                                color: #008CD4;
                            }
                            .right {
                                color: #F6B600;
                            }
                        }
                        .team {
                            img {
                                width: 24px;
                                height: 24px;
                                margin-left: 12px;
                                vertical-align: middle;
                            }
                        }
                    }
                    .board {
                        position: relative;
                        .top-bar {
                            position: absolute;
                            top: 10px;
                            left: 10px;
                        }
                        .bottom-bar {
                            position: absolute;
                            bottom: 10px;
                            left: 10px;
                        }
                        .kill {
                            border-right: 0;
                        }
                    }
                }
                .bottom {
                    height: 200px;
                    background-color: #1B1F29;
                }
            }
        }
    }
</style>
