<template>
    <div class="kill-table">
        <table>
            <thead :class="colorBar==='blue'?'blue':'yellow'">
                <th>
                    <div class="flex flex_start flex_only_center">
                        <img src="../../../../assets/imgs/detail/4.png" class="team-icon">
                        <span class="beyond-ellipsis">Cloud9</span>
                    </div>
                </th>
                <th></th>
                <th>
                    <i class="icon-buy"></i>
                </th>
                <th>
                    <i class="icon-add"></i>
                </th>
                <th>
                    <i class="icon-head"></i>
                </th>
                <th>$</th>
                <th>K</th>
                <th>A</th>
                <th>D</th>
                <th>ADR</th>
            </thead>
            <tbody>
                <tr v-for="item in warData"
                    :key="item.name"
                    :class="[colorBar==='blue'?'blue':'yellow',{dark:item.add<=0}]"
                >
                    <td>{{item.name}}</td>
                    <td>
                        <i class="td-win" v-if="item.win"></i>
                    </td>
                    <td>
                        <img :src="item.buy" class="td-buy">
                    </td>
                    <td>
                        <div class="td-bar">
                            <progress-bar
                                :progressData="playContrast"
                                :progressColor="item.add>59?'#00AB49':item.add>39?'#F6B600':'#D94629'"
                                :progressRate="item.add"
                            ></progress-bar>
                            <p>{{item.add}}</p>
                        </div>
                    </td>
                    <td>
                        <i class="td-head"></i>
                    </td>
                    <td>${{item.coin}}</td>
                    <td>{{item.k}}</td>
                    <td>{{item.a}}</td>
                    <td>{{item.d}}</td>
                    <td>{{item.adr}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'
    export default {
        props: {
            colorBar: {
                type: String,
                default: ''
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
                warData: [
                    {
                        name: 'jksjksjksjksjksjksjksjks',
                        win: true,
                        buy: require('../../../../assets/imgs/detail/csgo/ak47.png'),
                        add: 77,
                        isHead: true,
                        coin: 4700,
                        k: 23,
                        a: 5,
                        d: 17,
                        adr: 97.7
                    },
                    {
                        name: 'jksjksjs',
                        win: false,
                        buy: require('../../../../assets/imgs/detail/csgo/ak47.png'),
                        add: 8,
                        isHead: true,
                        coin: 4700,
                        k: 23,
                        a: 5,
                        d: 17,
                        adr: 97.7
                    },
                    {
                        name: 'jksjksjksjksjksjks',
                        win: false,
                        buy: require('../../../../assets/imgs/detail/csgo/ak47.png'),
                        add: 40,
                        isHead: true,
                        coin: 4700,
                        k: 23,
                        a: 5,
                        d: 17,
                        adr: 97.7
                    },
                    {
                        name: 'ddddasd',
                        win: false,
                        buy: require('../../../../assets/imgs/detail/csgo/ak47.png'),
                        add: 0,
                        isHead: true,
                        coin: 4700,
                        k: 23,
                        a: 5,
                        d: 17,
                        adr: 97.7
                    },
                    {
                        name: 'ererf',
                        win: false,
                        buy: require('../../../../assets/imgs/detail/csgo/ak47.png'),
                        add: 0,
                        isHead: true,
                        coin: 4700,
                        k: 23,
                        a: 5,
                        d: 17,
                        adr: 97.7
                    },
                ],

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
            border-spacing: 0px 2px;
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
                    line-height: 40px;
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
                            display: block;
                            margin: auto auto;
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
