<template>
    <div class="battle-rank">
        <drop-down
            class="drop"
            :dropList="dropDownList"
        ></drop-down>
        <div class="list flex flex_between"
            v-for="item in playerList"
            :key="item.nick_name">
            <div class="head"
                :title="`${item.name}-${item.title}`"
            >
                <img :src="item.image">
                <span>{{item.level}}</span>
            </div>
            <div class="right">
                <div :class="['flex flex_between',{
                    blue: item.faction === 'blue',
                    red: item.faction === 'red'
                }]">
                    <span>{{item.nick_name}}</span>
                    <span>{{item.gold}}</span>
                </div>
                <progressBar
                    :progressData="playContrast"
                    :progressColor="item.faction==='blue'?'#2980D9':'#CC5728'"
                    :progressRate="Math.floor(item.gold/200)"
                ></progressBar>
            </div>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'
    import dropDown from '@/components/common/dropDown'

    export default {
        props: {
            factionData: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                playContrast: {        // 进度条配置参数
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                    inside: false,     // 进度条显示文字是否在进度条内 true / false
                    width: 8,          // 进度条的高度
                    showText: false,   // 是否显示文字
                },
                playerList: [],
                dropDownList: [
                    {
                        title: '当前经济'
                    },
                    {
                        title: '补刀'
                    },
                    {
                        title: '分均补刀'
                    },
                    {
                        title: '分均金钱'
                    },
                    {
                        title: '分均经验'
                    },
                    {
                        title: '分均伤害'
                    },
                    {
                        title: '分均承伤'
                    },
                    {
                        title: '插眼/排眼'
                    }
                ]
            }
        },
        created() {
            this.getPlayers()
        },
        methods: {
            getPlayers() {
                let arr = []
                for(let item of this.factionData) {
                    for(let key of item.players) {
                        let o = {
                            'faction': item.faction,
                            'nick_name': key.player.nick_name,
                            'image': key.champion.image.image,
                            'name': key.champion.name,
                            'title': key.champion.title,
                            'level': key.level,
                            'gold': key.gold_earned
                        }
                        arr.push(o)
                    }
                }
                arr.sort((a, b) => {return a.gold - b.gold})
                this.playerList = arr
            }
        },
        watch: {
            factionData(val,old) {
                this.getPlayers()
            }
        },
        components: {
            progressBar,
            dropDown
        }
    }
</script>

<style lang="less" scoped>
    .battle-rank {
        width: 240px;
        height: 427px;
        padding: 15px;
        box-sizing: border-box;
        background-color: #fff;
        .drop {
            padding: 5px 10px;
            margin-bottom: 18px;
            .el-dropdown {
                font-size: 14px;
            }
        }
        .list {
            margin-bottom: 5px;
            .head {
                width: 30px;
                height: 30px;
                cursor: pointer;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                }
                span {
                    color: #fff;
                    font-size: 12px;
                    background-color: #000;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
            .right {
                width: 170px;
                font-size: 12px;
                .blue {
                    color: #2980D9;
                }
                .red {
                    color: #CC5728;
                }
                span {
                    margin-bottom: 4px;
                }
            }
        }
    }
</style>
