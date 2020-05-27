<template>
    <div class="index-content">
        <!-- tab切换栏 -->
        <index-tab></index-tab>
        <!-- 游戏列表 -->
        <game-list></game-list>
    </div>
</template>

<script>
    import indexTab from '@/components/index/content/tab/indexTab'  // tab切换栏
    import gameList from '@/components/index/content/game/gameList' // 游戏列表
    export default {
        data() {
            return {

            }
        },
        components: {
            indexTab,
            gameList
        }
    }
</script>

<style lang="less" scoped>
    .index-content {
        width: 980px;
    }
</style>
