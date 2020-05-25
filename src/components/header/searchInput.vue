<template>
    <div class="search-input flex flex_start">
        <div class="select">
            <el-select v-model="selectValue" placeholder="俱乐部/战队">
                <el-option
                    v-for="item in selectList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
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
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectList: [   // 选择列表
                    {
                        value: '1',
                        label: '选手'
                    },
                    {
                        value: '2',
                        label: '赛事'
                    }
                ],
                selectValue: '',  // 选择的值
                searchList: [],   // 搜索列表
                searchValue: [],  // 搜索框的值
                resultList: [],   // 搜索条件返回的值
                loading: false,   // 搜索状态
                searchStates: [   // 搜索联想
                    "Alabama", "Alaska", "Arizona"
                ]
            }
        },
        mounted() {
            this.resultList = this.searchStates.map(item => {
                return { value: `value:${item}`, label: `label:${item}` };
            });
        },
        methods: {
            searchMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.searchList = this.resultList.filter(item => {
                            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.searchList = [];
                }
            }
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
    .el-select-dropdown__item.selected {
        color: #606266;
    }
</style>
