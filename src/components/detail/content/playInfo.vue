<template>
    <div class="play-info">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">比赛信息</span>
        </div>
        <div class="info">
            <p>赛事进度：{{infoData.round_name}}/第{{infoData.round_order}}轮</p>
            <p>比赛地点：{{infoData.location}}</p>
            <p>相关描述：{{infoData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            infoData: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .play-info {
        .info {
            width: 980px;
            height: 97px;
            padding: 12px 26px;
            box-sizing: border-box;
            background-color: #fff;
            p {
                color: #434343;
                font-size: 14px;
                line-height: 24px;
            }
        }
    }
</style>
