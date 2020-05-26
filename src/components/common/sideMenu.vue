<template>
    <div class="side-bar">
        <div class="bar-title">
            <span class="title">全部游戏</span>
            <!-- <span>（2804）</span> -->
        </div>
        <slot name="search"></slot>
        <div class="bar-list">
            <!-- <div>炉石传说</div> -->
            <el-collapse accordion >
                <el-collapse-item
                    v-for="item in sideList"
                    :key="item.id"
                >
                    <template slot="title">
                        <img :src="item.icon" class="title-icon">
                        {{item.name}}
                    </template>
                    <div class="detail"
                        v-for="key in item.text"
                        :key="key.id">
                        {{key.dec}}
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <slot name="page"></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sideList:[
                    {
                        id: 0,
                        icon: require('../../assets/imgs/1.png'),
                        name: '英雄联盟',
                        text: [
                            {
                                id: 0,
                                dec: '2019 European Masters Summer'
                            },
                            {
                                id: 1,
                                dec: 'LCK Spring Promotion'
                            }
                        ]
                    },
                    {
                        id: 1,
                        icon: require('../../assets/imgs/1.png'),
                        name: '英雄联盟',
                        text: [
                            {
                                id: 0,
                                dec: '2019 European Masters Summer'
                            },
                            {
                                id: 1,
                                dec: 'LCK Spring Promotion'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .side-bar {
        width: 205px;
        .bar-title {
            height: 50px;
            padding: 0 10px;
            line-height: 50px;
            box-sizing: border-box;
            background-color: #2f375d;
            .title {
                color: #fff;
                font-size: 18px;
                font-weight: 500;
            }
        }
        .bar-list {
            .title-icon {
                width: 20px;
                height: 20px;
                margin: 10px;
            }
            .detail {
              color: #878787;
              font-size: 12px;
              padding: 0 10px;
              padding-top: 5px;
            }
        }
    }
</style>

<style lang="less">
    .bar-list {
        .el-collapse {
            border: 0;
            .el-collapse-item {
                  &:nth-child(2n) {
                    .el-collapse-item__header,
                    .el-collapse-item__wrap {
                        background-color: #F6F6F6;
                    }
                }
            }
        }
        .el-collapse-item__header {
            height: 40px;
            border-bottom: 0;
            line-height: 40px;
        }
    }
</style>
