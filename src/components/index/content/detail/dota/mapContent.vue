<template>
    <div class="map-content">
        <div class="top">
            <div class="flex flex_between flex_center">
                  <team-play :isPlace="playPlace.left"></team-play>
                  <div class="score flex flex_center">
                      <p class="left">28</p>
                      <div class="chessboard">
                          <p>第一局</p>
                          <p>24:36</p>
                      </div>
                      <p class="right">38</p>
                      <type-sign class="type-sign"></type-sign>
                  </div>
                  <team-play :isPlace="playPlace.right"></team-play>
            </div>
            <div class="flex flex_between flex_center">
                <div>
                    <role-list
                        v-for="item in leftRole"
                        :key="item.id"
                    ></role-list>
                </div>
                <map-block></map-block>
                <div>
                    <role-list
                        v-for="item in leftRole"
                        :key="item.id"
                    ></role-list>
                </div>
            </div>
        </div>
        <div class="bottom">
            <logs-list></logs-list>
        </div>
        <play-score></play-score>
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
        ></tab-nav>
    </div>
</template>

<script>
    import typeSign from '@/components/index/content/detail/typeSign'      // 标志
    import teamPlay from '@/components/index/content/detail/teamPlay'      // 对局数据
    import roleList from '@/components/index/content/detail/dota/roleList' // 角色列表
    import mapBlock from '@/components/index/content/detail/mapBlock'      // 地图
    import logsList from '@/components/index/content/detail/logsList'      // 比赛日志
    import playScore from '@/components/index/content/detail/playScore'    // 比赛比分
    import tabNav from '@/components/common/tabNav'                        // tab切换
    export default {
        data () {
            return {
                playPlace: {   // 对局数据显示方向，1为左，0为右
                    left: 1,
                    right: 0,
                },
                leftRole: [
                    {
                        id: 0
                    },
                    {
                        id: 1
                    },
                    {
                        id: 2
                    },
                    {
                        id: 3
                    },
                    {
                        id: 4
                    }
                ],
                // 当前tab栏样式，
                // 1为首页橙色填充样式
                // 2为详情页边框样式
                // 3为详情页填充样式
                // 4为详情直播按钮
                selectStyle: 3,
                navList: [
                    {
                        title: 'MAP 1'
                    },
                    {
                        title: 'MAP 2'
                    },
                    {
                        title: 'MAP 3'
                    },
                    {
                        title: 'MAP 4'
                    }
                ]
            }
        },
        components: {
            typeSign,
            teamPlay,
            roleList,
            mapBlock,
            logsList,
            playScore,
            tabNav
        }
    }
</script>

<style lang="less" scoped>
    .map-content {
        .top {
            height: 516px;
            padding: 10px 70px 0;
            box-sizing: border-box;
            .score {
                font-size: 20px;
                margin-top: 25px;
                position: relative;
                .left {
                    color: #10CA10;
                    margin-left: 20px;
                }
                .right {
                    color: #FF1E00;
                    margin-right: 20px;
                }
                .chessboard {
                    width: 100px;
                    color: #fff;
                    font-size: 14px;
                    text-align: center;
                }
                .type-sign {
                    position: absolute;
                    left: -74px;
                    bottom: -10px;
                }
            }
        }
        .bottom {
            height: 208px;
            margin-bottom: 24px;
            background-color: #283459;
            border: 2px solid #E4E4E4;
        }
    }
</style>
