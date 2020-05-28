<template>
    <div class="side-img">
        <img :src="imgUrl">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgUrl: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .side-img {
        width: 205px;
        height: 120px;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
