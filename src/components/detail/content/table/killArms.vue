<template>
    <div class="kill-arms">
        <div class="block flex flex_center">
            <div v-for="item in eventsList"
                :key="item.type"
                :class="{back:eventsData[item.type].team_id !== sideData}"
            >
                <img
                    :src="item.url"
                    v-if="eventsData[item.type].team_id === sideData"
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            sideData: {
                type: Number,
                default: 0
            },
            eventsData: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                eventsList: [
                    {
                        url: require('../../../../assets/imgs/detail/csgo/q2.png'),
                        type: 'win_round_16'
                    },
                    {
                        url: require('../../../../assets/imgs/detail/csgo/q.png'),
                        type: 'first_to_5_rounds_wins'
                    },
                    {
                        url: require('../../../../assets/imgs/detail/csgo/q1.png'),
                        type: 'win_round_1'
                    }
                ]
            }
        },
    }
</script>

<style lang="less" scoped>
    .kill-arms {
        margin: 0 70px;
        .block {
            position: relative;
            &::after {
                content: '';
                height: 1px;
                width: 206px;
                display: block;
                background-color: #D8D8D8;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            div {
                z-index: 99;
                width: 20px;
                height: 20px;
                margin: 0 4px;
                &.back {
                    background-color: #E3E3E3;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

    }
</style>
