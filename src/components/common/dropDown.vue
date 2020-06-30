<template>
    <div class="drop-down">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                全部<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>1111</el-dropdown-item>
                <el-dropdown-item>2222</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
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
