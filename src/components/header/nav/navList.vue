<template>
    <div class="nav-list flex flex_start">
        <div :class="['nav-item',{active:index===current}]"
            v-for="(item,index) in navMenu"
            :key="item.key"
            @click="active(index)">
            <span>{{item.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                current: 0,  // 当前标题索引
                navMenu: [   // 页面导航
                    {
                        text: '即时比分',
                        url: '',
                        key: 0
                    },
                    {
                        text: '赛事',
                        url: '',
                        key: 1
                    },
                    {
                        text: '战队',
                        url: '',
                        key: 2
                    }
                ]
            }
    },
    methods: {
            active(index) {
                this.current = index
                switch (index) {
                    case 0:
                        this.$router.push('/index')
                        break
                    case 1:
                        this.$router.push('/events')
                        break
                    case 2:
                        this.$router.push('/teams')
                        break
                    default:
                        break
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .nav-list {
        width:calc(100% + 350px);
        background-color: #fff;
        .nav-item {
            color: #2F375D;
            font-size: 18px;
            cursor: pointer;
            padding: 15px 0;
            font-weight: 600;
            span {
                width: 140px;
                text-align: center;
                display: inline-block;
                border-right: 1px solid #B8BCD2;
                position: relative;
            }
            &:last-child {
                span {
                    border-right: 0;
                }
            }
        }
        .nav-item.active {
            color: #FF7800;
            span::before {
                content: "";
                width: 90px;
                height: 3px;
                position: absolute;
                left: 25px;
                bottom: -15px;
                background-color: #FF7800;
            }
        }
    }
</style>
