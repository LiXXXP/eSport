<template>
    <div class="index-content">
        <!-- tab切换栏 -->
        <index-tab></index-tab>
        <!-- 游戏列表 -->
        <game-list></game-list>
    </div>
</template>

<script>
    import indexTab from '@/components/index/content/tab/indexTab'  // tab切换栏
    import gameList from '@/components/index/content/game/gameList' // 游戏列表

    export default {
        name: 'index',
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
        data() {
            return {}
        },
        components: {
            indexTab,
            gameList
        }
    }
</script>

<style lang="less" scoped>
    .index-content {
        width: 980px;
    }
</style>
