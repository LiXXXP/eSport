<template>
    <div class="detail-art">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">出装/技能/天赋</span>
        </div>
        <div class="content flex flex_between">
            <battle-art :borderColor="true"></battle-art>
            <battle-art :borderColor="false"></battle-art>
        </div>
    </div>
</template>

<script>
    import battleArt from '@/components/detail/content/chart/battleArt'      // 比赛日志
    export default {
        data() {
            return {

            }
        },
        components: {
            battleArt
        }
    }
</script>

<style lang="less" scoped>
    .detail-art {
        .content {
            width: 960px;
        }
    }
</style>
