<template>
    <div class="detail-content">
        <div class="head">
            <type-sign class="type-sign"></type-sign>
            <div class="score flex flex_center">
                <p class="left">43</p>
                <p class="right">38</p>
            </div>
        </div>
        <div class="flex flex_between flex_center">
            <team-play :isPlace="playPlace.left"></team-play>
            <div class="chessboard">
                <p>第一局</p>
                <p>24:36</p>
            </div>
            <team-play :isPlace="playPlace.right"></team-play>
        </div>
    </div>
</template>

<script>
    import typeSign from '@/components/index/content/detail/typeSign' // 标志
    import teamPlay from '@/components/index/content/detail/teamPlay' // 对局数据
    export default {
        data () {
            return {
                playPlace: {   // 对局数据显示方向，0为左，1为右
                    left: 1,
                    right: 0,
                },
            }
        },
        components: {
            typeSign,
            teamPlay
        }
    }
</script>

<style lang="less" scoped>
    .detail-content {
        width: 960px;
        height: 726px;
        margin-top: 12px;
        box-sizing: border-box;
        padding: 30px 70px 10px;
        background: url('../../../../../assets/imgs/detail/1.png') no-repeat 0 0;
        background-size: 100%;
        .head {
            position: relative;
            .type-sign {
                position: absolute;
                top: 3px;
                left: 50%;
                margin-left: -150px;
            }
            .score {
                font-size: 20px;
                font-weight: bold;
                p {
                    margin: 0 20px;
                    &.left {
                        color: #228EFC;
                    }
                    &.right {
                        color: #FF1E00;
                    }
                }
            }
        }
        .chessboard {
            color: #fff;
            font-size: 14px;
            text-align: center;
            margin-top: 20px;
        }
    }
</style>
