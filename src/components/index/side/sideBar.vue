<template>
    <div class="side-bar">
        <side-menu
            :sideData="item"
            v-for="item in dataList"
            :key="item.id"
        ></side-menu>
        <side-img></side-img>
    </div>
</template>

<script>
    import sideMenu from '@/components/common/sideMenu'    // 侧边栏
    import sideImg from '@/components/index/side/sideImg'  // 侧边图片位
    export default {
        data() {
            return {
                dataList: [
                    {
                        id: 0,
                        title: '全部游戏',
                        icon: require('../../../assets/imgs/1.png'),
                        list: [
                            {
                                id: 0,
                                name: '反恐精英：全球攻势',
                                text: [
                                    {
                                        id: 0,
                                        dec: '2019 European Masters Summer'
                                    },
                                    {
                                        id: 1,
                                        dec: 'LCK Spring Promotion'
                                    }
                                ]
                            },
                            {
                                id: 1,
                                name: '英雄联盟',
                                text: [
                                    {
                                        id: 0,
                                        dec: '2019 European Masters Summer'
                                    },
                                    {
                                        id: 1,
                                        dec: 'LCK Spring Promotion'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                name: '星际争霸Ⅱ'
                            },
                            {
                                id: 3,
                                name: '刀塔2'
                            },
                            {
                                id: 4,
                                name: '风暴英雄'
                            },
                            {
                                id: 5,
                                name: '守望先锋'
                            },
                            {
                                id: 6,
                                name: '炉石传说'
                            },
                            {
                                id: 7,
                                name: '坦克世界'
                            },
                            {
                                id: 8,
                                name: '使命召唤'
                            },
                            {
                                id: 9,
                                name: '神之浩劫'
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: '热门赛事',
                        icon: require('../../../assets/imgs/1.png'),
                        lists: [
                            {
                                id: 0,
                                name: '英雄联盟',
                            },
                            {
                                id: 1,
                                name: '英雄联盟',
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: '热门俱乐部',
                        icon: require('../../../assets/imgs/1.png'),
                        lists: [
                            {
                                id: 0,
                                name: 'sdsjkdhsjkhdjkshdjksahdjksahjkashj',
                            },
                            {
                                id: 1,
                                name: '英雄联盟',
                            }
                        ]
                    }
                ]
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
