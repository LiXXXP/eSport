<template>
    <div class="play-score">
        <div class="top flex flex_between flex_center">
            <div>

            </div>
            <img src="">
            <div></div>
        </div>
        <div class="bottom">
            <table>
                <tbody>
                    <tr v-for="item in detailList"
                        :key="item.id">
                        <td>
                            <img :src="item.head">
                            <span>{{item.name}}</span>
                        </td>
                        <td>
                            <img v-for="key in item.blue"
                                :key="key.key"
                                :src="key.icon">
                        </td>
                        <td>
                            <img v-for="key in item.yellow"
                                :key="key.key"
                                :src="key.icon">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                detailList: [
                    {
                        id: 0,
                        head:require('../../assets/imgs/1.png'),
                        name: 'ddasdw',
                        blue: [
                            {
                                key: 0,
                                icon: require('../../assets/imgs/1.png')
                            },
                            {
                                key: 1,
                                icon: require('../../assets/imgs/1.png')
                            }
                        ],
                        yellow: [
                            {
                                key: 0,
                                icon: require('../../assets/imgs/1.png')
                            },
                            {
                                key: 1,
                                icon: require('../../assets/imgs/1.png')
                            }
                        ]
                    },
                    {
                        id: 1,
                        head:require('../../assets/imgs/1.png'),
                        name: 'ddasdw',
                        blue: [
                            {
                                key: 0,
                                icon: require('../../assets/imgs/1.png')
                            },
                            {
                                key: 1,
                                icon: require('../../assets/imgs/1.png')
                            }
                        ],
                        yellow: [
                            {
                                key: 0,
                                icon: require('../../assets/imgs/1.png')
                            },
                            {
                                key: 1,
                                icon: require('../../assets/imgs/1.png')
                            }
                        ]
                    }
                ]
            }
        },
        mounted() {
			let arr = [1,2,3,3,3,4,5,5,5,6,6,7]
			console.log([...new Set(arr)])
        }
    }
</script>

<style lang="less" scoped>
    table {
        text-align: center;
        border-collapse: collapse;
        td {
            color: #666;
            height: 40px;
            padding: 0 20px;
            border: 1px solid #cad9ea;
        }
        tr:nth-child(odd) {
            background-color: #fff;
        }
        tr:nth-child(even) {
            background-color: #F5FAFA;
        }
    }
</style>
