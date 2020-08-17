<template>
    <div class="index">
        <!-- 首页头部 -->
        <header-top></header-top>
        <!-- 首页主体 -->
        <main class="page-content">
            <!-- 公告 -->
            <notice-bar></notice-bar>
            <!-- 面包屑导航 -->
            <bread-crumb></bread-crumb>
            <!-- 轮播图 -->
            <img-block v-if="this.$store.state.isCarouselShow"></img-block>
            <!-- 赛事内容 -->
            <div class="flex flex_between">
                <!-- 左侧边栏 -->
                <side-bar></side-bar>
                <!-- 内容 -->
                <router-view></router-view>
            </div>
        </main>
        <!-- 底部 -->
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import headerTop from '@/components/header/headerTop'       // 首页头部导航栏
    import noticeBar from '@/components/notices/noticeBar'      // 首页公告
    import breadCrumb from '@/components/common/breadCrumb'     // 首页面包屑导航
    import imgBlock from '@/components/index/carousel/imgBlock' // 首页轮播图
    import sideBar from '@/components/side/sideBar'             // 首页侧边栏
    import footerBar from '@/components/footer/footerBar'       // 底部
    export default {
        data () {
            return {

            }
        },
        components: {
            headerTop,
            noticeBar,
            breadCrumb,
            imgBlock,
            sideBar,
            footerBar
        }
    }
</script>

<style lang="less" scoped>

</style>
