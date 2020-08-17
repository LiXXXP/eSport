<template>
    <div class="kill-sign flex flex_column flex_around">
        <div v-for="item in signList"
            :key="item.sign"
            :class="['block flex flex_only_center',{
                flex_row_reverse: isReverse
            }]">
            <span>{{item.num}}</span>
            <span :class="['sign',{
                t: item.sign === 'T',
                ct: item.sign === 'CT',
                ot: item.sign === 'OT'
            }]">
                {{item.sign}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isReverse: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                signList: [
                    {
                        num: 10,
                        sign: 'T'
                    },
                    {
                        num: 4,
                        sign: 'CT'
                    },
                    {
                        num: 3,
                        sign: 'OT'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    @t: #008BD3;
    @ct: #F5B500;
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
