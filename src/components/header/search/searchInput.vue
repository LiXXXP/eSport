<template>
    <div class="search-input flex flex_start">
        <div class="select">
            <el-select
                v-model="selectValue"
                placeholder="俱乐部/战队"
                @change="changeEvent"
            >
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
                v-model="searchValue"
                filterable
                remote
                placeholder="请输入关键词"
                :remote-method="searchMethod"
                :loading="loading">
                    <el-option
                        v-for="item in searchList"
                        :key="item.id"
                        :value="item.team">
                        <!-- slot -->
                        <search-box :searchData="item"></search-box>
                    </el-option>
                    <!-- 分页 -->
                    <div class="page flex flex_end">
                        <p>上一页</p>
                        <p>下一页</p>
                    </div>
            </el-select>
        </div>
    </div>
</template>

<script>
    import searchBox from '@/components/header/search/searchBox'
    import {
        getClubs,
        getTeams
    } from '@/scripts/request'
    export default {
        data() {
            return {
                selectValue: '',  // 俱乐部选择的值
                selectList: [     // 俱乐部选择列表
                    {
                        value: 1,
                        label: '俱乐部'
                    },
                    {
                        value: 2,
                        label: '战队'
                    }
                ],
                searchList: [],   // 搜索列表
                searchValue: [],  // 搜索框的值
                resultList: [],   // 搜索条件返回的值
                loading: false,   // 搜索状态
                searchStates: []  // 搜索联想
            }
        },
        mounted() {
            this.resultList = this.searchStates.map(item => {
                return item
            });
        },
        methods: {
            // 选择俱乐部or战队
            changeEvent(val) {
                if(val === 1) {
                    this.getClubsList()
                } else {
                    this.getTeamsList()
                }
            },
            searchMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.searchList = this.resultList.filter(item => {
                            if(item.team.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                                return item
                            }
                        });
                    }, 200);
                } else {
                    this.searchList = [];
                }
            },
            // 获取俱乐部列表
            getClubsList() {
                let _this = this
                getClubs().then(res => {
                    if (res.code === 1000) {
                         _this.searchList = res.data.list
                    }
                })
            },
            // 获取战队列表
            getTeamsList() {
                let _this = this
                getTeams().then(res => {
                    if (res.code === 1000) {
                         _this.searchList = res.data.list
                    }
                })
            },
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
        border: 0;
        border-radius: 0;
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
        height: auto;
        line-height: 22px;
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
</style>
