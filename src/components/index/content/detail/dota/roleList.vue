<template>
    <div class="role-list">
        <div class="info flex flex_start">
            <p class="beyond-ellipsis">RNG.mlxg</p>
            <p>12/10/42</p>
        </div>
        <div class="flex flex_start flex_center">
            <div class="hero">
                <img src="../../../../../assets/imgs/detail/2.png">
                <span>16</span>
                <i></i>
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
        </div>
    </div>
</template>

<script>
    export default {
        props: {

        },
        data () {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .role-list {
        margin-bottom: 6px;
        .hero {
            width: 75px;
            height: 42px;
            margin-right: 17px;
            position: relative;
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
        .outlet {
            height: 60px;
            margin-left: 8px;
            img {
                width: 37px;
                height: 28px;
                margin-right: 4px;
            }
        }
        .info {
            color: #fff;
            font-size: 12px;
            margin-bottom: 3px;
            p:nth-child(1) {
                width: 75px;
                margin-right: 22px;
            }
        }
    }
</style>
