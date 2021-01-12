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
        <div class="content-bg" v-if="framesData != null">
            <img :src="framesData.map.image.thumbnail">
            <div class="content">
                <div class="top">
                    <div class="header flex flex_between flex_center">
                        <div>
                            Ronud-<span class="round">{{framesData.current_round}}</span>
                            {{framesData.map.name}}
                        </div>
                        <div class="score">
                            <span :class="framesData.starting_ct.team_id === framesData.side[0].team.team_id && framesData.side[0].side === 'ct'?'blue':'yellow'">
                                {{framesData.starting_ct.team_id === framesData.side[0].team.team_id && framesData.side[0].side === 'ct'?framesData.side[0].score:framesData.side[1].score}}
                            </span>
                            <span>:</span>
                            <span :class="framesData.starting_t.team_id === framesData.side[1].team.team_id && framesData.side[1].side === 'terrorists'?'yellow':'blue'">
                                {{framesData.starting_t.team_id === framesData.side[1].team.team_id && framesData.side[1].side === 'terrorists'?framesData.side[1].score:framesData.side[0].score}}
                            </span>
                        </div>
                        <div class="team flex flex_only_center">
                            <span>{{durationTime(framesData.duration)}}</span>
                        </div>
                    </div>
                    <kill-table
                        :colorBar="framesData.starting_ct.team_id === framesData.side[0].team.team_id && framesData.side[0].side === 'ct'?'blue':'yellow'"
                        :isNormal="tabIndex"
                        :tableData="framesData.starting_ct.team_id === framesData.side[0].team.team_id && framesData.side[0].side === 'ct'?framesData.side[0]:framesData.side[1]"
                    ></kill-table>
                    <div style="margin: 5px 0;">
                        <kill-board
                            :boardData="framesData.starting_ct.team_id === framesData.side[0].team.team_id && framesData.side[0].side === 'ct'?framesData.side[0]:framesData.side[1]"
                            :isBorder="0"
                            :startCTid="framesData.starting_ct.team_id"
                            :startTid="framesData.starting_t.team_id"
                        ></kill-board>
                        <kill-board
                            :boardData="framesData.starting_t.team_id === framesData.side[1].team.team_id && framesData.side[1].side === 'terrorists'?framesData.side[1]:framesData.side[0]"
                            :isBorder="1"
                            :startCTid="framesData.starting_ct.team_id"
                            :startTid="framesData.starting_t.team_id"
                        ></kill-board>
                    </div>
                    <kill-table
                        :colorBar="framesData.starting_t.team_id === framesData.side[1].team.team_id && framesData.side[1].side === 'terrorists'?'yellow':'blue'"
                        :isNormal="tabIndex"
                        :tableData="framesData.starting_t.team_id === framesData.side[1].team.team_id && framesData.side[1].side === 'terrorists'?framesData.side[1]:framesData.side[0]"
                    ></kill-table>
                </div>
                <div class="bottom" v-if="eventsData.length !== 0">
                    <logs-list
                        :logsData="eventsData"
                        :logsType="'csgo'"
                    ></logs-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import killTable from '@/components/detail/content/table/killTable'     // 击杀表格
    import killBoard from '@/components/detail/content/table/killBoard'     // 击杀面板
    import logsList from '@/components/index/content/detail/logsList'       // 比赛日志

    import { formatSeconds } from '@/scripts/utils'

    export default {
        props: {

        },
        data () {
            return {
                websock: null, // WebSocket
                tabIndex: 0,  // 切换tab状态
                framesData: null,
                eventsData: [],
            }
        },
        created() {
            this.initWebSocket('frames')
            this.initWebSocket('events')
        },
        destroyed () {
            // 销毁监听
            this.websock.close()
            this.websock = null
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
            }
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
            line-height: 29px;
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
                            .blue {
                                color: #008CD4;
                            }
                            .yellow {
                                color: #F6B600;
                            }
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
