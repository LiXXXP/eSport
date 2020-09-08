<template>
    <div class="kill-bar flex flex_start">
        <div class="bar">
            <p
                v-for="item in barList"
                :key="item.i"
                :style="{'background-color': item.color}"
            >
                <i v-if="item.color==='#434343' && killsData.headshot_kills > 0"
                    :style="{'width': `${4*killsData.headshot_kills}px`}"
                ></i>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            killsData: {  // 击杀数据
                type: Object,
                default: {}
            },
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
            this.getkillsData()
        },
        methods: {
            getkillsData() {
                for(let i in this.barList) {
                    this.barList[i].color = '#CFCFCF'
                    if( i < this.killsData.survived_players) {
                        this.barList[i].color = this.backColor
                    }
                }
                if( (this.killsData.headshot_kills || 0 ) > 0) {
                    let index = this.killsData.survived_players || 0
                    if(index < 5) {
                        this.barList[index].color = '#434343'
                    }
                }
                if(this.isReverse) {
                    this.barList.reverse()
                }
            }
        },
        watch: {
            killsData(val,old) {
                this.getkillsData()
            }
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
