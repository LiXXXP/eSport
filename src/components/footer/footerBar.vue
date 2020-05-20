<template>
    <div class="footer">
        <div class="footer-top flex flex_around">
            <div>
                <p>热门俱乐部</p>
                <router-link
                    class="link"
                    v-for="item in clubList"
                    :key="item.id"
                    :to=item.url
                >
                    {{item.title}}
                </router-link>
            </div>
            <div>
                <p>热门游戏</p>
                <router-link
                    class="link"
                    v-for="item in clubList"
                    :key="item.id"
                    :to=item.url
                >
                    {{item.title}}
                </router-link>
            </div>
            <div>
                <p>热门赛事</p>
                <router-link
                    class="link"
                    v-for="item in clubList"
                    :key="item.id"
                    :to=item.url
                >
                    {{item.title}}
                </router-link>
            </div>
        </div>
        <div class="footer-bottom flex flex_start flex_center">
            <img src="">
            <div>
                <p>2019© All Rights Reserved.esportlivescore.com</p>
                <p>声明：本网为非赢利站点，数据仅供电竞爱好者浏览使用,禁止非法滥用。</p>
                <p>网站登载广告均为客户表达方式和本网无关,内容如有违反国家法律规定的,网站有权随时予以删除。</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                clubList: [
                    {
                        id: 0,
                        url:'',
                        title: '比赛结果及赛程'
                    },
                    {
                        id: 1,
                        url:'',
                        title: '比赛结果及赛程'
                    }
                ]
            }
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
    .footer {
        .footer-top {
            text-align: center;
            .link {
                color: #000;
                display: block;
            }
        }
    }
</style>