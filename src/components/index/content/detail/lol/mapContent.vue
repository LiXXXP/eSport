<template>
    <div class="map-content">
        <div class="top">
            <div class="head">
                <type-sign class="type-sign"></type-sign>
                <div class="score flex flex_center">
                    <p class="left">43</p>
                    <p class="right">38</p>
                </div>
            </div>
            <div class="flex flex_between flex_center">
                  <team-play :isPlace="playPlace.left"></team-play>
                  <div class="chessboard">
                      <p>第一局</p>
                      <p>24:36</p>
                  </div>
                  <team-play :isPlace="playPlace.right"></team-play>
            </div>
            <div class="flex flex_between flex_center">
                <div>
                    <role-list
                        :isPlace="playPlace.left"
                        v-for="item in leftRole"
                        :key="item.id"
                    ></role-list>
                </div>
                <map-block></map-block>
                <div>
                    <role-list
                        :isPlace="playPlace.right"
                        v-for="item in leftRole"
                        :key="item.id"
                    ></role-list>
                </div>
            </div>
        </div>
        <div class="bottom">
            <logs-list :logsData="[]"></logs-list>
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
                },
                leftRole: [
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
                    }
                ]
            }
        },
        created() {
            // this.initWebSocket('frames')
            // this.initWebSocket('events')
        },
        destroyed () {
            // 销毁监听
            this.websock.close()
        },
        methods: {
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
            padding: 20px 70px 0;
            box-sizing: border-box;
            .head {
                position: relative;
                .type-sign {
                    position: absolute;
                    top: 3px;
                    left: 50%;
                    margin-left: -150px;
                }
                .score {
                    font-size: 20px;
                    font-weight: bold;
                    p {
                        margin: 0 20px;
                        &.left {
                            color: #228EFC;
                        }
                        &.right {
                            color: #FF1E00;
                        }
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
        .bottom {
            height: 208px;
            background-color: #283459;
            border: 2px solid #E4E4E4;
        }
    }
</style>
