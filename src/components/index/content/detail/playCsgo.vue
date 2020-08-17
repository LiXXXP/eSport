<template>
    <div class="play-csgo">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">对局详情</span>
        </div>
        <div class="map flex flex_center">
            <kill-arms></kill-arms>
            <kill-sign
                :isReverse="false"
            ></kill-sign>
            <div class="center flex flex_center">
                <p class="left">19</p>
                <img src="../../../../assets/imgs/detail/csgo/map_big06.png">
                <p class="right">16</p>
            </div>
            <kill-sign
                :isReverse="true"
            ></kill-sign>
            <kill-arms></kill-arms>
        </div>
        <div class="kill">
            <table cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <div class="flex flex_start">
                                <kill-bar
                                    :barData="barData"
                                ></kill-bar>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="flex flex_only_center">
                                <img src="../../../../assets/imgs/detail/4.png" class="team-img">
                                <p class="team-name">Astralis</p>
                                <img src="../../../../assets/imgs/detail/win.png" class="team-win">
                            </div>
                        </td>
                        <td class="list">
                            <div class="flex flex_start flex_only_center">
                                <div class="item">
                                    <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png">
                                </div>
                                <div class="item">
                                    <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png">
                                </div>
                            </div>
                        </td>
                        <td class="list">
                            <div class="flex flex_start flex_only_center">
                                <div class="item">
                                    <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png">
                                </div>
                                <div class="item">
                                    <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png">
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="flex flex_only_center">
                                <img src="../../../../assets/imgs/detail/4.png" class="team-img">
                                <p class="team-name">Astralis</p>
                                <img src="../../../../assets/imgs/detail/win.png" class="team-win">
                            </div>
                        </td>
                        <td class="list">
                            <div class="flex flex_start flex_only_center">
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item">
                                    <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png">
                                </div>
                                <div class="item">
                                    <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png">
                                </div>
                            </div>
                        </td>
                        <td class="list">
                            <div class="flex flex_start flex_only_center">
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item">
                                    <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png">
                                </div>
                                <div class="item">
                                    <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png">
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div class="flex flex_start">
                                <kill-bar
                                    :barData="barData"
                                ></kill-bar>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div class="info flex flex_end">
                <div class="flex flex_center">
                    <div>
                        <p class="bar blue"></p>
                        <p class="bar yellow"></p>
                    </div>
                    <p class="text">存活</p>
                </div>
                <div class="flex flex_center">
                    <p class="bar"></p>
                    <p class="text">阵亡</p>
                </div>
                <div class="flex flex_center">
                    <p class="bar black"></p>
                    <p class="text black">首个阵亡</p>
                </div>
                <div class="flex flex_center">
                    <p class="bar red"></p>
                    <p class="text red">被爆头</p>
                </div>
                <div class="hide">隐藏阵亡详情</div>
            </div>
        </div>

    </div>
</template>

<script>
    import killArms from '@/components/detail/content/table/killArms'  // 对局击杀
    import killSign from '@/components/detail/content/table/killSign'  // 对局击杀
    import killBar from '@/components/detail/content/table/killBar'         // 击杀条状
    export default {
        data() {
            return {
                barData: [
                    {
                        id: 0
                    },
                    {
                        id: 1
                    }
                ]
            }
        },
        components: {
            killArms,
            killSign,
            killBar
        }
    }
</script>

<style lang="less" scoped>
    .play-csgo {
        .map {
            width:960px;
            height:90px;
            background-color: #fff;
            .center {
                p {
                    font-size: 18px;
                    font-weight: 600;
                    &.left {
                        color: #09A709;
                        margin-left: 10px;
                    }
                    &.right {
                        color: #E64D11;
                        margin-right: 10px;
                    }
                }
                img {
                    width: 108px;
                    height: 70px;
                    margin: 0 30px;
                    border-radius: 4px;
                }
            }
        }
        .kill {
            width: 960px;
            margin-top: 6px;
            table {
                width: 100%;
                background-color: #fff;
                border-collapse: collapse;
                tr {

                    td {
                        padding: 5px 10px;
                        border: 1px solid #f1f1f1;
                        &:nth-child(1) {
                            width: 20%;
                        }
                        &:nth-child(2) {
                            width: 40%;
                        }
                        &:nth-child(3) {
                            width: 40%;
                        }
                    }
                }
                .team-img {
                    width: 21px;
                    height: 24px;
                }
                .team-name {
                    padding: 0 8px;
                    font-size: 16px;
                    font-weight: 500;
                    color: #0F0F0F;
                }
                .team-win {
                    width: 42px;
                    height: 23px;
                }
                .list {
                    .item {
                        width: 20px;
                        height: 20px;
                        margin-left: 4px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .info {
                margin-top: 6px;
                .flex {
                    margin-right: 20px;
                    .bar {
                        width: 16px;
                        height: 3px;
                        margin-right: 4px;
                        background-color: #878787;
                        &.blue {
                            margin-bottom: 5px;
                            background-color: #008CD4;
                        }
                        &.yellow {
                            background-color: #F7B700;
                        }
                        &.black {
                            background-color: #303030;
                        }
                        &.red {
                            background-color: #FF1E34;
                        }
                    }
                    .text {
                        color: #878787;
                        font-size: 12px;
                        font-weight: 600;
                        &.blue {
                            color: #008CD4;
                        }
                        &.yellow {
                            color: #F7B700;
                        }
                        &.black {
                            color: #303030;
                        }
                        &.red {
                            color: #FF1E34;
                        }
                    }
                }
                .hide {
                    color: #2F3A5A;
                    font-weight: 600;
                    padding: 5px 15px;
                    background-color: #fff;
                    border: 1px solid #CFCFCF;
                }
            }
        }
    }
</style>
