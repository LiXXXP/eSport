<template>
    <div class="play-data">
        <!-- 对局详情 -->
        <play-csgo></play-csgo>
        <!-- 选手数据 -->
        <player-table></player-table>
    </div>
</template>

<script>
    import playCsgo from '@/components/index/content/detail/playCsgo'   // 对局详情
    import playerTable from '@/components/detail/content/table/playerTable'          // 擅长英雄
    export default {
        data() {
            return {

            }
        },
        components: {
            playerTable,
            playCsgo
        }
    }
</script>

<style lang="less" scoped>

</style>
