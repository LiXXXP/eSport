<template>
    <div class="battle-outlet">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">出装</span>
        </div>
        <div class="outlet flex flex_start flex_wrap">
            <div class="block">
                <div class="flex flex_start">
                    <img src="../../../../assets/imgs/detail/3.png">
                    <img src="../../../../assets/imgs/detail/3.png">
                    <img src="../../../../assets/imgs/detail/3.png">
                </div>
                <p>00:02</p>
            </div>
            <i class="arrow"></i>
            <div class="block">
                <div class="flex flex_start">
                    <img src="../../../../assets/imgs/detail/3.png">
                </div>
                <p>00:02</p>
            </div>
            <i class="arrow"></i>
            <div class="block">
                <div class="flex flex_start">
                    <img src="../../../../assets/imgs/detail/3.png">
                    <img src="../../../../assets/imgs/detail/3.png">
                    <img src="../../../../assets/imgs/detail/3.png">
                </div>
                <p>00:02</p>
            </div>
            <i class="arrow"></i>
            <div class="block">
                <div class="flex flex_start">
                    <img src="../../../../assets/imgs/detail/3.png">
                    <img src="../../../../assets/imgs/detail/3.png">
                    <img src="../../../../assets/imgs/detail/3.png">
                </div>
                <p>00:02</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        }
    }
</script>

<style lang="less" scoped>
    .battle-outlet {
        .outlet {
            .block {
                margin-bottom: 15px;
                img {
                    width: 46px;
                    height: 46px;
                    margin-right: 3px;
                    border-radius:2px;
                }
                p {
                    color: #878787;
                    margin-top: 2px;
                    font-weight: 600;
                    text-align: center;
                }
            }
            .arrow {
                width: 7px;
                height: 7px;
                color: #878787;
                display: block;
                margin: 20px 10px 0 7px;
                transform: rotate(135deg);
                -webkit-transform: rotate(135deg);
                border-top: 1px solid #878787;
                border-left: 1px solid #878787;
            }
        }
    }
</style>
