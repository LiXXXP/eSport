<template>
    <div class="role-list">
        <div v-for="item in factionData"
            :key="item.player.player_id">
            <div class="list flex flex_start flex_center">
                <div :class="['hero',isPlace?'border-blue':'border-red']">
                    <img :src="item.champion.image.small_image">
                    <span>{{item.level}}</span>
                    <i :class="{alive:item.is_alive}"></i>
                </div>
                <div class="art flex flex_column flex_between flex_only_center">
                    <img v-for="a in item.summoner_spells"
                        :key="a.external_id" :src="a.image" :title="a.name_cn">
                </div>
                <div class="outlet flex flex_column flex_between">
                    <div class="flex flex_only_center">
                        <div class="flex flex_wrap">
                            <div v-for="img in item.items" :key="img.item_id" class="imgs">
                                <img :src="img.image" :title="img.name_cn" v-if="img.image && !img.is_trinket">
                            </div>
                        </div>
                        <div>
                            <div v-for="img in item.items" :key="img.item_id" class="trinket">
                                <img :src="img.image" :title="img.name_cn" v-if="img.is_trinket">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info flex flex_between">
                <p>{{item.champion.name}}</p>
                <p>{{item.kills}}/{{item.deaths}}/{{item.assists}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isPlace: {       // 位置显示是否反转
                type: Number,
                default: 0
            },
            factionData: {    // 战队信息
                type: Array,
                default: () => []
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
        .list {
            margin-top: 10px;
        }
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
                width: 20px;
                height: 20px;
                display: block;
                margin-top: 5px;
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
            margin-left: 10px;
            img {
                width: 24px;
                height: 24px;
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
            padding: 0;
            width: 24px;
            height: 24px;
            line-height: 0;
            border-radius: 0;
            display: block;
            img {
                width: 24px;
                height: 24px;
            }
            &:hover {
                background-color: #fff;
            }
        }
        .el-button+.el-button {
            margin-left: 0;
        }
    }
</style>
