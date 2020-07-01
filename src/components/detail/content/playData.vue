<template>
    <div class="play-data">
        <!-- 数据对比 -->
        <data-contrast></data-contrast>
        <!-- 擅长英雄 -->
        <data-hero></data-hero>
    </div>
</template>

<script>
    import dataContrast from '@/components/detail/content/data/dataContrast'  // 数据分析
    import dataHero from '@/components/detail/content/data/dataHero'      // 擅长英雄
    export default {
        data() {
            return {

            }
        },
        components: {
            dataContrast,
            dataHero
        }
    }
</script>

<style lang="less" scoped>

</style>
