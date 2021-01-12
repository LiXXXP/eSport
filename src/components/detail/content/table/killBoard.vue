<template>
    <div class="kill-board flex flex_center"
        :style="{'borderBottom':(isBorder===0?'1px solid #878787':'none')}">
        <div class="left">
            <div class="item flex flex_start">
                <div v-for="key in boardData.rounds_history.slice(0,15)"
                    :key="key.round_ordinal" :class="['flex flex_column',{flex_col_reverse:isBorder === 1}]">
                    <kill-bar
                        :initColor="'#434343'"
                        :isReverse="isBorder?false:true"
                        :survivedNum="parseInt(key.survived_players)"
                        :isDeath="false"
                        :isHeadshot="false"
                        :backColor="boardData.side === 'ct'? '#008BD3':'#F6B600'"
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
                </div>
            </div>
        </div>
        <div class="right">
            <div class="item flex flex_start">
                <div v-for="key in boardData.rounds_history.slice(15,30)"
                    :key="key.round_ordinal" :class="['flex flex_column',{flex_col_reverse:isBorder === 1}]">
                    <kill-bar
                        :initColor="'#434343'"
                        :isReverse="isBorder?false:true"
                        :survivedNum="parseInt(key.survived_players)"
                        :isDeath="false"
                        :isHeadshot="false"
                        :backColor="boardData.side === 'terrorists'? '#F6B600':'#008BD3'"
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import killBar from '@/components/detail/content/table/killBar'         // 击杀条状
    export default {
        props: {
            boardData: {    // 击杀数
                type: Object,
                default: () => {}
            },
            isBorder: {     // 是否显示下边框
                type: Number,
                default: 0
            },
            startCTid: {     // 初始ct id
                type: Number,
                default: 0
            },
            startTid: {   // 初始t id
                type: Number,
                default: 0
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
        .left {
            border-right: 1px solid #878787;
        }
        .item {
            width: 470px;
            padding: 10px 40px;
            box-sizing: border-box;
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

        }
    }
</style>
