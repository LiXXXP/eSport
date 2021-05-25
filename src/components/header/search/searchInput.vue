<template>
    <div class="search-input flex flex_start">
        <div class="select">
            <el-select
                v-model="selectValue"
                @change="changeEvent">
                <el-option
                    v-for="item in selectList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </div>
        <div class="search">
            <el-select
                remote
                filterable
                v-model="query"
                placeholder="请输入关键词"
                :remote-method="searchMethod"
                :loading="loading"
            >
                    <el-option
                        v-for="item in searchList"
                        :key="item.player_id"
                        value="请输入关键词">
                        <search-box :searchData="item"></search-box>
                    </el-option>
                    <!-- 分页 -->
                    <div class="page flex flex_end" v-if="count>4">
                        <p @click="prePage">上一页</p>
                        <p @click="nextPage">下一页</p>
                    </div>
            </el-select>
        </div>
    </div>
</template>

<script>
    import searchBox from '@/components/header/search/searchBox'
    import { getSearchTeams, getSearchPlayers, getSearchTournament } from '@/scripts/request'
    export default {
        data() {
            return {
                selectValue: '战队',  // 俱乐部选择的值
                selectList: [     // 俱乐部选择列表
                    // {
                    //     value: 1,
                    //     label: '俱乐部'
                    // },
                    {
                        value: 2,
                        label: '战队'
                    },
                    {
                        value: 3,
                        label: '选手'
                    },
                    {
                        value: 4,
                        label: '赛事'
                    }
                ],
                searchList: [],    // 搜索列表
                resultList: [],    // 搜索条件返回的值
                loading: false,    // 搜索状态
                searchStates: [],  // 搜索联想
                query: '',         // 搜索框的值
                optionVal: 2,      // 选择 val值
                count: 0,          // 搜索结果总条数
                page: 1,           // 当前页
            }
        },
        mounted() {
            this.resultList = this.searchStates.map(item => {
                return item
            })
        },
        methods: {
            // 选择俱乐部or战队
            changeEvent(val) {
                this.optionVal = val
            },
            searchMethod(query) {
                if (query !== '') {
                    let params = {
                        search_info: query,
                        page: this.page,
                        limit: 4
                    }
                    this.query = query
                    if(this.optionVal === 0) {
                        this.$message({
                            message: '请先选择 俱乐部/战队',
                            type: 'warning',
                            offset: 100
                        })
                    }
                    if(this.optionVal === 2) {
                        this.getTeamList(params)
                    }
                    if(this.optionVal === 3) {
                        this.getPlayerList(params)
                    }
                    if(this.optionVal === 4) {
                        this.getTournamentList(params)
                    }
                    this.searchList = this.resultList.filter(item => {
                        if(item.team.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                            return item
                        }
                    })
                } else {
                    this.searchList = []
                }
            },
            // 获取战队列表
            getTeamList(params) {
                let _this = this
                _this.loading = true
                getSearchTeams(params).then(res => {
                    if (res.code === 200) {
                         _this.searchList = res.data.team_list
                         _this.count = res.data.count
                         _this.loading = false
                    }
                })
            },
            // 获取选手列表
            getPlayerList(params) {
                let _this = this
                _this.loading = true
                getSearchPlayers(params).then(res => {
                    if (res.code === 200) {
                         _this.searchList = res.data.player_list
                         _this.count = res.data.count
                         _this.loading = false
                    }
                })
            },
            // 获取赛事列表
            getTournamentList(params) {
                let _this = this
                _this.loading = true
                getSearchTournament(params).then(res => {
                    if (res.code === 200) {
                         _this.searchList = res.data.tournament_list
                          _this.count = res.data.count
                         _this.loading = false
                    }
                })
            },
            prePage() {
                if(this.page > 1) {
                    this.page -= 1
                    this.searchMethod(this.query)
                }
            },
            nextPage() {
                if(this.page < (this.count / 4)) {
                    this.page += 1
                    this.searchMethod(this.query)
                }
            }
        },
        components: {
            searchBox
        }
    }
</script>

<style lang="less" scoped>
    .search-input {
        height: 42px;
        .select {
            width: 124px;
        }
    }
    .page {
        padding-top: 7px;
        p {
            color: #2F375D;
            padding: 0 15px;
            cursor: pointer;
            border-right: 1px solid #2F375D;
            &:last-child {
                border: 0;
            }
            &:hover {
                color: #FF7800;
            }
        }
    }
</style>

<style lang="less">
    .el-input__inner {
        border: 0 !important;
        border-radius: 0 !important;
    }
    .select {
        .el-input__inner {
            height: 42px;
            background-color: #f6f6f6;
        }
    }
    .search {
        .el-select {
            width: 326px;
        }
        .el-input__inner {
            height: 42px;
            background-color: #dedede;
        }
    }
    .el-select-dropdown__item {
        height: auto !important;
        line-height: 22px !important;
        &.selected {
            color: #606266;
        }
    }
    .el-select-dropdown {
        top: 30px !important;
        border-radius: 0;
        border: 1px solid #b8bcd2;
    }
    .el-popper[x-placement^=bottom] .popper__arrow {
        display: none;
    }
    .el-select .el-input.is-focus .el-input__inner {
        border: 0;
        border-radius: 0;
    }

</style>
