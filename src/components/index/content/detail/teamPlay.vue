<template>
    <div :class="['team-play flex flex_between flex_only_center',{flex_row_reverse: !isPlace}]">
        <div :class="['team-name flex flex_start flex_only_center',{flex_row_reverse: !isPlace}]">
            <p :class="['faction',
                {
                  b: factionData.faction === 'blue',
                  r: factionData.faction === 'red'
            }]">{{factionData.faction === 'blue' ? 'B':'R'}}</p>
            <p class="name beyond-ellipsis" :title="factionData.team.name">
                {{factionData.team.name}}
            </p>
        </div>
        <div class="plays flex flex_between">
            <p class="flex flex_center">
                <i class="icon-play01"></i>
                <span>{{factionData.baron_nashor_kills || 0}}</span>
            </p>
            <p class="flex flex_center">
                <i class="icon-play02"></i>
                <span>{{factionData.dragon_kills || 0}}</span>
            </p>
            <p class="flex flex_center">
                <i class="icon-play03"></i>
                <span>{{factionData.inhibitor_kills || 0}}</span>
            </p>
            <p class="flex flex_center">
                <i class="icon-play04"></i>
                <span>{{factionData.turret_kills || 0}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isPlace: {      // 位置显示是否反转
                type: Number,
                default: 0
            },
            factionData: {   // 战队信息
                type: Object,
                default: {}
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
        width: 315px;
        height: auto;
        padding-bottom: 10px;
        border-bottom: 1px solid #878787;
        .team-name {
            font-size: 14px;
            .faction {
                width: 16px;
                height: 16px;
                color: #fff;
                font-size: 12px;
                line-height: 16px;
                border-radius: 100%;
                text-align: center;
                &.b {
                    margin-right: 2px;
                    background-color:#2980D9;
                }
                &.r {
                    margin-left: 2px;
                    background-color: #DF2017;
                }
            }
            .name {
                width: 80px;
            }
            &.flex_row_reverse {
                .name {
                    text-align: right;
                }
            }
        }
        .plays {
            width: 200px;
            color: #CFCFCF;
            font-size: 14px;
            p {
                i {
                    display: block;
                    margin-right: 3px;
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
</style>
