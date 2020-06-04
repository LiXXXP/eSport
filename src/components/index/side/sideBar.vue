<template>
    <div class="side-bar">
        <side-menu
            v-for="item in titleList"
            :key="item.id"
            :titleData="item"
            :sideData="gameList"
        ></side-menu>
        <side-img></side-img>
    </div>
</template>

<script>
    import sideMenu from '@/components/common/sideMenu'    // 侧边栏
    import sideImg from '@/components/index/side/sideImg'  // 侧边图片位
    import { getGames } from '@/scripts/request'
    export default {
        data() {
            return {
                gameList: [],
                titleList: [    // 首页侧边栏标题
                    {
                        title: '全部游戏'
                    },
                    {
                        title: '热门赛事'
                    },
                    {
                        title: '热门俱乐部'
                    }
                ]
            }
        },
        mounted() {
            this.getGameList()
        },
        methods: {
            // 获取全部游戏列表
            getGameList() {
                let _this = this
                getGames().then(res => {
                    if (res.code === 1000) {
                        _this.gameList = res.data.list
                        console.log(_this.gameList)
                    }
                })
            }
        },
        components: {
            sideMenu,
            sideImg
        }
    }
</script>

<style lang="less" scoped>

</style>
