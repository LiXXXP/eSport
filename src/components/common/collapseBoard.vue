<template>
    <div class="collapse-board">
        <el-collapse
            v-model="activeNames"
            @change="handleChange"
            accordion
        >
            <el-collapse-item
                :name="item.id"
                v-for="item in dataList"
                :key="item.id"
            >
                <template slot="title">
                    <div class="title">
                        <p>dota2国际邀请赛</p>
                        <p>2019/08/23</p>
                    </div>
                    <div class="rank">BO1</div>
                    <div class="event flex flex_start flex_only_center"
                        v-if="blockType === 'short'">
                        <img src="../../assets/imgs/detail/3.png">
                        <p class="beyond-ellipsis">Newbee</p>
                    </div>
                    <div v-else class="team-vs flex flex_only_center">
                        <p class="beyond-ellipsis">Immortal Gaming</p>
                        <span class="vs">vs</span>
                        <p class="beyond-ellipsis">Newbee.young</p>
                    </div>
                    <div>
                        <span class="win">2</span>
                        <span>-</span>
                        <span class="lose">1</span>
                    </div>
                </template>
                <div class="content" v-if="blockType === 'short'">
                    <div class="line flex flex_between flex_only_center"
                        v-for="sum in item.games"
                        :key="sum.fruit">
                        <div>第1局</div>
                        <div>24分49秒</div>
                        <div>
                            <span>24</span>
                            <i class="fight-icons"></i>
                            <span>23</span>
                        </div>
                        <div class="icons flex flex_between">
                            <img v-for="key in sum.iconList"
                                :key="key.url"
                                :src="key.url">
                        </div>
                        <div :class="sum.fruit==='胜'?'win':'lose'">{{sum.fruit}}</div>
                    </div>
                </div>
                <div class="content" v-else>
                    <div class="line flex flex_between flex_only_center"
                        v-for="sum in item.games"
                        :key="sum.fruit">
                        <div>第1局</div>
                        <div>24分49秒</div>
                        <div class="team-vs flex flex_only_center">
                            <div class="icons flex flex_between">
                                <img v-for="key in sum.iconList"
                                    :key="key.url"
                                    :src="key.url">
                            </div>
                            <div class="both-sides">
                                <span>24</span>
                                <i class="fight-icons"></i>
                                <span>23</span>
                            </div>
                            <div class="icons flex flex_between">
                                <img v-for="key in sum.iconList"
                                    :key="key.url"
                                    :src="key.url">
                            </div>
                        </div>
                        <div>Newbee.young胜</div>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        props: {
            blockType: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                activeNames: ['0'],
                dataList: [
                    {
                        id: 0,
                        games: [
                            {
                                fruit: '胜',
                                iconList: [
                                    {
                                        url: require('../../assets/imgs/icons/icon01.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon03.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon05.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon07.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon08.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon09.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon10.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon12.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon13.png')
                                    }
                                ]
                            },
                            {
                                fruit: '负',
                                iconList: [
                                    {
                                        url: require('../../assets/imgs/icons/icon02.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon04.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon06.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon07.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon08.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon09.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon10.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon12.png')
                                    },
                                    {
                                        url: require('../../assets/imgs/icons/icon13.png')
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            handleChange(val) {
                // console.log(val);
            }
        }
    }
</script>

<style lang="less" scoped>
    @g: #45AF68;
    @r: #CF381B;
    .collapse-board {
        .win {
            color: @g;
            font-weight: bold;
        }
        .lose {
            color: @r;
            font-weight: bold;
        }
        .title {
            width: 125px;
            padding-left: 10px;
            line-height: 20px;
            p {
                overflow: hidden;
                white-space: nowrap;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
            }
        }
        .event {
            width: 134px;
            img {
                width: 24px;
                height: 24px;
                margin-right: 5px;
            }
        }
        .rank {
            color: #2F3A5A;
        }
        .team-vs {
            width: 470px;
            p {
                width:178px;
                &:first-child {
                    text-align: right;
                }
            }
            .vs {
                color: #2F2F2F;
                padding: 0 5px;
                font-weight: 600;
            }
        }
        .content {
            color: #2F2F2F;
            padding: 0 20px;
            background-color: #F7F5F5;
            .line {
                height: 38px;
                .both-sides {
                    margin: 0 10px;
                }
                .team-vs {
                    .fight-icons {
                        width: 13px;
                        height: 13px;
                        margin-bottom: 2px;
                        display: inline-block;
                        vertical-align: middle;
                        background: url('../../assets/imgs/icons/icon17.png') no-repeat 0 0;
                        background-size: 100%;
                    }
                    .icons {
                        width: 178px;
                        img {
                            width: 18px;
                            height: 18px;
                        }
                    }
                }
            }
        }
    }
</style>
