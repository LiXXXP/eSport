<template>
    <div class="play-score">
        <div class="flex flex_between">
            <div class="title flex flex_start flex_only_center">
                <i></i>
                <span>当前比分</span>
            </div>
            <div class="tips">
                <i class="iconfont icon-jinggao"></i>
                报告网站错误数据
            </div>
        </div>
        <div class="content flex flex_between">
            <div class="flex flex_center">
                <img src="../../../../assets/imgs/detail/4.png">
                <p>Astralis</p>
            </div>
            <div class="score flex flex_center">
                <p>2</p>
                <p>:</p>
                <p>0</p>
            </div>
            <div class="flex flex_center">
                <p>Astralis</p>
                <img src="../../../../assets/imgs/detail/4.png">
            </div>
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
    .play-score {
        .title {
            i {
                width: 6px;
                height: 16px;
                display: block;
                border-radius: 3px;
                background-color: #2F3A5A;
            }
            span {
                color: #2F3A5A;
                font-size: 16px;
                margin-left: 7px;
                font-weight: 600;
            }
        }
        .tips {
            color: #878787;
        }
        .content {
            width: 960px;
            height: 58px;
            color: #101010;
            padding: 0 30px;
            font-size: 18px;
            margin: 12px 0 24px;
            box-sizing: border-box;
            background-color: #fff;
            img {
                width: 38px;
                height: 42px;
                margin: 0 14px;
            }
            .score {
                color: #3D3D3D;
                font-size: 30px;
                p {
                    margin: 0 5px;
                    &:nth-child(1) {
                        color: #12BF12;
                    }
                    &:nth-child(3) {
                        color: #E74E11;
                    }
                }
            }
        }
    }
</style>
