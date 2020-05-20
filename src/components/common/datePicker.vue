<template>
    <div class="date-frame">
        <el-date-picker
            v-model="dateValue"
            type="date"
            format="yyyy年MM月dd日"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dateValue: '',
            }
        }
    }
</script>

<style lang="less" scoped>

</style>