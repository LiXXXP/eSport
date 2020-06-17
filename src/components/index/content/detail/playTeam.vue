<template>
    <div class="play-team flex flex_between flex_center">
        <div class="team flex flex_only_center">
            <p class="left">B</p>
            <p>dsdsd</p>
            <img src="../../../../assets/imgs/detail/win.png">
        </div>
        <div class="time flex flex_only_center">
            <i class="iconfont icon-shijian"></i>
            <p>00:32:24</p>
        </div>
        <div class="team flex flex_only_center">
            <img src="../../../../assets/imgs/detail/win.png">
            <p>sddddd</p>
            <p class="right">R</p>
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

<style lang="less" scpoed>
    .play-team {
        padding-bottom: 4px;
        border-bottom: 1px solid #CFCFCF;
        .team {
            color: #101010;
            font-size: 18px;
            font-weight: 500;
            .left,
            .right {
                color: #fff;
                width: 20px;
                height: 20px;
                font-size: 14px;
                line-height: 20px;
                text-align: center;
                border-radius: 100%;
            }
            .left {
                margin-right: 6px;
                background-color: #2980D9;
            }
            .right {
                margin-left: 6px;
                background-color: #CC5728;
            }
            img {
                width: 65px;
                height: 36px;
                margin: 0 24px;
            }
        }
        .time {
            color: #101010;
            font-size: 16px;
            i {
                margin-right: 6px;
            }
        }
    }
</style>
