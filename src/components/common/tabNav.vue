<template>
    <div class="tab-nav flex flex_start">
        <div :class="['title',`select-style${selectStyle}`,
              {active:index===currentIndex}]"
            v-for="(item,index) in navData"
            :key="item.id"
            @click="cutTab(index,item.title)"
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
            navData: {
                type: Array,
                default: []
            },
            selectStyle: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                currentIndex: 0,    // 当前标题索引
                isEvent: true,      // 是否打开赛事筛选
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            cutTab(index,title) {
                this.currentIndex = index
                if(title === '赛事筛选') {
                    this.$emit('openEvents', this.isEvent)
                    return
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .tab-nav {
        .title {
            width: 160px;
            height: 45px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            line-height: 45px;
            margin-right: 8px;
            text-align: center;
            box-sizing: border-box;

        }
        .select-style1 {
            color: #101010;
            background-color: #fff;
            &.active {
                color: #fff;
                background-color: #FF7800;
            }
        }
        .select-style2 {
            color: #2F375D;
            background-color: #fff;
            border: 1px solid #cfcfcf;
            &.active {
                color: #FF7800;
                border: 1px solid #FF7800;
            }
        }
        .select-style3 {
            color: #2F375D;
            border: 1px solid #2F375D;
            &.active {
                color: #fff;
                border: 1px solid #2F375D;
                background-color: #2F375D;
            }
        }
    }
</style>
