<template>
    <div class="play-content">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">对局详情</span>
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
                class="progress"
                :barColor="colorData"
                :outputData="outputList"
            ></play-progress>
        </div>
    </div>
</template>

<script>
    import playTeam from '@/components/index/content/detail/playTeam'
    import playHero from '@/components/index/content/detail/playHero'
    import playProgress from '@/components/index/content/detail/playProgress'

    export default {
        data() {
            return {
                size: 'dota',
                colorData: {
                    left: '#3CAB3C',
                    right: '#CC5728'
                },
                outputList: [
                    {
                        head: '击杀',
                        num1: 7,
                        num2: 28
                    },
                    {
                        head: '经济(k)',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '推塔',
                        num1: 32,
                        num2: 28
                    },
                    {
                        head: '近战兵营',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '远程兵营',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '肉山',
                        num1: 8,
                        num2: 5
                    }
                ],
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
            }
        },
        components: {
            playTeam,
            playHero,
            playProgress,
        }
    }
</script>

<style lang="less" scoped>
    .play-content {
        padding: 24px 0 18px;
        .content {
            width: 960px;
            height: 430px;
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
            .progress {
                padding-top: 30px;
            }
        }
    }
</style>
