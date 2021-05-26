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
            <!-- 路由页面 -->
            <router-view></router-view>
        </main>
        <!-- 底部 -->
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import headerTop from '@/components/header/headerTop'       // 首页头部导航栏
    import noticeBar from '@/components/notices/noticeBar'      // 首页公告
    import breadCrumb from '@/components/common/breadCrumb'     // 首页面包屑导航
    import footerBar from '@/components/footer/footerBar'       // 底部
    export default {
        metaInfo: {
            title: '电竞比分网 - 即时比分', // set a title
            meta: [{                 // set meta
              name: 'keyWords',
              content: '电竞比分网 - eSportLiveScore.cn|实时比分直播|比赛日程|比赛结果|历史数据'
            }],
            link: [{                 // set link
              rel: 'asstes',
              href: 'https://esportlivescore.cn/'
            }]
        },
        data () {
            return {

            }
        },
        components: {
            headerTop,
            noticeBar,
            breadCrumb,
            footerBar
        }
    }
</script>

<style lang="less" scoped>

</style>
