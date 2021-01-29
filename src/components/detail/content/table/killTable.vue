<template>
    <div class="kill-table">
        <table>
            <thead :class="colorBar==='blue'?'blue':'yellow'">
                <th>
                    <div class="flex flex_start flex_only_center">
                        <img :src="tableData.team.image" class="team-icon">
                        <span class="beyond-ellipsis" :title="tableData.team.name">{{tableData.team.name}}</span>
                    </div>
                </th>
                <th>
                    <p v-if="isNormal === 1" :title="'首杀差'">Op.duels</p>
                </th>
                <th>
                    <i class="icon-buy" v-if="isNormal === 0" :title="'主武器'"></i>
                    <p v-if="isNormal === 1" :title="'多杀'">2+kills</p>
                </th>
                <th>
                    <i class="icon-add" v-if="isNormal === 0" :title="'血量'"></i>
                    <p v-if="isNormal === 1" :title="'KAST'">KAST</p>
                </th>
                <th>
                    <i class="icon-head" v-if="isNormal === 0" :title="'防弹衣头盔'"></i>
                    <p v-if="isNormal === 1" :title="'1VN残局获胜'">1vsX</p>
                </th>
                <th :title="'金钱'">$</th>
                <th :title="'击杀'">K</th>
                <th :title="'助攻'">A</th>
                <th :title="'死亡'">D</th>
                <th :title="'ADR'">ADR</th>
            </thead>
            <tbody>
                <tr v-for="item in tableData.players"
                    :key="item.player.player_id"
                    :class="[colorBar==='blue'?'blue':'yellow',{dark:parseInt(item.hp)<=0}]"
                >
                    <td>{{item.player.nick_name}}</td>
                    <td>
                        <i class="td-win" v-if="item.has_defusekit && isNormal === 0"></i>
                        <!-- 首杀差 -->
                        <p v-if="isNormal === 1">
                            {{item.first_kills || 0}}:{{item.first_deaths || 0}}
                        </p>
                    </td>
                    <td>
                        <div v-if="item.weapon.length > 0">
                            <div class="td-buy" v-for="key in item.weapon" :key="key.image">
                                <img class="big"
                                    :src="key.image"
                                    :title="key.name"
                                    v-if="key.kind === 'primary' && isNormal === 0" >
                                <img class="small"
                                    :src="key.image"
                                    :title="key.name"
                                    v-else-if="item.weapon.length === 1 && key.kind === 'secondary' && isNormal === 0">
                            </div>
                        </div>
                        <p v-if="isNormal === 1">{{item.multi_kills || 0}}</p>
                    </td>
                    <td>
                        <div class="td-bar" v-if="isNormal === 0">
                            <progress-bar
                                :progressData="playContrast"
                                :progressColor="parseInt(item.hp)>59?'#00AB49':parseInt(item.hp)>39?'#F6B600':'#D94629'"
                                :progressRate="parseInt(item.hp) || 0"
                            ></progress-bar>
                            <p>{{item.hp}}</p>
                        </div>
                        <p v-if="isNormal === 1">{{parseInt(item.kast*100) || 0 }}%</p>
                    </td>
                    <td>
                        <!-- 防弹衣 头盔 -->
                        <!-- 全甲 -->
                        <i class="td-head" v-if="(item.has_kevlar && item.has_helmet) && isNormal === 0"></i>
                        <!-- 半甲 -->
                        <i class="td-head-b" v-if="(item.has_kevlar && !item.has_helmet) && isNormal === 0"></i>
                        <p v-if="isNormal === 1">{{item.one_on_x_clutches || 0}}</p>
                    </td>
                    <td>${{item.money || 0}}</td>
                    <td>{{item.kills || 0}}</td>
                    <td>{{item.assists || 0}}</td>
                    <td>{{item.deaths || 0}}</td>
                    <td>{{item.adr || 0}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'
    export default {
        props: {
            colorBar: {     // 定义颜色
                type: String,
                default: ''
            },
            tableData: {    // 表格数据
                type: Object,
                default: {}
            },
            isNormal: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                playContrast: {        // 进度条配置参数
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                    inside: false,     // 进度条显示文字是否在进度条内 true / false
                    width: 17,          // 进度条的高度
                    showText: false,   // 是否显示文字
                },

            }
        },
        components: {
            progressBar
        }
    }
</script>

<style lang="less" scoped>
    .kill-table {
        table {
            width: 940px;
            color: #fff;
            text-align: center;
            border-spacing: 0px 4px;
            border-collapse:separate;
            thead {
                height: 18px;
                font-size: 10px;
                line-height: 18px;
                background:rgba(0,140,212,.5);
                &.blue {
                    background:rgba(0,140,212,.5);
                }
                &.yellow {
                    background:rgba(246,182,0,.5);
                }
                th {
                    height: 40px;
                    padding: 0 10px;
                    cursor: pointer;
                    line-height: 40px;
                    &:nth-child(1) {
                        width: 200px;
                        text-align: left;
                        span {
                            width: 200px;
                            display: block;
                            padding-left: 5px;
                        }
                        .team-icon {
                            width: 21px;
                            height: 24px;
                        }
                    }
                    .icon-buy {
                        width: 20px;
                        height: 18px;
                        display: block;
                        margin: 0 auto;
                        background: url('../../../../assets/imgs/detail/csgo/buy.png') no-repeat 0 0;
                        background-size: 100%;
                    }
                    .icon-add {
                        width: 20px;
                        height: 20px;
                        display: block;
                        margin: 0 auto;
                        background: url('../../../../assets/imgs/detail/csgo/health.png') no-repeat 0 0;
                        background-size: 100%;
                    }
                    .icon-head {
                        width: 18px;
                        height: 20px;
                        display: block;
                        margin: 0 auto;
                        background: url('../../../../assets/imgs/detail/csgo/kevlar_helmet.png') no-repeat 0 0;
                        background-size: 100%;
                    }
                }
            }
            tbody {
                tr {
                    height: 40px;
                    background:rgba(0,140,212,.3);
                    &.blue {
                        background:rgba(0,140,212,.5);
                        &.dark {
                            background:rgba(0,140,212,.1);
                        }
                    }
                    &.yellow {
                        background:rgba(246,182,0,.5);
                        &.dark {
                            background:rgba(246,182,0,.1);
                        }
                    }
                    td {
                        &:nth-child(1) {
                            width: 200px;
                            text-align: left;
                            padding-left: 10px;
                        }
                        .td-bar {
                            position: relative;
                            p {
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                            }
                        }
                        .td-buy {
                            width: 59px;
                            height: 18px;
                            cursor: pointer;
                            margin: -10px auto 0;
                            .big {
                                width: 100%;
                                height: 100%;
                            }
                            .small {
                                width: 46px;
                                height: 100%;
                            }
                        }
                        .td-win {
                            width: 20px;
                            height: 20px;
                            display: block;
                            margin: auto auto;
                            background: url('../../../../assets/imgs/detail/csgo/csgo_ct.png') no-repeat 0 0;
                            background-size: 100%;
                        }
                        .td-head {
                            width: 18px;
                            height: 20px;
                            display: block;
                            margin: auto auto;
                            background: url('../../../../assets/imgs/detail/csgo/kevlar_helmet.png') no-repeat 0 0;
                            background-size: 100%;
                        }
                        .td-head-b {
                            width: 18px;
                            height: 20px;
                            display: block;
                            margin: auto auto;
                            background: url('../../../../assets/imgs/detail/csgo/kevlar_helmet_b.png') no-repeat 0 0;
                            background-size: 100%;
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="less">
    .kill-table {
        .el-progress-bar__outer {
            border-radius: 4px;
            background-color: #CFCFCF;
        }
        .el-progress-bar__inner {
            border-radius: 4px;
        }
    }
</style>
