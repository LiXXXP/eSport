<template>
    <div class="side-bar">
        <div class="bar-title">
            <span>全部游戏</span>
            <span>（2804）</span>
        </div>
        <slot name="search"></slot>
        <div class="bar-list">
            <div>炉石传说</div>
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title">
                        <img src="">英雄联盟
                    </template>
                    <div>2019 European Masters Summer</div>
                    <div>LCK Spring Promotion</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <slot name="page"></slot>
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
    .side-bar {
        width: 150px;
    }
</style>