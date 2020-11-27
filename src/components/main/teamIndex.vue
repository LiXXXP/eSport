<template>
    <div class="team">
        <div class="info flex flex_between flex_only_center">
            <img src="">
            <div class="text">
                <p class="title">RNG</p>
                <p class="depict">RoyalNeverGiveUp</p>
                <p>
                    RNG（RoyalNeverGiveUp）电子竞技俱乐部成立于2015年5月，
                    现LPL联盟成员之一。俱乐部LOGO标志以黑金为主色调，一个“R”字母简洁明了，
                    “ROYALNEVERGIVEUP”展现在“R”的下方，翻译为中文“皇族永不言弃”，
                    展示了他们永不放弃、战至最后一刻的决心。2018年RNG在一年中先后夺得了LPL春季赛冠军、
                    MSI季中邀请赛冠军、德玛西亚杯夏季赛冠军及2018年LPL夏季赛冠军，一年拿下无数冠军的同时，
                    也成为了LPL历史上第二支春夏双冠的队伍，创造了新的历史。
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'teamIndex',
        data () {
            return {

            }
        },
        components: {

        }
    }
</script>

<style lang="less" scoped>
    .team {
        .info {
            width: 1200px;
            height: 300px;
            border-radius: 1px;
            padding: 63px 110px;
            box-sizing: border-box;
            background-color: #fff;
            img {
                width: 288px;
                height: 174px;
            }
            .text {
                width: 598px;
                p {
                    color: #333;
                    line-height: 20px;
                    &.title {
                        font-size: 36px;
                        font-weight: 600;
                    }
                    &.depict {
                        font-size: 16px;
                        font-weight: 600;
                        margin: 10px 0 30px;
                    }
                }
            }
        }
    }
</style>
