<template>
    <div class="event-select">
        <div class="event-box">
            <el-checkbox-group
                v-model="checkedGames"
                @change="handleCheckedGamesChange">
                <el-checkbox
                    class="select-box flex flex_only_center"
                    v-for="item in games"
                    v-model="checkedGames"
                    :label="item"
                    :title="item.name"
                    :key="item.name"
                >{{item.name}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="event-btn flex flex_between">
            <div class="flex flex_start">
                <el-checkbox
                    v-model="checkAll"
                    :indeterminate="isIndeterminate"
                    @change="handleCheckAllChange"
                >全选</el-checkbox>
                <hr>
                <el-checkbox
                    :indeterminate="isIndeterminate"
                    @change="checkCon"
                >反选</el-checkbox>
                <div class="hide">隐藏了{{num}}场</div>
            </div>
            <div class="btn" @click="eventSelect">确定</div>
        </div>
    </div>
</template>

<script>
    import { getScreen } from '@/scripts/request'
    export default {
        data() {
            return {
                isEvent: false,         // 是否打开赛事筛选
                games: [],              // 赛事列表
                num: 0,                 // 隐藏场
                checkedGames: [],       // 选择的赛事
                checkAll: false,        // 是否全选
                isIndeterminate: true,  // 设置 indeterminate 状态，只负责样式控制
            }
        },
        created(){
            this.init()
        },
        methods: {
            init() {
                let params = {
                    page: 1,
                    limit: 8
                }
                let _this = this
                getScreen(params).then(res => {
                    if (res.code === 200) {
                        _this.games = res.data.tournament_list
                        _this.num = res.data.count - 8
                    }
                })
            },
            // 赛事选择
            handleCheckedGamesChange(value) {
                this.checkedGames = value
                let checkedCount = value.length
                this.checkAll = checkedCount === this.games.length
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.games.length
            },
            // 全选
            handleCheckAllChange(val) {
                this.checkedGames = val ? this.games : []
                this.isIndeterminate = false
            },
            // 反选
            checkCon() {
                let conArr = this.checkedGames
                this.checkedGames = this.games.filter(function (item) {
                    return conArr.indexOf(item) < 0
                })
            },
            eventSelect() {
                if(this.checkedGames.length > 0) {
                    this.$store.commit('getSelectMatchIds',this.checkedGames)
                    this.$emit('closeEvent',false)
                } else {
                    this.$message.warning('请先选择赛事哦')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .event-select {
        z-index: 999;
        width: 390px;
        height: 178px;
        cursor: pointer;
        overflow: hidden;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #b8bcd2;
        position: absolute;
        top: 46px;
        left: 51.5%;
        .event-box {
            height: 146px;
            .select-box {
                width: 150px;
                color: #878787;
                padding-top: 12px;
                padding-left: 10px;
            }
        }
        .event-btn {
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
            background-color: #F6F6F6;
            .select {
                width: 60px;
                text-align: center;
                position: relative;
                &:nth-child(2)::before {
                    content: '';
                    width: 1px;
                    height: 12px;
                    position: absolute;
                    top: 9px;
                    left: 0;
                    background-color: #2F375D;
                }
            }
            .hide {
                font-size: 12px;
                color: #878787;
                margin-left: 10px;
            }
            .btn {
                color: #fff;
                width: 100px;
                cursor: pointer;
                text-align: center;
                background-color: #2F375D;
            }
        }
    }
</style>

<style lang="less">
    .event-select {
        .select-box {
            .el-checkbox__inner {
                border-radius: 100%;
                border-color: #DCDFE6;
                &::after {
                    border: 0;
                    width: 6px;
                    height: 6px;
                    border-radius: 100%;
                    background-color: #FF7800;
                    top: 50%;
                    left: 50%;
                    margin-top: -3px;
                    margin-left: -3px;
                }
            }
            .el-checkbox__input {
                vertical-align: revert;
            }
            .el-checkbox__label {
                    width: 150px;
                    line-height: 15px;
                    padding-left: 5px;
                    overflow: hidden;
                    white-space: nowrap;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                }
            .el-checkbox__input.is-checked+.el-checkbox__label {
                color: #FF7800;
            }
            .el-checkbox__input.is-checked .el-checkbox__inner {
                border-color: #FF7800;
                background-color: #fff;
            }

        }
        .event-btn {
            .el-checkbox__input {
                display: none;
            }
            .el-checkbox {
                margin-right: 10px;
            }
            .el-checkbox__input.is-checked+.el-checkbox__label {
                color: #FF7800;
            }
        }
    }
</style>
