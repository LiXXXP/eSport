<template>
    <div class="game-table">
        <table>
            <thead>
                <th>
                    <div class="flex flex_start flex_only_center">
                        <img src="../../../../assets/imgs/1.png" class="event-icon">
                        <span class="beyond-ellipsis">2019国际邀请赛</span>
                    </div>
                </th>
                <th colspan="3">BO5</th>
                <th>
                    <img src="../../../../assets/imgs/index/sword.png" class="icons">
                </th>
                <th>
                    <img src="../../../../assets/imgs/index/xp.png" class="icons">
                </th>
                <th>
                    <img src="../../../../assets/imgs/index/tower.png" class="icons">
                </th>
                <th>
                    <img src="../../../../assets/imgs/index/barrack.png" class="icons">
                </th>
                <th>
                    <img src="../../../../assets/imgs/index/icon04.png" class="icons">
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">
                        <div class="flex flex_start">
                            <div class="flex flex_start flex_only_center">
                                <img src="../../../../assets/imgs/1.png" class="game-icon">
                                <div class="game-time">
                                    <p>09:30</p>
                                    <p>28/02</p>
                                </div>
                            </div>
                            <div >
                                <div class="flex flex_start flex_only_center">
                                    <img src="../../../../assets/imgs/1.png" class="team-icon">
                                        <p>Team Liquid</p>
                                </div>
                                <div class="flex flex_start flex_only_center">
                                    <img src="../../../../assets/imgs/1.png" class="team-icon">
                                        <p>Team Liquid</p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="game-score">2</td>
                    <td rowspan="2">
                        <div class="game-etc">
                            <p>第五局</p>
                            <p>25:06</p>
                        </div>
                    </td>
                    <td>R</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="game-score">2</td>
                    <td>D</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
    .game-table {
        width: 880px;
        height: 99px;
        box-sizing: border-box;
        table {
            cursor: pointer;
            thead {
                border-bottom: 1px solid #cfcfcf;
                th {
                    width: 36px;
                    color: #303030;
                    font-weight: 400;
                    text-align: left;
                    &:nth-child(1) {
                        width: 256px;
                    }
                    &:nth-child(2) {
                        width: 120px;
                    }
                }
            }
            tbody {
                tr {
                    td {
                        text-align: center;
                        border-top: 1px solid #cfcfcf;
                    }
                }
            }
            th,tr {
                height: 33px;
                line-height: 33px;
            }
        }
        .icons {
            width: 18px;
            height: 18px;
            display: block;
            margin: 7.5px auto;
        }
        .event-icon {
            width: 20px;
            height: 20px;
            display: block;
            margin-left: 22px;
            margin-right: 5px;
        }
        .game-time {
            margin-right: 19px;
            p {
                line-height: 20px;
            }
        }
        .game-etc {
            p {
                color: #00AB49;
                font-size: 14px;
                font-weight: bold;
                line-height: 20px;
            }
        }
        .game-icon {
            width: 30px;
            height: 30px;
            margin: auto 20px;
        }
        .team-icon {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }
        .game-score {
            border: 0;
            color: #00AB49;
            font-size: 14px;
            font-weight: bold;
        }
    }
</style>
