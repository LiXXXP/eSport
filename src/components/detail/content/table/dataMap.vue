<template>
    <div class="data-events">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">擅长地图</span>
        </div>
        <filter-bar :filterData="filterTitle"></filter-bar>
        <div class="content clearfix">
            <div class="team f-left">
                <div class="title flex flex_between flex_only_center">
                    <div class="flex flex_start flex_only_center">
                        <img src="../../../../assets/imgs/detail/4.png">
                        <p>Liquid</p>
                    </div>
                    <div class="look">查看更多</div>
                </div>
                <div class="collapse">
                    <el-collapse
                        v-model="activeNames"
                        @change="handleChange"
                        accordion
                    >
                        <el-collapse-item>
                            <template slot="title">
                                <div class="title flex flex_end">
                                    <p>Overpass</p>
                                    <p>18胜/12负</p>
                                    <p class="rate">63.26%</p>
                                </div>
                            </template>
                            <div class="content">
                                <p>先CT实际地图数量：<span>18</span></p>
                                <p>先CT实际地图数量：<span>18</span></p>
                                <p>先CT实际地图数量：<span>18</span></p>
                                <p>先CT实际地图数量：<span>18</span></p>
                                <p>先CT实际地图数量：<span>18</span></p>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
            <div class="team f-right">
                <div class="title flex flex_between flex_only_center">
                    <div class="flex flex_start flex_only_center">
                        <img src="../../../../assets/imgs/detail/4.png">
                        <p>Liquid</p>
                    </div>
                    <div class="look">查看更多</div>
                </div>
                <div class="collapse">
                    <el-collapse
                        v-model="activeNames"
                        @change="handleChange"
                        accordion
                    >
                        <el-collapse-item>
                            <template slot="title">
                                <div class="title flex flex_end">
                                    <p>Overpass</p>
                                    <p>18胜/12负</p>
                                    <p class="rate">63.26%</p>
                                </div>
                            </template>
                            <div class="content">
                                <p>先CT实际地图数量：<span>18</span></p>
                                <p>先CT实际地图数量：<span>18</span></p>
                                <p>先CT实际地图数量：<span>18</span></p>
                                <p>先CT实际地图数量：<span>18</span></p>
                                <p>先CT实际地图数量：<span>18</span></p>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import filterBar from '@/components/detail/content/filter/filterBar'  // 筛选
    export default {
        data() {
            return {
                filterTitle: [   // 筛选条件
                    {
                        title: '查询对局数量'
                    }
                ],
                activeNames: ['0'],
            }
        },
        methods: {
            handleChange(val) {
                // console.log(val);
            }
        },
        components: {
            filterBar
        }
    }
</script>

<style lang="less" scoped>
    .data-events {
        .content {
            width: 960px;
            &.clearfix {
                margin-top: 2px;
            }
            .team {
                width: 475px;
                background-color: #fff;
                .title {
                    height: 48px;
                    padding: 0 10px;
                    font-weight: 600;
                    box-sizing: border-box;
                    img {
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
                    }
                    .look {
                        padding: 4px;
                        cursor: pointer;
                        font-weight:500;
                        color: #2F3A5A;
                        border-radius:4px;
                        border: 1px solid #2F3A5A;
                    }
                }
                .collapse {
                    .title {
                        width:478px;
                        height:48px;
                        background: url('../../../../assets/imgs/detail/bj.png') no-repeat 0 0;
                        background-size: 100%;
                        p {
                            color: #303030;
                            font-size: 16px;
                            font-weight: 500;
                            margin-left: 18px;
                            &.rate {
                                color: #00AB49;
                            }
                        }
                    }
                    .content {
                        padding: 15px;
                        background-color: #F8F8F8;
                        p {
                            color: #878787;
                            font-size: 14px;
                            font-weight: 500;
                            span {
                                color: #FF7600;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="less">
    .data-events {
        .el-collapse-item__header {
            justify-content: space-between;
            .el-collapse-item__arrow {
                margin: 0;
                margin-right: 10px;
            }
        }
        .el-collapse-item__content {
            padding-bottom: 0;
        }
    }
</style>
