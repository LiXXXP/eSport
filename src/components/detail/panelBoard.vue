<template>
    <div class="panel-board">
        <div class="flex flex_start flex_only_center"
            v-for="item in boardList"
            :key="item.id">
            <span>{{item.name1}}</span>
            <span>{{item.moving}}</span>
            <span>{{item.name2}}</span>
            <span>（{{item.sign}}）</span>
            <img src="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                boardList: [
                    {
                        id: 0,
                        name1: 'ssse',
                        name2: 'deddd',
                        moving: '击杀了',
                        sign: '爆头',
                        iconUrl: ''
                    },
                    {
                        id: 1,
                        name1: 'ssse',
                        name2: 'deddd',
                        moving: '放置了炸弹',
                        sign: '爆头',
                        iconUrl: ''
                    }
                ]
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
    .panel-board {
        height: 100px;
        overflow-y: scroll;
        background-color: #808080;
    }
</style>