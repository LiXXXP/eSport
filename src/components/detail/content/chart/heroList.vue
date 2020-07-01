<template>
    <div class="hero-list">
        <table>
            <thead>
                <th v-for="item in heroList.titleList"
                    :key="item.title">
                    {{item.title}}<br>{{item.rate}}
                </th>
            </thead>
            <tbody>
                <tr v-for="item in heroList.dataList"
                    :key="item.team">
                    <td>
                        <img :src="item.url">
                        {{item.team}}
                    </td>
                    <td>{{item.number}}</td>
                    <td>{{item.choose}}</td>
                    <td>{{item.control1}}</td>
                    <td>{{item.control2}}</td>
                    <td>{{item.control3}}</td>
                    <td>{{item.control4}}</td>
                    <td>{{item.win}}</td>
                    <td>
                        {{item.rate}}
                        <progress-bar
                            :progressData="playContrast"
                            :progressColor="'#01A045'"
                            :progressRate="parseInt(item.rate)"
                        ></progress-bar>
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
                            title: '选取次数'
                        },
                        {
                            title: '选取机率'
                        },
                        {
                            title: '峡谷先锋',
                            rate: '控制率'
                        },
                        {
                            title: '元素巨龙',
                            rate: '控制率'
                        },
                        {
                            title: '纳什男爵',
                            rate: '控制率'
                        },
                        {
                            title: '远古巨龙',
                            rate: '控制率'
                        },
                        {
                            title: '获胜次数'
                        },
                        {
                            title: '胜率'
                        }
                    ],
                    dataList: [
                        {
                            url: require('../../../../assets/imgs/detail/2.png'),
                            team: '寒冰射手',
                            number: '17/30',
                            choose: '34%',
                            control1: '57.3%',
                            control2: '48.2%',
                            control3: '36.8%',
                            control4: '23.3%',
                            win: '13',
                            rate: '78.2%'
                        },
                        {
                            url: require('../../../../assets/imgs/detail/2.png'),
                            team: '寒冰射手2',
                            number: '17/30',
                            choose: '34%',
                            control1: '57.3%',
                            control2: '48.2%',
                            control3: '36.8%',
                            control4: '23.3%',
                            win: '13',
                            rate: '78.2%'
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
    .hero-list {
        width: 923px;
        overflow-x: auto;
        overflow-y: hidden;
        background-color: #fff;
        &::-webkit-scrollbar {
            height: 12px;
            background-color: #E4E4E4;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 6px;
            background-color: #fff;
        }
        &::-webkit-scrollbar-track {
            background: #E4E4E4;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        }
        img {
            width: 36px;
            height: 36px;
            display: inline-block;
            vertical-align: middle;
        }
        table {
            width: 883px;
            margin: 0 auto;
            th {
                height: 45px;
                width: 50px;
            }
            td {
                height: 45px;
                text-align: center;
                border-top: 1px solid #F2F2F2;
            }
        }
    }
</style>
