<template>
    <div class="player-info">
        <player-info-base></player-info-base>
    </div>
</template>

<script>
    import playerInfoBase from '@/components/detail/content/chart/playerInfoBase'  // 基础数据
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        components: {
            playerInfoBase
        }
    }
</script>

<style lang="less" scoped>
    .player-info {
        padding: 15px;
        box-sizing: border-box;
        background-color: #fff;
    }
</style>
