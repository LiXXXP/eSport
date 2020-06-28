<template>
    <div class="search-box flex flex_start" v-if="searchData.length !== 0">
        <img :src="searchData.image" class="events-img">
        <div class="info">
            <div class="flex flex_start flex_only_center">
                <img :src="searchData.country.image">
                <p>{{searchData.name}}</p>
            </div>
            <p>地点：{{searchData.country.name_cn}}</p>
            <p v-if="searchData.game">
                游戏项目：{{searchData.game.name_cn}}
            </p>
            <p v-if="searchData.teams">
                效力战队：
                <span
                    v-for="item in searchData.teams"
                    :key="item.team_id"
                >{{item.name}},</span>
            </p>
            <p>联赛级别：{{searchData.slug}}</p>
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
