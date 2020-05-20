<template>
    <div class="tab-nav flex flex_start">
        <div :class="['title',isStyle ? 'orange-style':'bule-style',{active:index===current}]"
            v-for="(item,index) in titleList"
            :key="item.id"
            @click="active(index)"
        >
            <i v-if="item.icon">
                {{item.icon}}
            </i>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            selectStyle: Boolean
        },
        data() {
            return {
                isStyle: true,  // 样式更换 {true为橙色边框，false为蓝色填充}
                current: 0,     // 当前标题索引
                titleList: [    // 标题列表
                    {
                        id: 0,
                        title: '对局分析'
                    },
                    {
                        id: 1,
                        icon: 'icon',
                        title: 'Map1'
                    },
                    {
                        id: 2,
                        title: 'Map2'
                    }
                ]
            }
        },
        created() {
            
        },
        mounted() {

        },
        methods: {
            active(index) {
                this.current = index
            }
        }
    }
</script>

<style lang="less" scoped>
    .tab-nav {
        .title {
            width: 140px;
            height: 40px;
            color: blue;
            cursor: pointer;
            line-height: 40px;
            margin-right: 20px;
            text-align: center;
            box-sizing: border-box;
            border: 1px solid #cecece;
        }
        .bule-style {
            border-color: blue;
        }
        .bule-style.active {
            color: #fff;
            background-color: blue;
        }
        .orange-style.active {
            color: chocolate;
            border-color: chocolate;
        }
    }
</style>