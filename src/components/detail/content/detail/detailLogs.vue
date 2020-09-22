<template>
    <div class="detail-logs">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">比赛日志</span>
        </div>
        <div class="logs-block">
            <div class="tab flex flex_between">
                <div v-for="(item,index) in timeList"
                    :key=""
                    :class="{active: currentIndex === index}"
                    @click="currentIndex = index"
                >{{item.time}}</div>
            </div>
            <div class="cont">
                <battle-log
                    :teamsData="battleDetail.teams"
                    :factionsData="battleDetail.battle_detail.factions"
                    :eventsLine="battleDetail.battle_detail.events_timeline"
                ></battle-log>
                <p class="time flex flex_end">
                    {{durationTime(battleDetail.battle_detail.duration)}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import battleLog from '@/components/detail/content/chart/battleLog'      // 比赛日志

    import { formatSeconds } from '@/scripts/utils'

    export default {
        data() {
            return {
                timeList: [
                    {
                        time: '10:00-20:00'
                    },
                    {
                        time: '10:00-20:00'
                    },
                    {
                        time: '10:00-20:00'
                    },
                    {
                        time: '10:00-20:00'
                    }
                ],
                currentIndex: 0,  // 当前index
            }
        },
        computed: {
            battleDetail() {
                return this.$store.state.battlesData
            },
            durationTime(sec) {
                return function(sec) {
                    return formatSeconds(sec)
                }
            }
        },
        watch: {
            battleDetail() {
                return this.$store.state.battlesData
            }
        },
        components: {
            battleLog
        }
    }
</script>

<style lang="less" scoped>
    .detail-logs {
        .logs-block {
            width: 960px;
            .tab {
                div {
                    width: 238px;
                    height: 30px;
                    color: #878787;
                    cursor: pointer;
                    line-height: 30px;
                    text-align: center;
                    background-color: #E4E4E4;
                    border-radius: 4px 4px 0 0;
                    &.active {
                        color: #FF7600;
                        background-color: #fff;
                    }
                }
            }
            .cont {
                padding: 3px;
                box-sizing: border-box;
                background-color: #fff;
                .time {
                    color: #878787;
                    padding: 6px 0 3px;
                }
            }
        }
    }
</style>
