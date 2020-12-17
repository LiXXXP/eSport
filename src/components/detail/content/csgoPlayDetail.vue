<template>
    <div class="data-hero">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">选手数据</span>
        </div>
        <div class="hero"
            v-for="item in matchDetail.battle_list" :key="item.battle_id">
            <div v-if="item.battle_id === targetMatchId">
                <table v-for="key in item.teams" :key="key.team_id">
                    <thead>
                        <th class="team">
                            <div class="flex flex_only_center">
                                <img :src="key.team_snapshot.image">
                                <p :title="key.team_snapshot.name"
                                    class="beyond-ellipsis">
                                    {{key.team_snapshot.name}}
                                </p>
                            </div>
                        </th>
                        <th>击杀（爆头击杀）</th>
                        <th>助攻（闪光弹助攻）</th>
                        <th>死亡</th>
                        <th>KAST</th>
                        <th>K-D Diff</th>
                        <th>平均每局伤害</th>
                        <th>FK Diff</th>
                        <th>Rating2.0</th>
                    </thead>
                    <tbody>
                        <tr v-for="player in key.players"
                            :key="player.player.player_id">
                            <td>
                                <div class="flex flex_only_center">
                                    <p>{{player.player.nick_name}}</p>
                                    <i class="knife" v-if="player.is_knife_kill"></i>
                                    <i class="ace" v-if="player.is_ace_kill">Ace</i>
                                </div>
                            </td>
                            <td>{{player.kills || 0}}（{{player.headshot_kills || 0}}）</td>
                            <td>{{player.assists || 0}}（{{player.flash_assists || 0}}）</td>
                            <td>{{player.deaths || 0}}</td>
                            <td>{{player.kast || 0}}%</td>
                            <td>{{player.kills || 0}}-{{player.deaths || 0}}</td>
                            <td>{{player.adr || 0}}</td>
                            <td :title="`${player.first_kills}-${player.first_deaths}`">
                                  {{player.first_kills_diff || 0}}
                            </td>
                            <td>{{player.rating || 0}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            targetMatchId: {   // 当前 battle id
                type: Number,
                default: 0
            }
        },
        data() {
            return {

            }
        },
        created() {
            for(let item of this.matchDetail.battle_list) {
                item.teams.forEach(e => {
                    this.matchDetail.scores.forEach(i => {
                        if(e.team_id === i.team_id) {
                            e.team_snapshot = i.team_snapshot
                        }
                    })
                })
            }
        },
        computed: {
            matchDetail() {
                return this.$store.state.matchsData
            }
        },
        watch: {
            matchDetail() {
                return this.$store.state.matchsData
            }
        }
    }
</script>

<style lang="less" scoped>
    .data-hero {
        .hero {
            .team {
                p {
                    width: 60px;
                }
            }
            table {
                width: 960px;
                cursor: pointer;
                margin-bottom: 5px;
                box-sizing: border-box;
                background-color: #fff;
                th {
                    height: 48px;
                    color: #303030;
                    &:nth-child(1) {
                        text-align: left;
                        img {
                            width: 24px;
                            height: 24px;
                            margin: 0 8px;
                        }
                    }
                }
                td {
                    height: 38px;
                    text-align: center;
                    border-top: 1px solid #F2F2F2;
                    &:nth-child(1) {
                        text-align: left;
                        padding-left: 8px;
                        .knife {
                            width: 11px;
                            height: 18px;
                            display: block;
                            margin: 0 5px;
                            background: url('../../../assets/imgs/detail/csgo/knife.png') no-repeat 0 0;
                            background-size: 100%;
                        }
                        .ace {
                            font-size: 12px;
                            font-weight: 600;
                            color: #EF1111;
                            font-style: normal;
                            background: linear-gradient(45deg,#EE1B1B 0%, #FF9C00 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                    }
                }
            }
        }
    }
</style>
