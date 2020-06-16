<template>
    <div class="side-bar">
        <div class="bar-title">
            <span class="title">{{titleData.title}}</span>
            <!-- <span>（2804）</span> -->
        </div>
        <slot name="search"></slot>
        <div class="bar-list">
            <!-- 折叠面板 -->
            <el-collapse accordion v-if="titleData.title === '全部游戏'">
                <el-collapse-item
                    v-for="item in titleData.list"
                    :key="item.game_id"
                >
                    <template slot="title">
                        <img :src="item.image" class="title-icon">
                        <span class="beyond-ellipsis">{{item.name}}</span>
                    </template>
                    <div class="detail">
                        赛事
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!-- 无折叠 -->
            <div class="twig flex flex_start flex_only_center" v-else
                v-for="item in titleData.list"
                :key="item.game_id"
            >
                <img :src="item.image">
                <span class="beyond-ellipsis">{{item.name}}</span>
            </div>
        </div>
        <slot name="page"></slot>
    </div>
</template>

<script>
    export default {
        props: {
            titleData: {
                type: Object,
                default: null
            }
        },
        data() {
            return {

            }
        },
        mounted() {
            // console.log(this.sideData)
        }
    }
</script>

<style lang="less" scoped>
    .side-bar {
        width: 205px;
        margin-bottom: 15px;
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
                width: 22px;
                height: 22px;
                margin: 10px 12px 10px 10px;
            }
            .detail {
                color: #878787;
                font-size: 12px;
                padding: 0 10px;
                padding-top: 5px;
            }
            .twig {
                cursor: pointer;
                min-height: 40px;
                line-height: 40px;
                box-sizing: border-box;
                background-color: #fff;
                &:nth-child(2n) {
                    background-color: #F6F6F6;
                }
                img {
                    width: 20px;
                    height: 20px;
                    margin: 10px;
                }
                span {
                    color: #101010;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
    }
</style>

<style lang="less">
    .bar-list {
        .el-collapse {
            border: 0;
            .el-collapse-item {
                .el-collapse-item__header {
                      color: #101010;
                      font-size: 16px;
                      font-weight: 500;
                }
                .el-collapse-item__wrap {
                    border-bottom: 0;
                }
                &:nth-child(2n) {
                    .el-collapse-item__header,
                    .el-collapse-item__wrap {
                        background-color: #F6F6F6;
                    }
                }
            }
        }
        .el-collapse-item__header {
            height: 44px;
            border-bottom: 0;
            line-height: 44px;
        }
    }
</style>
