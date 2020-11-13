<template>
    <div class="kill-bar flex flex_start">
        <div class="bar">
            <p
                v-for="item in barList"
                :key="item.i"
                :style="{'background-color': item.color}"
            >
                <i v-if="item.color==='#434343' && 3 > 0"
                    :style="{'width': `${4*3}px`}"
                ></i>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            backColor: {  // 显示颜色
                type: String,
                default: ''
            },
            isReverse: {  // 显示反转
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                barList: [
                    {
                        i: 0,
                        color: '#CFCFCF'
                    },
                    {
                        i: 1,
                        color: '#CFCFCF'
                    },
                    {
                        i: 2,
                        color: '#CFCFCF'
                    },
                    {
                        i: 3,
                        color: '#CFCFCF'
                    },
                    {
                        i: 4,
                        color: '#CFCFCF'
                    }
                ]
            }
        },
        created() {

        },
        methods: {

        },
        watch: {

        }
    }
</script>

<style lang="less" scoped>
    .kill-bar {
        .bar {
            margin-left: 8px;
            p {
                width: 16px;
                height: 3px;
                overflow: hidden;
                margin-bottom: 2px;
                position: relative;
                i {
                    height: 3px;
                    display: block;
                    background-color: #FF1E34;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
            }
        }
    }
</style>
