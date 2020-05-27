<template>
    <div class="side-bar">
        <side-menu
            :sideData="item"
            v-for="item in dataList"
            :key="item.id"
        ></side-menu>
    </div>
</template>

<script>
    import sideMenu from '@/components/common/sideMenu'
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
                                id: 1,
                                name: 'csgo',
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
            sideMenu
        }
    }
</script>

<style lang="less" scoped>

</style>
