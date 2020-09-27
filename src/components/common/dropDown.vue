<template>
    <div class="drop-down">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                全部<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                    v-for="item in dropList"
                    :key="item.title"
                >{{item.title}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        props: {
            dropList:{
                type: Array,
                default: []
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .drop-down {
        padding: 0 2px;
        font-size: 12px;
        border-radius:2px;
        border:1px solid #CFCFCF;
    }
</style>

<style lang="less">
    .drop-down {
        .el-dropdown {
            color: #FF7600;
            font-size: 12px;
            .el-icon--right {
                color: #606266;
            }
        }
    }
</style>
