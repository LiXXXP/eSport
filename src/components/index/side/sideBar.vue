<template>
    <div class="side-bar">
        <side-menu
            v-for="item in titleList"
            :key="item.id"
            :titleData="item"
        ></side-menu>
        <side-img></side-img>
    </div>
</template>

<script>
    import sideMenu from '@/components/common/sideMenu'    // 侧边栏
    import sideImg from '@/components/index/side/sideImg'  // 侧边图片位
    import {
        getGames,
        getEvents,
        getClubs
    } from '@/scripts/request'
    export default {
        data() {
            return {
                titleList: [    // 首页侧边栏标题
                    {
                        title: '全部游戏',
                        list: []
                    },
                    {
                        title: '热门赛事',
                        list: []
                    },
                    {
                        title: '热门俱乐部',
                        list: []
                    }
                ]
            }
        },
        mounted() {
            this.getGameList()
            this.getEventList()
            this.getClubList()
        },
        methods: {
            // 获取全部游戏列表
            getGameList() {
                let _this = this
                getGames().then(res => {
                    if (res.code === 1000) {
                        _this.titleList[0].list = res.data.list
                    }
                })
            },
            // 获取热门赛事
            getEventList() {
                let _this = this
                getEvents().then(res => {
                    if (res.code === 1000) {
                        _this.titleList[1].list = res.data.list
                    }
                })
            },
            // 获取热门俱乐部
            getClubList() {
                let _this = this
                getClubs().then(res => {
                    if (res.code === 1000) {
                         _this.titleList[2].list = res.data.list
                    }
                })
            },
        },
        components: {
            sideMenu,
            sideImg
        }
    }
</script>

<style lang="less" scoped>

</style>
