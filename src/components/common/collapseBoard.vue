<template>
    <div class="collapse-board">
        <el-collapse v-model="activeNames" @change="handleChange" accordion>
            <el-collapse-item :name="item.id" v-for="item in dataList" :key="item.id">
                <template slot="title">
                    <div>
                        <span>Dota2国际邀请赛</span>
                        <span>BO1</span>
                        <span>Newbee</span>
                        <span>1-0</span>
                    </div>
                </template>
                <div v-for="key in item.info" :key="key.id">
                    <span>{{key.time}}</span>
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
                        id: 0,
                        info: [
                            {
                                id: 0,
                                time: '24分49秒'
                            },
                            {
                                id: 1,
                                time: '24分49秒'
                            },
                            {
                                id: 2,
                                time: '24分49秒'
                            }
                        ]
                    },
                    {
                        id: 1,
                    }
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

</style>