<template>
    <div class="footer page-content">
        <div class="footer-top flex flex_around">
            <div v-for="item in clubList"
                :key="item.id">
                <p>{{item.title}}</p>
                <router-link
                    class="link"
                    v-for="key in item.link"
                    :key="key.id"
                    :to=key.url
                >
                    {{key.title}} 比赛结果及赛程
                </router-link>
            </div>
        </div>
        <div class="footer-bottom flex flex_start flex_center">
            <img src="../../assets/imgs/index/footer.png">
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
                        title: '热门俱乐部',
                        link : [
                            {
                                id: 0,
                                title: 'fnatic',
                                url: ''
                            },
                            {
                                id: 1,
                                title: 'complexity',
                                url: ''
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: '热门游戏',
                        link : [
                            {
                                id: 0,
                                title: '反恐精英：全球攻势',
                                url: ''
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: '热门赛事',
                        link : [
                            {
                                id: 0,
                                title: '2018 HGC Mid Season Brawl',
                                url: ''
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .footer {
        .footer-top {
            padding: 12px 0;
            margin-top: 70px;
            text-align: center;
            border-top: 1px solid #293350;
            p {
                color: #E97A18;
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 12px;
            }
            .link {
                display: block;
                color: #515151;
                line-height: 24px;
                &:hover {
                    color: #E97A18;
                }
            }
        }
        .footer-bottom {
            color: #515151;
            padding: 12px 0;
            border-top: 1px solid #293350;
            img {
                width: 121px;
                height: 43px;
                margin-right: 22px;
            }
        }
    }
</style>
