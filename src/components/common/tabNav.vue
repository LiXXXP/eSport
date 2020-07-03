<template>
    <div class="tab-nav flex flex_start">
        <div class="nav-item flex flex_start"
            v-for="(item,index) in navData"
            :key="item.title"
            @click="cutTab(index,item.title)">
            <div :class="['title',`select-style${selectStyle}`,
                {active:index===currentIndex}]"
            >
                <i v-if="item.icon">
                    {{item.icon}}
                </i>
                <span>{{item.title}}</span>
            </div>
            <slot name="openlive" v-if="index===currentIndex"></slot>
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
                this.$emit('clickIndex',index)
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
        .nav-item {
            width: auto;
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
                width: 178px;
                height: 40px;
                color: #2F3A5A;
                margin-right: 0;
                line-height: 40px;
                background-color: #fff;
                border: 1px solid #2F3A5A;
                border-right: 0;

                &.active {
                    color: #fff;
                    background-color: #2F3A5A;
                }
            }
            &:first-child {
                .select-style2 {
                    border-radius: 4px 0 0 4px;
                }
            }
            &:last-child {
                .select-style2 {
                    border-radius: 0 4px 4px 0;
                    border-right: 1px solid #2F3A5A;
                }
            }
            .select-style3 {
                color: #2F375D;
                background-color: #fff;
                border: 1px solid #CFCFCF;
                &.active {
                    color: #fff;
                    border: 1px solid #FF7600;
                    background-color: #FF7600;
                }
            }
            .select-style4 {
                width: 180px;
                height: 48px;
                color: #2F3A5A;
                font-size: 18px;
                font-weight: 400;
                margin-right: 0;
                margin-left: 10px;
                line-height: 48px;
                letter-spacing: 1px;
                background-color: #fff;
                border: 1px solid #CFCFCF;
                &.active {
                    color: #fff;
                    border: 1px solid #FF7600;
                    background-color: #FF7600;
                }
            }
        }
    }
</style>
