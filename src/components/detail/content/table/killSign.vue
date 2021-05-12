<template>
    <div class="kill-sign flex flex_column flex_around">
        <div :class="['block flex flex_only_center',{
            flex_row_reverse: isReverse
        }]">
            <span>{{sideData.first_half_score}}</span>
            <span :class="['sign',sideData.starting_side === 'terrorist'? 't':'ct']">
                {{
                    sideData.starting_side === 'terrorist' ? 'T':'CT'
                }}
            </span>
        </div>
        <div :class="['block flex flex_only_center',{
            flex_row_reverse: isReverse
        }]">
            <span>{{sideData.second_half_score}}</span>
            <span :class="['sign',sideData.starting_side === 'terrorist'? 'ct':'t']">
                {{
                    sideData.starting_side === 'terrorist' ? 'CT':'T'
                }}
            </span>
        </div>
        <div v-if="sideData.ot_score !== null"
            :class="['block flex flex_only_center',{
                flex_row_reverse: isReverse
        }]">
            <span>{{sideData.ot_score}}</span>
            <span class="sign ot">OT</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isReverse: {
                type: Boolean,
                default: false
            },
            sideData: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    @ct: #008BD3;
    @t: #F5B500;
    @ot: #434343;
    .kill-sign {
        height: 90px;
        .block {
            span {
                width: 18px;
                height: 18px;
                margin: 0 5px;
                color:#2F2F2F;
                font-size: 16px;
                line-height: 18px;
                text-align: center;
                &.sign {
                    color:#fff;
                    font-size: 12px;
                    border-radius: 100%;
                    &.t {
                        background-color: @t;
                    }
                    &.ct {
                        background-color: @ct;
                    }
                    &.ot {
                        background-color: @ot;
                    }
                }
            }
        }
    }
</style>
