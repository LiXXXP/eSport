<template>
    <div class="team-table">
        <table cellspacing="0" cellpadding="0">
            <thead>
                <th>状态</th>
                <th>赛事名称</th>
                <th>比赛时间</th>
                <th>对阵情况</th>
                <th>状态</th>
            </thead>
            <tbody>
                <tr v-for="item in tableData" :key="item.match_id">
                    <td :class="{green: item.match_status === '进行中'}">
                        {{item.match_status}}
                    </td>
                    <td>{{item.tournament_name}}</td>
                    <td>{{item.scheduled_begin_at}}</td>
                    <td>
                        <p>{{item.match_situation[0].team_name}} vs {{item.match_situation[1].team_name}}</p>
                        <p>{{item.match_situation[0].score || 0}} : {{item.match_situation[1].score || 0}}</p>
                    </td>
                    <td @click="detailIds(item.game_id,item.match_id,item.status)">
                        <p :class="['status',{live: item.status === '直播中'}]">{{item.status}}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            tableData: {
                type: Array,
                default: []
            }
        },
        data() {
            return {

            }
        },
        methods: {
            detailIds(gameId, matchId, status) {
                this.$emit('gotoDetail', gameId, matchId, status)
            }
        }
    }
</script>

<style lang="less" scoped>
    .team-table {
        table {
            width: 1200px;
            text-align: center;
            thead {
                color: #fff;
                height: 35px;
                line-height: 35px;
                background-color: #2F375D;
            }
            tbody {
                background-color: #fff;
                tr {
                    height: 45px;
                    cursor: pointer;
                    td {
                        border-bottom: 1px solid #CFCFCF;
                    }
                }
            }
        }
        .green {
            color: #0FA104;
        }
        .status {
            width: 65px;
            margin: 0 auto;
            line-height: 25px;
        }
        .live {
            color: #0FA104;
            border: 1px solid #0FA104;
        }
    }
</style>
