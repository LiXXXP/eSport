<template>
    <div class="play-detail">
        <!-- 阵容分析 -->
        <detail-battle></detail-battle>
    </div>
</template>

<script>
    import detailBattle from '@/components/detail/content/detail/detailBattle'  // 阵容分析
    export default {
        data() {
            return {

            }
        },
        components: {
            detailBattle
        }
    }
</script>

<style lang="less" scoped>

</style>
