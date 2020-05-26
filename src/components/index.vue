<template>
    <div class="index">
        <!-- 首页头部 -->
        <header-top></header-top>
        <!-- 首页主体 -->
        <div class="page-content">
            <!-- 公告 -->
            <notice></notice>
            <!-- 面包屑导航 -->
            <bread-crumb></bread-crumb>
            <!-- 轮播图 -->
            <img-block></img-block>
            <!-- 赛事内容 -->
            <div class="flex flex_between">
                <!-- 左侧边栏 -->
                <side-bar></side-bar>
            </div>
        </div>
    </div>
</template>

<script>
    import headerTop from '@/components/header/headerTop'       // 首页头部导航栏
    import notice from '@/components/index/notices/notice'      // 首页公告
    import breadCrumb from '@/components/common/breadCrumb'     // 首页面包屑导航
    import imgBlock from '@/components/index/carousel/imgBlock' // 首页轮播图
    import sideBar from '@/components/index/side/sideBar' // 首页轮播图
    export default {
        name: 'index',
        data () {
            return {

            }
        },
        components: {
            headerTop,
            notice,
            breadCrumb,
            imgBlock,
            sideBar
        }
    }
</script>

<style lang="less" scoped>

</style>
