<template>
    <div class="side-bar">
        <div class="bar-title">
            <span class="title">{{sideData.title}}</span>
            <!-- <span>（2804）</span> -->
        </div>
        <slot name="search"></slot>
        <div class="bar-list">
            <!-- 无折叠 -->
            <div class="twig flex flex_start flex_only_center"
                v-for="item in sideData.lists"
                :key="item.id">
                <img :src="sideData.icon">
                <span class="beyond-ellipsis">{{item.name}}</span>
            </div>
            <!-- 折叠面板 -->
            <el-collapse accordion>
                <el-collapse-item
                    v-for="item in sideData.list"
                    :key="item.id"
                >
                    <template slot="title">
                        <img :src="sideData.icon" class="title-icon">
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
        props: {
            sideData: {
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
