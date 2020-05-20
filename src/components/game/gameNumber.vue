<template>
    <div class="game-number">
        <div class="event-title flex flex_start">
            <div>单图指数</div>
            <div>独赢指数</div>
        </div>
        <div class="event-content flex flex_start">
            <div>
                <p>3.24</p>
                <i>live</i>
                <p>2.45</p>
            </div>
            <div>
                <p>3.24</p>
                <i>live</i>
                <p>2.45</p>
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
    .game-number {
        .event-title,
        .event-content {
            div {
                width: 100px;
                text-align: center;
            }
        }
    }
</style>