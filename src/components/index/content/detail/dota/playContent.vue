<template>
    <div class="play-content">
        <tab-nav
            :selectStyle="selectStyle"
            :navData="navList"
        ></tab-nav>
        <div class="title flex flex_start flex_only_center">
            <i></i>
            <span>对局详情</span>
        </div>
        <div class="content">
            <play-team></play-team>
            <div class="flex flex_center">
                <play-hero
                    :heroData="heroList"
                    :sizeData="size"
                    :seatData="true"
                ></play-hero>
                <div class="role">
                    <p>Ban</p>
                    <p>pick</p>
                </div>
                <play-hero
                    :heroData="heroList"
                    :sizeData="size"
                    :seatData="false"
                ></play-hero>
            </div>
            <play-progress
                :barColor="colorData"
            ></play-progress>
        </div>
    </div>
</template>

<script>
    import playTeam from '@/components/index/content/detail/playTeam'
    import playHero from '@/components/index/content/detail/playHero'
    import playProgress from '@/components/index/content/detail/playProgress'
    import tabNav from '@/components/common/tabNav'          // tab切换
    export default {
        data() {
            return {
                size: 'dota',
                colorData: {
                    left: '#3CAB3C',
                    right: '#CC5728'
                },
                heroList: [
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
                    },
                    {
                        id: 5
                    },
                    {
                        id: 6
                    },
                    {
                        id: 7
                    },
                    {
                        id: 8
                    },
                    {
                        id: 9
                    },
                    {
                        id: 10
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
            playTeam,
            playHero,
            playProgress,
            tabNav
        }
    }
</script>

<style lang="less" scoped>
    .play-content {
        padding: 24px 0 18px;
        .title {
            margin-top: 24px;
            i {
                width: 6px;
                height: 16px;
                display: block;
                border-radius: 3px;
                background-color: #2F3A5A;
            }
            span {
                color: #2F3A5A;
                font-size: 16px;
                margin-left: 7px;
                font-weight: 600;
            }
        }
        .content {
            width: 960px;
            height: 430px;
            margin-top: 12px;
            padding: 20px 70px;
            box-sizing: border-box;
            background-color: #fff;
            .role {
                height: 79px;
                margin-top: 9px;
                line-height: 40px;
                p {
                    width: 100px;
                    color: #101010;
                    font-size: 16px;
                    text-align: center;
                }
            }
        }
    }
</style>
