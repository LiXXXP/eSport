<template>
    <div class="footer page-content">
        <div class="footer-top flex flex_around">
            <div v-for="item in clubList"
                :key="item.title">
                <p>{{item.title}}</p>
                <div class="link"
                    v-for="(key,index) in item.link"
                    :key="key.id"
                >
                    <span v-if="index<6" @click="goDetail(key.game_id,key.team_id,key.name,key.tournament_id)">
                        {{key.name}} 比赛结果及赛程
                    </span>
                </div>
            </div>
        </div>
        <div class="footer-bottom flex flex_start flex_center">
            <img src="../../assets/imgs/index/footer.png">
            <div>
                <p>2019© All Rights Reserved.esportlivescore.cn</p>
                <p>
                    经营许可证：<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">京ICP备11025276号-3</a>
                    <img src="../../assets/h.png" class="h" />京公网安备 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502044856" target="_blank">11010502044856</a>
                </p>
                <p>声明：本网为非赢利站点，数据仅供电竞爱好者浏览使用,禁止非法滥用。</p>
                <p>网站登载广告均为客户表达方式和本网无关,内容如有违反国家法律规定的,网站有权随时予以删除。</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { getGames, getEvents, getTeams } from '@/scripts/request'
    export default {
        data() {
            return {
                clubList: [
                    {
                        title: '热门战队',
                        link : []
                    },
                    {
                        title: '热门游戏',
                        link : []
                    },
                    {
                        title: '热门赛事',
                        link : []
                    }
                ]
            }
        },
        created() {
            this.getTeamList()
            this.getGameList()
            this.getEventList()
        },
        methods: {
            // 获取热门战队
            getTeamList() {
                let _this = this
                getTeams().then(res => {
                    if (res.code === 200) {
                        _this.clubList[0].link = res.data
                    }
                })
            },
            // 获取全部游戏列表
            getGameList() {
                let _this = this
                let params = {
                    language: 1,   // 显示语言，1.中文,2.英文(默认为中文)
                    is_all: 0      // 是否显示全部:1.显示全部
                }
                getGames(params).then(res => {
                    if (res.code === 200) {
                        _this.clubList[1].link = res.data
                    }
                })
            },
            // 获取热门赛事
            getEventList() {
                let _this = this
                getEvents().then(res => {
                    if (res.code === 200) {
                        _this.clubList[2].link = res.data
                    }
                })
            },
            // 详情页
            goDetail(gameId,teamId,teamName,tournamentId,matchId) {
                if(tournamentId) {
                    this.$router.push({
                        path: '/events',
                        query: {
                            tournamentId: tournamentId
                        }
                    })
                }
                if(teamId) {
                    this.$router.push({
                        path: '/teams',
                        query: {
                            teamId: teamId,
                            gameId: gameId,
                            teamName: teamName
                        }
                    })
                }
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
                cursor: pointer;
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
            .h {
               width: 20px;
               height: 20px;
               margin: 0 5px;
               vertical-align: middle;
               display: inline-block;
            }
            a {
              color: #337ab7;
            }
        }
    }
</style>
