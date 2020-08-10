<template>
    <div class="kill-bar flex flex_start">
        <div class="bar"
            v-for="bar in barData"
            :key="bar.id">
            <p v-for="item in barList"
                :key="item.id"
                :style="{'background-color': item.color}"
            ></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            barData: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                barList: [
                    {
                        i: 0,
                        color: '#F5B500'
                    },
                    {
                        i: 1,
                        color: '#434343'
                    },
                    {
                        i: 2,
                        color: '#434343'
                    },
                    {
                        i: 3,
                        color: '#434343'
                    },
                    {
                        i: 4,
                        color: '#008BD3'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .kill-bar {
        .bar {
            margin-right: 7px;
            p {
                width:16px;
                height:3px;
                margin-bottom: 2px;
            }
        }
    }
</style>
