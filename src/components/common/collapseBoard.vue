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
                    <div class="event flex flex_start flex_only_center">
                        <img src="../../assets/imgs/detail/3.png">
                        <p class="beyond-ellipsis">Newbee</p>
                    </div>
                    <div class="board">1-0</div>
                </template>
                <div class="content">
                    <div  class="flex flex_between">
                        <div>第1局</div>
                        <div>24分49秒</div>
                        <div>2423</div>
                        <div>

                        </div>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeNames: ['0'],
                dataList: [
                    {
                        id: 0
                    },
                ]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style lang="less" scoped>
    @g: #45AF68;
    @r: #CF381B;
    .collapse-board {
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
        .board {
            color: #45AF68;
            font-weight: bold;
        }
        .content {
            padding: 0 20px;
            background-color: #F7F5F5;
        }
    }
</style>
