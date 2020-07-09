<template>
    <div class="battle-table">
        <table>
            <thead>
                <th v-for="item in heroList.titleList"
                    :key="item.title">
                    {{item.title}}
                </th>
            </thead>
            <tbody>
                <tr v-for="item in heroList.dataList"
                    :key="item.team">
                    <td class="flex flex_start flex_only_center">
                        <div class="head">
                            <img :src="item.url">
                            <span>25</span>
                        </div>
                        <p class="beyond-ellipsis">{{item.team}}</p>
                        <p class="number">四</p>
                        <p class="icon">
                            <i class="iconfont icon-yidongduan-LOLjian"></i>
                            <span>6</span>
                        </p>
                    </td>
                    <td>
                        <p>{{item.number1}}</p>
                        <p style="color:#FF7600">{{item.number2}}</p>
                    </td>
                    <td>{{item.choose}}</td>
                    <td>{{item.control}}</td>
                    <td class="t-left">
                        {{item.rate}}
                        <progress-bar
                            class="bar"
                            :progressData="playContrast"
                            :progressColor="'#CB2020'"
                            :progressRate="parseInt(item.rate)"
                        ></progress-bar>
                    </td>
                    <td class="t-left">
                        {{item.prop}}
                        <progress-bar
                            class="bar"
                            :progressData="playContrast"
                            :progressColor="'#33B3B8'"
                            :progressRate="parseInt(item.prop)"
                        ></progress-bar>
                    </td>
                    <td>{{item.join}}</td>
                    <td class="arts flex flex_end flex_only_center">
                        <img src="../../../../assets/imgs/detail/3.png">
                        <img src="../../../../assets/imgs/detail/3.png">
                        <img src="../../../../assets/imgs/detail/3.png">
                        <img src="../../../../assets/imgs/detail/3.png">
                        <img src="../../../../assets/imgs/detail/3.png">
                        <img src="../../../../assets/imgs/detail/3.png">
                        <img src="../../../../assets/imgs/detail/3.png">
                        <img src="../../../../assets/imgs/detail/3.png">
                        <img src="../../../../assets/imgs/detail/3.png">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'
    export default {
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
                            title: 'Team Liquid'
                        },
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
                    ],
                    dataList: [
                        {
                            url: require('../../../../assets/imgs/detail/2.png'),
                            team: 'RNG.uzi',
                            number1: '8/3/29',
                            number2: '7.45',
                            choose: '328',
                            control: '32862',
                            rate: '34.6%',
                            prop: '78%',
                            join: '34.6%'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/2.png'),
                            team: 'RNG.uzi',
                            number1: '8/3/29',
                            number2: '7.45',
                            choose: '328',
                            control: '32862',
                            rate: '34.6%',
                            prop: '78%',
                            join: '34.6%'
                        }
                    ]
                }
            }
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
        box-sizing: border-box;
        background-color: #fff;

        .t-left {
            .bar {
                width: 80px;
            }
        }
        .arts {
            img {
                width: 28px;
                height: 28px;
                margin-right: 3px;
                &:last-child {
                    margin-right: 0;
                    margin-left: 9px;
                }
                &:nth-child(2) {
                    margin-right: 9px;
                }
            }
        }
        .head {
            width: 36px;
            height: 36px;
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
