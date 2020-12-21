<template>
    <div class="game-edit">
        <table>
            <thead>
                <th>
                    <i
                        :class="['iconfont', isCollectStatus?'icon-shoucang2':'icon-shoucang']"
                        @click="getCollect(matchId)"
                    ></i>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <i class="iconfont icon-dianshi" v-if="supported"></i>
                    </td>
                </tr>
                <tr>
                    <td class="detail"
                        v-if="isStatus !== '未开始'"
                        @click="openInfo(matchId,gameId)">
                        <span>详情</span>
                        <i></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { getCollectMatch, getRemoveCollectMatch } from '@/scripts/request'

    export default {
        props: {
            matchId: {    // 赛事id
                type: Number,
                default: 0
            },
            gameId: {     // 游戏id
                type: Number,
                default: 0
            },
            supported: {   // 是否提供视频直播源(true,false)
                type: Boolean,
                default: false
            },
            isStatus: {   // 比赛状态
                type: String,
                default: ''
            },
            isCollect: {   // 是否收藏(true,false)
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isOpen: false,                   // 是否打开详情
                isCollectStatus: this.isCollect, // 是否收藏
            }
        },
        methods: {
            // 收藏
            getCollect(matchId) {
                let _this = this
                let params = {
                    match_id: matchId
                }
                if(this.isCollectStatus) {
                    // 取消收藏
                    getRemoveCollectMatch(params).then(res => {
                        if (res.code === 200) {
                            _this.isCollectStatus = false
                            _this.$message.success(res.message)
                        } else {
                            _this.$message.error(res.message)
                        }
                    })
                } else {
                    // 加入收藏
                    getCollectMatch(params).then(res => {
                        if (res.code === 200) {
                            _this.isCollectStatus = true
                            _this.$message.success(res.message)
                        } else {
                            _this.$message.error('请登录后收藏！')
                        }
                    })
                }
            },
            // 展开游戏详情
            openInfo(Mid, Gid) {
                if(this.isOpen) {
                    this.isOpen = false
                    this.$emit('openDetailId',-1,-1)
                } else {
                    this.isOpen = true
                    this.$emit('openDetailId',Mid,Gid)
                }
                this.$store.commit('supportedShow',this.supported)
            }
        }
    }
</script>

<style lang="less" scoped>
    .game-edit {
        width: 90px;
        height: 99px;
        box-sizing: border-box;
        table {
            width: 100%;
            cursor: pointer;
            thead {
                border-bottom: 1px solid #cfcfcf;
                th {
                    font-weight: 400;
                    text-align: right;
                    padding-right: 15px;
                }
            }
            tbody {
                tr {
                    td {
                        text-align: right;
                        padding-right: 15px;
                        border-bottom: 1px solid #cfcfcf;
                    }
                    &:last-child {
                        td {
                            border-bottom: 0;
                        }
                    }
                }
            }
            th,tr {
                height: 33px;
            }
        }
        .iconfont {
            color: #878787;
            font-size: 18px;
            font-weight: 500;
            &:hover {
                color: #FF7800;
            }
        }
        .icon-shoucang2 {
            color: #FF7800;
        }
        .detail {
            color: #2F375D;
            font-size: 14px;
            font-weight: bold;
            i {
                width: 9px;
                height: 9px;
                color: #2F375D;
                margin-bottom: 2px;
                display: inline-block;
                transform: rotate(225deg);
                border-top: 1px solid #2F375D;
                border-left: 1px solid #2F375D;
            }
        }
    }
</style>
