<template>
    <div class="kill-board flex flex_center">
        <div class="left">
            <div class="item flex flex_start"
                 v-for="item in boardData" :key="item.side">
                <div v-for="key in item.rounds_history.slice(0,15)"
                    :key="key.round_ordinal">
                    <kill-bar
                        v-if="item.side === 'ct'"
                        :initColor="'#434343'"
                        :isReverse="true"
                        :survivedNum="key.survived_players || 0"
                        :headshotNum="0"
                        :backColor="item.side === 'ct'?'#008CD4':'#F6B600'"
                    ></kill-bar>
                    <div class="block">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png"
                        v-if="key.round_end_type === 'cts_win'">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_dismantle.png"
                        v-if="key.round_end_type === 'bomb_defused'">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_timeup.png"
                        v-if="key.round_end_type === 'target_saved'">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png"
                        v-if="key.round_end_type === 'target_bombed'">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_killAll.png"
                        v-if="key.round_end_type === 'terrorists_win'">
                    </div>
                    <kill-bar
                        v-if="item.side === 'terrorists'"
                        :initColor="'#434343'"
                        :isReverse="false"
                        :survivedNum="key.survived_players || 0"
                        :headshotNum="0"
                        :backColor="item.side === 'ct'?'#008CD4':'#F6B600'"
                    ></kill-bar>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="item flex flex_start"
                v-for="item in boardData" :key="item.side">
                <div v-for="key in item.rounds_history.slice(15,30)"
                    :key="key.round_ordinal">
                    <kill-bar
                        v-if="item.side === 'ct'"
                        :initColor="'#434343'"
                        :isReverse="true"
                        :survivedNum="key.survived_players || 0"
                        :headshotNum="0"
                        :backColor="item.side === 'ct'?'#008CD4':'#F6B600'"
                    ></kill-bar>
                    <div class="block">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win.png"
                        v-if="key.round_end_type === 'cts_win'">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_dismantle.png"
                        v-if="key.round_end_type === 'bomb_defused'">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_ct_win_timeup.png"
                        v-if="key.round_end_type === 'target_saved'">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_bomb.png"
                        v-if="key.round_end_type === 'target_bombed'">
                        <img src="../../../../assets/imgs/detail/csgo/csgo_t_win_killAll.png"
                        v-if="key.round_end_type === 'terrorists_win'">
                    </div>
                    <kill-bar
                        v-if="item.side === 'terrorists'"
                        :initColor="'#434343'"
                        :isReverse="false"
                        :survivedNum="key.survived_players || 0"
                        :headshotNum="0"
                        :backColor="item.side === 'ct'?'#008CD4':'#F6B600'"
                    ></kill-bar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import killBar from '@/components/detail/content/table/killBar'         // 击杀条状
    export default {
        props: {
            boardData: {
                type: Array,
                default: []
            }
        },
        data() {
            return {

            }
        },
        components: {
            killBar
        }
    }
</script>

<style lang="less" scoped>
    .kill-board {
        margin: 5px 0;
        .left {
            border-right: 1px solid #878787;
        }
        .item {
            width: 470px;
            padding: 10px 30px;
            box-sizing: border-box;
            border-bottom: 1px solid #878787;
            .block {
                width: 20px;
                height: 20px;
                margin-left: 2px;
                margin-top: 5px;
                margin-bottom: 5px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            &:last-child {
                border-bottom: 0;
            }
        }
    }
</style>
