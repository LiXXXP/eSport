<template>
    <div class="battle-art">
        <div class="flex flex_between flex_only_center">
            <img :src="factionsData.team_snapshot.image"
                 :title="factionsData.team_snapshot.full_name"
                 class="team">
            <div class="flex flex_start">
                <div :class="['hero', borderColor? 'blue' : 'red',
                     {active: currentIndex === index}]"
                    v-for="(item,index) in factionsData.players"
                    :key="item.player.player_id"
                    @click="getIndex(index)">
                    <img :src="item.champion.image.image">
                    <span>{{item.level}}</span>
                </div>
            </div>
        </div>
        <battle-outlet></battle-outlet>
        <battle-skill></battle-skill>
        <battle-gift></battle-gift>
    </div>
</template>

<script>
    import battleOutlet from '@/components/detail/content/chart/battleOutlet'       // 出装
    import battleSkill from '@/components/detail/content/chart/battleSkill'         // 技能
    import battleGift from '@/components/detail/content/chart/battleGift'           // 天赋
    export default {
        props: {
            borderColor: {
                type: Boolean,
                default: true
            },
            factionsData: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                heroList: [
                    {
                        id: 0,
                        url: require('../../../../assets/imgs/detail/2.png')
                    },
                    {
                        id: 1,
                        url: require('../../../../assets/imgs/detail/2.png')
                    },
                    {
                        id: 2,
                        url: require('../../../../assets/imgs/detail/2.png')
                    },
                    {
                        id: 3,
                        url: require('../../../../assets/imgs/detail/2.png')
                    },
                    {
                        id: 4,
                        url: require('../../../../assets/imgs/detail/2.png')
                    }
                ],
                currentIndex: 0,   // 当前索引
            }
        },
        methods: {
            getIndex(index) {
                this.currentIndex = index
            }
        },
        components: {
            battleOutlet,
            battleSkill,
            battleGift
        }
    }
</script>

<style lang="less" scoped>
    .battle-art {
        width: 479px;
        padding: 15px 20px;
        box-sizing: border-box;
        background-color: #fff;
        .team {
            width: 50px;
            height: 50px;
        }
        .hero {
            width: 62px;
            height: 62px;
            cursor: pointer;
            border-radius: 4px;
            border: 3px solid transparent;
            position: relative;
            &.blue.active {
                border: 3px solid #2980D9;
            }
            &.red.active {
                border: 3px solid #E10000;
            }
            img {
                width: 56px;
                height: 56px;
                display: block;
                margin: 3px auto;
            }
            span {
                color: #fff;
                padding: 0 2px;
                font-size: 12px;
                background-color: #000;
                position: absolute;
                bottom: 3px;
                left: 3px;
            }
        }
    }
</style>
