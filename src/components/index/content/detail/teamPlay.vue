<template>
    <div :class="['team-play flex flex_between flex_only_center',
        isPlace?'':'flex_row_reverse']">
        <div class="name">Alliance</div>
        <div class="plays flex flex_start">
            <p class="flex flex_center">
                <i class="icon-play01"></i>
                <span>10</span>
            </p>
            <p class="flex flex_center">
                <i class="icon-play02"></i>
                <span>10</span>
            </p>
            <p class="flex flex_center">
                <i class="icon-play03"></i>
                <span>10</span>
            </p>
            <p class="flex flex_center">
                <i class="icon-play04"></i>
                <span>10</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isPlace: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .team-play {
        color: #fff;
        width: 369px;
        height: auto;
        padding-bottom: 10px;
        border-bottom: 1px solid #878787;
        .name {
            font-size: 16px;
        }
        .plays {
            color: #CFCFCF;
            font-size: 14px;
            p {
                margin-right: 20px;
                i {
                    display: block;
                    margin-right: 5px;
                    &.icon-play01 {
                        width: 12px;
                        height: 16px;
                        background: url('../../../../assets/imgs/detail/play01.png') no-repeat 0 0;
                        background-size: 100%;
                    }
                    &.icon-play02 {
                        width: 15px;
                        height: 16px;
                        background: url('../../../../assets/imgs/detail/play02.png') no-repeat 0 0;
                        background-size: 100%;
                    }
                    &.icon-play03 {
                        width: 16px;
                        height: 16px;
                        background: url('../../../../assets/imgs/detail/play03.png') no-repeat 0 0;
                        background-size: 100%;
                    }
                    &.icon-play04 {
                        width: 16px;
                        height: 15px;
                        background: url('../../../../assets/imgs/detail/play04.png') no-repeat 0 0;
                        background-size: 100%;
                    }
                }
            }
        }
    }
    .flex_row_reverse {
        .plays {
            p {
                margin-right: 0;
                margin-left: 20px;
            }
        }
    }
</style>
