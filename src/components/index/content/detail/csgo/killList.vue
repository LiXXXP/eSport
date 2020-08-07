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
            <kill-board></kill-board>
            <kill-table :colorBar="'yellow'"></kill-table>
        </div>
    </div>
</template>

<script>
    import killTable from '@/components/detail/content/table/killTable'     // 击杀表格
    import killBoard from '@/components/detail/content/table/killBoard'     // 击杀面板
    export default {
        data() {
            return {

            }
        },
        components: {
            killTable,
            killBoard
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
        }
    }
</style>
