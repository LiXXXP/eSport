<template>
    <div class="role-list">
        <div class="flex flex_start flex_center">
            <div :class="['hero',isPlace?'border-blue':'border-red']">
                <img src="../../../../../assets/imgs/detail/2.png">
                <span>16</span>
                <i></i>
            </div>
            <div class="art flex flex_column flex_between">
                <img src="../../../../../assets/imgs/detail/2.png">
                <img src="../../../../../assets/imgs/detail/2.png">
            </div>
            <div class="outlet flex flex_column flex_between">
                <div class="flex flex_start flex_only_center">
                    <img src="../../../../../assets/imgs/detail/2.png">
                    <img src="../../../../../assets/imgs/detail/2.png">
                    <img src="../../../../../assets/imgs/detail/2.png">
                </div>
                <div class="flex flex_start flex_only_center">
                    <img src="../../../../../assets/imgs/detail/2.png">
                    <img src="../../../../../assets/imgs/detail/2.png">
                    <img src="../../../../../assets/imgs/detail/2.png">
                </div>
            </div>
            <div class="role">
                <img src="../../../../../assets/imgs/detail/2.png">
            </div>
        </div>
        <div class="info flex flex_between">
            <p>RNG.mlxg</p>
            <p>12/10/42</p>
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
    .role-list {
        margin-bottom: 10px;
        .hero {
            width: 48px;
            height: 48px;
            margin-right: 5px;
            border: 1px solid transparent;
            position: relative;
            &.border-blue {
                border-color: #2980D9;
            }
            &.border-red {
                border-color: #FF1E00;
            }
            img {
                width: 100%;
                height: 100%;
            }
            span {
                width: 16px;
                height: 14px;
                color: #FFFEFE;
                display: block;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                background-color: #000;
                position: absolute;
                bottom: 0;
                left: 0;
            }
            i {
                width: 6px;
                height: 6px;
                z-index: 99;
                display: block;
                border: 1px solid #303030;
                background-color: #10CA10;
                transform: rotate(45deg);
                -moz-transform:rotate(45deg);
                -webkit-transform:rotate(45deg);
                -o-transform:rotate(45deg);
                position: absolute;
                left: 50%;
                bottom: -4.5px;
                margin-left: -3px;
            }
        }
        .art {
            height: 50px;
            img {
                width: 24px;
                height: 24px;
            }
        }
        .outlet {
            height: 50px;
            margin-left: 8px;
            img {
                width: 24px;
                height: 24px;
                margin-right: 2px;
            }
        }
        .role {
            img {
                width: 24px;
                height: 24px;
                margin-left: 10px;
            }
        }
        .info {
            color: #fff;
            font-size: 12px;
            margin-top: 5px;
            padding-right: 34px;
        }
    }
</style>
