<template>
    <div class="play-score flex flex_between flex_center">
        <div class="team">
            <img src="../../../assets/imgs/detail/4.png">
            <p>Monolith</p>
        </div>
        <div class="score low">2</div>
        <div class="text">
            <p>2019-06-12 22:30</p>
            <p>QIWI TEAM PLAY SEASON 1</p>
            <p>(Best Of 1 Game)</p>
            <p>比赛结束</p>
        </div>
        <div class="score high">3</div>
        <div class="team">
            <img src="../../../assets/imgs/detail/4.png">
            <p>Liquid</p>
        </div>
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
    @r: #E10000;
    @g: #01A045;
    .play-score {
        width: 980px;
        height: 140px;
        padding: 25px 150px;
        box-sizing: border-box;
        background-color: #fff;
        background: url('../../../assets/imgs/detail/bj.png') no-repeat 0 0;
        background-size: 100%;
        .team {
            img {
                width: 60px;
                height: 60px;
                display: block;
                margin: 0 auto 10px;
            }
            p {
                color: #434343;
                font-size: 18px;
                font-weight: 500;
                text-align: center;
            }
        }
        .score {
            width: 40px;
            height: 60px;
            font-size: 26px;
            font-weight: 600;
            line-height: 60px;
            border-radius:4px;
            text-align: center;
            border: 1px solid #CFCFCF;
            background-color: #F6F6F6;
            &.low {
                color: @r;
            }
            &.high {
                color: @g;
            }
        }
        .text {
            color: #878787;
            font-size: 14px;
            line-height: 24px;
            text-align: center;
            p:nth-child(1),
            p:last-child {
                color: #434343;
                font-size: 16px;
            }
        }
    }
</style>
