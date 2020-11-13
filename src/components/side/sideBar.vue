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
    import sideImg from '@/components/side/sideImg'        // 侧边图片位
    import {
        getGames,
        getEvents
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
        },
        methods: {
            // 获取全部游戏列表
            getGameList() {
                let _this = this
                let params = {
                    language: 1,   // 显示语言，1.中文,2.英文(默认为中文)
                    is_all: 0      // 是否显示全部:1.显示全部
                }
                getGames(params).then(res => {
                    if (res.code === 200) {
                        _this.titleList[0].list = res.data
                    }
                })
            },
            // 获取热门赛事
            getEventList() {
                let _this = this
                getEvents().then(res => {
                    if (res.code === 200) {
                        _this.titleList[1].list = res.data
                    }
                })
            },
            // 获取热门俱乐部
        },
        components: {
            sideMenu,
            sideImg
        }
    }
</script>

<style lang="less" scoped>

</style>
