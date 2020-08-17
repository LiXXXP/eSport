<template>
    <div class="data-hero">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">选手数据</span>
        </div>
        <div class="hero">
            <table>
                <thead>
                    <th>
                        <div class="flex flex_only_center">
                            <img src="../../../../assets/imgs/detail/4.png">
                            <p>Rating2.0</p>
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
                    <tr>
                        <td>
                            <div class="flex flex_only_center">
                                <p>Nipdfqqdzzr</p>
                                <i>Ace</i>
                            </div>
                        </td>
                        <td>12（9）</td>
                        <td>27（3）</td>
                        <td>23</td>
                        <td>78.29%</td>
                        <td>12-99</td>
                        <td>87.4</td>
                        <td>33-66</td>
                        <td>1.05</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="flex flex_only_center">
                                <p>Nipdfqqdzzr</p>
                                <i>Ace</i>
                            </div>
                        </td>
                        <td>12（9）</td>
                        <td>27（3）</td>
                        <td>23</td>
                        <td>78.29%</td>
                        <td>12-99</td>
                        <td>87.4</td>
                        <td>33-66</td>
                        <td>1.05</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <th>
                        <div class="flex flex_only_center">
                            <img src="../../../../assets/imgs/detail/4.png">
                            <p>Rating2.0</p>
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
                    <tr>
                        <td>
                            <div class="flex flex_only_center">
                                <p>Nipdfqqdzzr</p>
                                <i>Ace</i>
                            </div>
                        </td>
                        <td>12（9）</td>
                        <td>27（3）</td>
                        <td>23</td>
                        <td>78.29%</td>
                        <td>12-99</td>
                        <td>87.4</td>
                        <td>33-66</td>
                        <td>1.05</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="flex flex_only_center">
                                <p>Nipdfqqdzzr</p>
                                <i>Ace</i>
                            </div>
                        </td>
                        <td>12（9）</td>
                        <td>27（3）</td>
                        <td>23</td>
                        <td>78.29%</td>
                        <td>12-99</td>
                        <td>87.4</td>
                        <td>33-66</td>
                        <td>1.05</td>
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
                heroList: {

                }
            }
        },
        components: {

        }
    }
</script>

<style lang="less" scoped>
    .data-hero {
        .hero {
            table {
                width: 960px;
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
                        i {
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
