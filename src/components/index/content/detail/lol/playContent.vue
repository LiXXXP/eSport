<template>
    <div class="play-content">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">队伍对局详情</span>
        </div>
        <div class="content">
            <play-team
                :teamsData="battleDetail"
            ></play-team>
            <div class="flex flex_center">
                <play-hero
                    :sizeData="size"
                    :seatData="false"
                    :heroList="battleDetail.battle_detail.ban_pick"
                ></play-hero>
                <div class="role">
                    <p>Ban</p>
                    <p>Pick</p>
                </div>
                <play-hero
                    :sizeData="size"
                    :seatData="true"
                    :heroList="battleDetail.battle_detail.ban_pick"
                ></play-hero>
            </div>
            <play-progress
                :barColor="colorData"
                :outputData="outputList"
                :progressData="battleDetail.battle_detail"
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
                size: 'lol',  // 英雄列表头像大小区分
                colorData: {
                    left: '#2980D9',
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
                        head: '水晶',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '峡谷先锋',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '元素巨龙',
                        num1: 8,
                        num2: 5
                    },
                    {
                        head: '纳什男爵',
                        num1: 8,
                        num2: 5
                    }
                ],
            }
        },
        computed: {
            battleDetail() {
                return this.$store.state.battlesData
            }
        },
        watch: {
            battleDetail() {
                return this.$store.state.battlesData
            }
        },
        components: {
            playTeam,
            playHero,
            playProgress
        }
    }
</script>

<style lang="less" scoped>
    .play-content {
        .content {
            width: 960px;
            height: 472px;
            padding: 20px 70px;
            box-sizing: border-box;
            background-color: #fff;
            .role {
                height: 119px;
                margin-top: 9px;
                line-height: 60px;
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
