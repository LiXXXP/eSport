<template>
    <div class="game-edit">
        <table>
            <thead>
                <th>收藏</th>
            </thead>
            <tbody>
                <tr>
                    <td>直播</td>
                </tr>
                <tr>
                    <td>详情</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {

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
                line-height: 33px;
            }
        }
    }
</style>
