<template>
    <div class="battle-team">
        <div class="block">
            <div class="title">
                <span>当前战队</span>
                <span>vs</span>
                <span>全部战队</span>
            </div>
            <div class="list">
                <battleTeam-list
                    v-for="item in teamsData.players"
                    :key="item.team_id"
                    :championData="item.champion"
                ></battleTeam-list>
            </div>
        </div>
    </div>
</template>

<script>
    import battleTeamList from '@/components/detail/content/chart/battleTeamList' // 战队
    export default {
        props: {
            teamsData: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {

            }
        },
        components: {
            battleTeamList
        }
    }
</script>

<style lang="less" scoped>
    .battle-team {
        .block {
            width:460px;
            height:344px;
            border-radius:4px;
            box-sizing: border-box;
            border:1px solid #CFCFCF;
            position: relative;
            .title {
                position: absolute;
                top: -11px;
                left: 50%;
                transform: translate(-50%, 0);
                span {
                    margin: 0 5px;
                    padding: 0 2px;
                    background-color: #fff;
                }
            }
            .list {
                padding: 0 50px;
            }
        }
    }
</style>
