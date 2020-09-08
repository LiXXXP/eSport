<template>
    <div class="data-hero">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">选手数据</span>
        </div>
        <div class="hero">
            <table v-for="item in battleDetail.teams"
                  :key="item.opponent_order">
                <thead>
                    <th>
                        <div class="flex flex_only_center">
                            <img :src="item.team_snapshot.image">
                            <p :title="item.team_snapshot.full_name">
                                {{item.team_snapshot.full_name}}
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
                    <tr v-for="key in battleDetail.battle_detail.teams[0].players"
                        :key="key.player.player_id">
                        <td>
                            <div class="flex flex_only_center">
                                <p>{{key.player.nick_name}}</p>
                                <i class="knife" v-if="key.is_knife_kill"></i>
                                <i class="ace" v-if="key.is_ace_kill">Ace</i>
                            </div>
                        </td>
                        <td>{{key.kills || 0}}（{{key.headshot_kills || 0}}）</td>
                        <td>{{key.assists || 0}}（{{key.flash_assists || 0}}）</td>
                        <td>{{key.deaths || 0}}</td>
                        <td>{{key.kast || 0}}%</td>
                        <td>{{key.kills || 0}}-{{key.deaths || 0}}</td>
                        <td>{{key.adr || 0}}</td>
                        <td :title="`${key.first_kills}-${key.first_deaths}`">
                              {{key.first_kills_diff || 0}}
                        </td>
                        <td>{{key.rating || 0}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        computed: {
            battleDetail() {
                return this.$store.state.battlesData
            }
        },
        watch: {
            battleDetail(val) {
                return this.$store.state.battlesData
            }
        }
    }
</script>

<style lang="less" scoped>
    .data-hero {
        .hero {
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
                            background: url('../../../../assets/imgs/detail/csgo/knife.png') no-repeat 0 0;
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
