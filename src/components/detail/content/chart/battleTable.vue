<template>
    <div>
        <div class="battle-table" v-for="key in factionsData" :key="key.team_id">
            <table>
                <thead>
                    <th :title="key.team_snapshot.full_name"
                        :class="{
                          blue: key.faction === 'blue',
                          red: key.faction === 'red'
                    }">
                        {{key.team_snapshot.short_name}}
                    </th>
                    <th v-for="item in heroList.titleList"
                        :key="item.title">
                        {{item.title}}
                    </th>
                </thead>
                <tbody>
                    <tr v-for="item in key.players"
                        :key="item.player.player_id">
                        <td class="flex flex_start flex_only_center">
                            <div class="head" :title="`${item.champion.name_cn}-${item.champion.title_cn}`">
                                <img :src="item.champion.image.image">
                                <span>{{item.level}}</span>
                            </div>
                            <p class="beyond-ellipsis">
                                {{item.player.nick_name}}
                            </p>
                            <p class="number"
                                v-if="item.advanced.largest_multi_kill>0">
                                {{toChinese(item.advanced.largest_multi_kill)}}
                            </p>
                            <p class="icon"
                                v-if="item.advanced.largest_killing_spree>0">
                                <i class="iconfont icon-yidongduan-LOLjian"></i>
                                <span>{{item.advanced.largest_killing_spree}}</span>
                            </p>
                        </td>
                        <td>
                            <p>{{item.kills}}/{{item.deaths}}/{{item.assists}}</p>
                            <p style="color:#FF7600">{{item.kda}}</p>
                        </td>
                        <td>{{item.cs}}</td>
                        <td>{{item.gold_earned}}</td>
                        <td class="t-left">
                            {{parseInt((item.advanced.damage_percent_to_champions || 0) * 100)}}%
                            <progress-bar
                                class="bar"
                                :progressData="playContrast"
                                :progressColor="'#CB2020'"
                                :progressRate="parseInt((item.advanced.damage_percent_to_champions || 0) * 100)"
                            ></progress-bar>
                        </td>
                        <td class="t-left">
                            {{parseInt((item.advanced.damage_taken_percent || 0) * 100)}}%
                            <progress-bar
                                class="bar"
                                :progressData="playContrast"
                                :progressColor="'#33B3B8'"
                                :progressRate="parseInt((item.advanced.damage_taken_percent || 0) * 100)"
                            ></progress-bar>
                        </td>
                        <td>{{parseInt(item.participation*100)}}%</td>
                        <td class="arts flex flex_end flex_only_center">
                            <div class="img" v-for="spell in item.summoner_spells" :key="spell.summoner_spell_id">
                                <img :src="spell.image">
                            </div>
                            <div class="slot flex flex_start">
                                <div class="img" v-for="slot in item.items" :key="">
                                    <div v-if="slot !== null">
                                        <img :src="slot.image" v-if="!slot.is_trinket">
                                    </div>
                                </div>
                            </div>
                            <div class="img" style="margin-left:9px;">
                                <div v-for="slot in Object.values(item.items)" :key="">
                                    <div v-if="slot !== null">
                                        <img :src="slot.image" v-if="slot.is_trinket">
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'

    import {numberToChinese} from '@/scripts/utils'

    export default {
        props: {
            factionsData: {
                type: Array,
                default: () => []
            },
            scoresData: {
                type: Array,
                default: () => []
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
                heroList: {
                    titleList: [
                        {
                            title: 'K/D/A'
                        },
                        {
                            title: '补刀'
                        },
                        {
                            title: '经济',
                        },
                        {
                            title: '伤害占比'
                        },
                        {
                            title: '承伤占比'
                        },
                        {
                            title: '参团率'
                        },
                        {
                            title: ''
                        }
                    ]
                }
            }
        },
        created() {
            this.factionsData.forEach(e => {
                this.scoresData.forEach(i => {
                    if(e.team_id === i.team_id) {
                        e.team_snapshot = i.team_snapshot
                    }
                })

            })
        },
        computed: {
            toChinese(num) {
                return function (num) {
                    return numberToChinese(num)
                }
            },
        },
        components: {
            progressBar
        }
    }
</script>

<style lang="less" scoped>
    .battle-table {
        width: 960px;
        padding: 10px;
        margin-bottom: 5px;
        box-sizing: border-box;
        background-color: #fff;
        .t-left {
            .bar {
                width: 80px;
            }
        }
        .arts {
            .img {
                margin-right: 3px;
                img {
                    width: 28px;
                    height: 28px;
                    cursor: pointer;
                }
            }
            .slot {
                width: 183px;
                margin-left: 9px;
                .img {
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
        .head {
            width: 36px;
            height: 36px;
            cursor: pointer;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            span {
                color: #fff;
                padding: 0 2px;
                font-size: 12px;
                background-color: #000;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
        .beyond-ellipsis {
            width: 60px;
            margin-left: 5px;
        }
        .number {
            color:#CB2020;
            font-size:12px;
            font-weight:600;
            margin-right: 3px;
            background:linear-gradient(45deg,#EE1B1B, #FF9C00 100%);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
        }
        .icon {
            position: relative;
            i {
                color:#CB2020;
                font-size: 12px;
                background:linear-gradient(45deg,#EE1B1B, #FF9C00 100%);
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
            }
            span {
                color: #EF1111;
                font-size: 12px;
                font-weight: 600;
                position: absolute;
                bottom: -1px;
                left: 55%;
            }
        }
        .blue {
            width: 100px;
            color: #2980D9;
        }
        .red {
            width: 100px;
            color: #D94629;
        }
        table {
            width: 940px;
            th {
                height: 45px;
                padding: 0 10px;
                &:first-child,
                &:nth-child(5),
                &:nth-child(6) {
                    text-align: left;
                }
            }
            tr {
                border-top: 1px solid #F2F2F2;
                td {
                    height: 45px;
                    padding: 0 10px;
                    text-align: center;
                    &:first-child,
                    &:nth-child(5),
                    &:nth-child(6) {
                        text-align: left;
                    }
                }
            }
        }
    }
</style>
