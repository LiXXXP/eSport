<template>
    <div class="play-content">
        <div class="title flex flex_start flex_only_center">
            <i></i>
            <span>对局详情</span>
        </div>
        <div class="content">
            <play-team></play-team>
            <div class="flex flex_center">
                <play-hero></play-hero>
                <div class="role">
                    <p>Ban</p>
                    <p>pick</p>
                </div>
                <play-hero></play-hero>
            </div>
            <play-progress></play-progress>
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
        padding: 20px 0;
        .title {
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
            height: 472px;
            margin-top: 10px;
            padding: 20px 70px;
            box-sizing: border-box;
            background-color: #fff;
            .role {
                p {
                    color: #101010;
                    font-size: 16px;
                    padding: 0 20px;
                    line-height: 55px;
                    margin-right: 9px;
                }
            }
        }
    }
</style>
