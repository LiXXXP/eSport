<template>
    <div class="game-edit">
        <table>
            <thead>
                <th>
                    <i
                      :class="['iconfont', isSelect?'icon-shoucang2':'icon-shoucang']"
                      @click="getStore"
                    ></i>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <i class="iconfont icon-dianshi"></i>
                    </td>
                </tr>
                <tr>
                    <td class="detail" @click="openInfo(clickIndex)">详情</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            clickIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                isSelect: false,    // 是否收藏
            }
        },
        methods: {
            // 收藏
            getStore() {
                if(this.isSelect) {
                    this.isSelect = false
                } else {
                    this.isSelect = true
                }
            },
            // 展开游戏详情
            openInfo(index) {
                this.$emit('openDetail',index)
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
                    color: #303030;
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
        }
    }
</style>
