<template>
    <div class="battle-log">
        <div
            v-for="item in logs"
            :key="item.team_id"
            :class="['team flex',{
                blue: item.faction === 'blue',
                red: item.faction === 'red'
        }]">
            <p :title="item.team_snapshot.full_name">
                {{item.team_snapshot.short_name}}
            </p>
            <div class="logs flex flex_center">
                <div class="block"></div>
                <div class="block"></div>
                <div class="block">
                    <img src="../../../../assets/imgs/detail/log03.png">
                </div>
                <div class="block">
                    <img src="../../../../assets/imgs/detail/log04.png">
                </div>
            </div>
        </div>
        <div class="kills flex flex_center">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block">
                <img src="../../../../assets/imgs/detail/log01.png">
            </div>
            <div class="block">
                <img src="../../../../assets/imgs/detail/log02.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            teamsData: {
                type: Array,
                default: []
            },
            factionsData: {
                type: Array,
                default: []
            },
            eventsLine: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {

            }
        },
        created() {
            console.log(this.eventsLine)
        },
        computed: {
            logs() {
                this.teamsData.forEach(e => {
                    this.factionsData.forEach( t => {
                        if(e.team_id === t.team_id) {
                            e.faction = t.faction
                        }
                    })
                })
                return this.teamsData
            }
        }
    }
</script>

<style lang="less" scoped>
    .battle-log {
        width: 954px;
        position: relative;
        .team {
            width: 100%;
            height: 48px;
            p {
                cursor: pointer;
                font-weight: 600;
                line-height: 48px;
                padding-left: 13px;
            }
            &.blue {
                background-color: rgba(41, 128, 217, .3);
                p {
                    color: #228EFC;
                }
            }
            &.red {
                margin-top: 1px;
                background-color: rgba(217, 70, 41, .3);
                p {
                    color: #E10000;
                }
            }
            .logs {
                .block {
                    width: 20px;
                    height: 24px;
                    margin: 0 2px;
                    cursor: pointer;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .kills {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate( 0, -50% );
            .block {
                width: 20px;
                height: 20px;
                cursor: pointer;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
