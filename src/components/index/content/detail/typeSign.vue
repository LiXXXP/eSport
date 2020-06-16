<template>
    <div class="type-sign flex flex_around flex_center">
        <i class="icon-top"></i>
        <span>2.4k</span>
        <i class="icon-jb"></i>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .type-sign {
        color: #fff;
        width: 74px;
        height: 19px;
        padding: 0 9px;
        font-size: 12px;
        line-height: 19px;
        border-radius: 4px;
        text-align: center;
        box-sizing: border-box;
        background-color: #374673;
        .icon-top {
            width: 7px;
            height: 10px;
            display: block;
            background: url('../../../../assets/imgs/detail/top.png') no-repeat 0 0;
            background-size: 100%;
        }
        .icon-jb {
            width: 10px;
            height: 10px;
            display: block;
            background: url('../../../../assets/imgs/detail/jb.png') no-repeat 0 0;
            background-size: 100%;
        }
    }
</style>
