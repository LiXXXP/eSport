<template>
    <div class="main">
        <!-- 轮播图 -->
        <img-block v-if="this.$store.state.isCarouselShow"></img-block>
        <!-- 赛事内容 -->
        <div class="flex flex_between">
            <!-- 左侧边栏 -->
            <side-bar></side-bar>
            <!-- 内容 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import imgBlock from '@/components/index/carousel/imgBlock' // 首页轮播图
    import sideBar from '@/components/side/sideBar'             // 首页侧边栏
    export default {
        name: 'mainIndex',
        data () {
            return {

            }
        },
        components: {
            imgBlock,
            sideBar
        }
    }
</script>

<style lang="less" scoped>

</style>
