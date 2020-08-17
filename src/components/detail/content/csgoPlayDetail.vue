<template>
    <div class="play-data">
        <!-- 选手数据 -->
        <player-table></player-table>
    </div>
</template>

<script>
    import playerTable from '@/components/detail/content/table/playerTable'          // 擅长英雄
    export default {
        data() {
            return {

            }
        },
        components: {
            playerTable,
        }
    }
</script>

<style lang="less" scoped>

</style>
