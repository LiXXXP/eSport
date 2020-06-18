<template>
    <div class="role-list">
        <div class="flex flex_start flex_center">
            <div :class="['hero',isPlace?'border-blue':'border-red']">
                <img src="../../../../../assets/imgs/detail/2.png">
                <span>16</span>
                <i></i>
            </div>
            <div class="art flex flex_column flex_between">
                <el-tooltip placement="top">
                    <div slot="content" class="tips flex flex_start">
                        <img src="../../../../../assets/imgs/detail/3.png">
                        <div class="text">
                            <p>幽灵疾步</p>
                            <p>召唤师等级：1级</p>
                            <p>你的英雄能在移动时无视单位的碰撞体积，移动速度增加28-45%（基于英雄等级），持续10秒。</p>
                        </div>
                    </div>
                    <el-button><img src="../../../../../assets/imgs/detail/2.png"></el-button>
                </el-tooltip>
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
                <el-tooltip placement="top">
                    <div slot="content" class="tips flex flex_start">
                        <img src="../../../../../assets/imgs/detail/3.png">
                        <div class="text">
                            <p>幽灵疾步</p>
                            <p>召唤师等级：1级</p>
                            <p>你的英雄能在移动时无视单位的碰撞体积，移动速度增加28-45%（基于英雄等级），持续10秒。</p>
                            <p>总价格：<span>5900</span></p>
                        </div>
                    </div>
                    <el-button><img src="../../../../../assets/imgs/detail/2.png"></el-button>
                </el-tooltip>
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
    .tips {
        img {
            width: 50px;
            height: 50px;
            margin-right: 13px;
            border-radius: 4px;
            border: 1px solid #FF7600;
        }
        .text {
            width: 276px;
            p:nth-child(1) {
                color: #FF7600;
                font-size: 16px;
            }
            p:nth-child(2) {
                color: #fff;
                font-size: 12px;
                margin: 10px 0 20px;
            }
            p:nth-child(3) {
                color: #A2A2A2;
                font-size: 12px;
            }
            p:nth-child(4) {
                color: #CFCFCF;
                font-size: 14px;
                margin-top: 13px;
                span {
                    color: #FFE345;
                    font-weight: 500;
                }
            }
        }
    }
</style>

<style lang="less">
    .role-list {
        .el-button {
            border: 0;
            height: 0;
            padding: 0;
            &:hover {
                background-color: #fff;
            }
        }
    }
</style>
