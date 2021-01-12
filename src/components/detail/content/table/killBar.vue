<template>
    <div class="kill-bar">
        <div class="bar">
            <p v-for="item in barList" :key="item.i"
                :style="{'background-color': item.color}">
                <i v-if="item.color==='#434343' && isHeadshot" style="width:4px;"></i>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            initColor: {  // 初始默认颜色
                type: String,
                default: ''
            },
            isReverse: {  // 显示反转
                type: Boolean,
                default: false
            },
            survivedNum: { // 存活人数
                type: Number,
                default: 0
            },
            isDeath: {    // 是否首杀
                type: Boolean,
                default: false
            },
            isHeadshot: { // 是否爆头
                type: Boolean,
                default: false
            },
            backColor: {  // 战队颜色
                type: String,
                default: ''
            }
        },
        data() {
            return {
                barList: [
                    {
                        i: 1,
                        color: this.initColor
                    },
                    {
                        i: 2,
                        color: this.initColor
                    },
                    {
                        i: 3,
                        color: this.initColor
                    },
                    {
                        i: 4,
                        color: this.initColor
                    },
                    {
                        i: 5,
                        color: this.initColor
                    }
                ]
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.barList.forEach( (e) => {
                    if(e.i <= this.survivedNum) {
                        e.color = JSON.parse(JSON.stringify(this.backColor))
                    }
                })
                if(this.survivedNum < 5 && this.isDeath) {
                    this.barList[this.survivedNum].color = '#434343'
                }
                if(this.isReverse) {
                    this.barList.reverse()
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .kill-bar {
        .bar {
            margin: 0 4.1px;
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
