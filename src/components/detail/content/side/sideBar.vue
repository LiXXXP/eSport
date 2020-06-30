<template>
    <div class="side-bar">
        <div :class="['item',{active:currentIndex===index}]"
            v-for="(item,index) in sideList"
            :key="item.title"
            @click="cutTab(index)">
            {{item.title}}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentIndex: 0,   // 当前index
                sideList: [
                    {
                        title: '主要数据'
                    },
                    {
                        title: '特殊事件'
                    },
                    {
                        title: '基础数据'
                    }
                ]
            }
        },
        methods: {
            cutTab(index) {
                this.currentIndex = index
            }
        }
    }
</script>

<style lang="less" scoped>
    .side-bar {
        .item {
            width: 37px;
            height: 134px;
            color: #878787;
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 2px;
            padding: 25px 10px;
            box-sizing: border-box;
            background-color: #E4E4E4;
            border-radius:5px 0 0 5px;
            &.active {
                color: #FF7600;
                background-color: #fff;
            }
        }
    }
</style>
