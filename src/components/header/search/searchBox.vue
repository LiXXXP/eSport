<template>
    <div class="search-box flex flex_start" v-if="searchData.length !== 0">
        <img :src="searchData.eventUrl" class="events-img">
        <div class="info">
            <div class="flex flex_start flex_only_center">
                <img :src="searchData.url">
                <p>{{searchData.title}}</p>
            </div>
            <p>地点：{{searchData.addr}}</p>
            <p>游戏项目：{{searchData.game}}</p>
            <p>效力战队：{{searchData.team}}</p>
            <p>联赛级别：{{searchData.rank}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            searchData: {
                type: Object,
                default: null
            }
        },
        data() {
            return {

            }
        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
    .search-box {
        width: 280px;
        padding: 8px 0;
        border-bottom: 1px solid #CFCFCF;
        .events-img {
            width: 36px;
            height: 36px;
            margin-right: 10px;
        }
        .info {
            img {
                width: 20px;
                height: 12px;
                margin-right: 5px;
            }
            p {
                color: #101010;
                font-size: 12px;
            }
        }
    }
</style>
