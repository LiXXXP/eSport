<template>
    <div class="detail-player">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">选手对局详情</span>
        </div>
        <div v-if="battleData.length > 0">
            <div v-for="item in battleData" :key="item.battle_id">
                <div v-if="targetMatchId === item.battle_id">
                    <battle-table
                        v-bind="$attrs"
                        :factionsData="item.factions"
                    ></battle-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import battleTable from '@/components/detail/content/chart/battleTable'  // 对局
    export default {
        props: {
            battleData: {
                type: Array,
                default: () => []
            },
            targetMatchId: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {

            }
        },
        components: {
            battleTable
        }
    }
</script>

<style lang="less" scoped>

</style>
