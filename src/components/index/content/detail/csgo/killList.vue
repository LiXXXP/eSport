<template>
    <div class="kill-list">
        <div class="flex flex_end">
            <div class="tab flex flex_center">
                <p>Normal</p>
                <p>Advanced</p>
            </div>
        </div>
        <div class="content">
            <div class="header flex flex_between flex_center">
                <div>Ronud-<span class="round">26</span> Inferno (map1)</div>
                <div class="score">
                    <span class="left">14</span>
                    <span>:</span>
                    <span class="right">12</span>
                </div>
                <div class="team">
                    <span>0:34</span>
                    <img src="" alt="战队图标">
                </div>
            </div>
            <kill-table :colorBar="'blue'"></kill-table>
            <div class="board">
                <kill-bar
                    class="top-bar"
                    :barData="barData"
                ></kill-bar>
                <div class="flex flex_center">
                    <kill-board></kill-board>
                    <kill-board class="kill"></kill-board>
                </div>
                <kill-bar
                    class="bottom-bar"
                    :barData="barData"
                ></kill-bar>
            </div>
            <kill-table :colorBar="'yellow'"></kill-table>
        </div>
        <div class="bottom">
            <logs-list></logs-list>
        </div>
    </div>
</template>

<script>
    import killTable from '@/components/detail/content/table/killTable'     // 击杀表格
    import killBoard from '@/components/detail/content/table/killBoard'     // 击杀面板
    import killBar from '@/components/detail/content/table/killBar'         // 击杀条状
    import logsList from '@/components/index/content/detail/logsList'       // 比赛日志
    export default {
        data() {
            return {
                // 击杀条状数据
                barData: [
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
                    },
                    {
                        id: 6
                    },
                    {
                        id: 7
                    }
                ]
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
    .kill-list {
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
        .content {
            width: 960px;
            height: 760px;
            padding: 10px;
            margin-top: 10px;
            box-sizing: border-box;
            background: url('../../../../../assets/imgs/detail/overpass-2.png') no-repeat 0 0;
            background-size: 100%;
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
</style>
