<template>
	  <div class="state-list">
        <div :class="['flex',playerSeat? 'flex_end':'flex_start']">
            <div class="state flex flex_between">
                <p :class="[{active:currentIndex===index},
                    item.sign?'win':'lose']"
                    v-for="(item,index) in stateData"
                    :key="index"
                    @click="getState(index)"
                >
                    {{item.text}}
                </p>
            </div>
        </div>
        <div class="date"
            v-for="(item,index) in stateData"
            :key="index">
			      <p  v-if="index === currentIndex"
                :style="{'text-align': playerSeat?'right':'left'}">
                最后上场时间：{{item.date}}
                <br>
                近10场上场率：90%
            </p>
		    </div>
	  </div>
</template>

<script>
    export default {
        props: {
            playerSeat: {
                type: Boolean,
                default: false
            }
        },
		    data() {
			      return {
                currentIndex: 0,  //当前索引
				        stateData: [
                    {
                        text: '胜',
                        sign: true,
                        date: '2020年5月19日'
                    },
                    {
                        text: '负',
                        sign: false,
                        date: '2020年5月20日'
                    },
                    {
                        text: '胜',
                        sign: true,
                        date: '2020年5月22日'
                    },
                    {
                        text: '负',
                        sign: false,
                        date: '2020年5月23日'
                    },
                    {
                        text: '负',
                        sign: false,
                        date: '2020年5月30日'
                    }
                ]
			      }
        },
        methods: {
            getState(index) {
                this.currentIndex = index
            }
        }
	}
</script>

<style lang="less" scoped>
    @win: #45AF68;
    @lose: #CC572E;
    .state-list {
        width: 204px;
        .state {
            width: 155px;
            padding-bottom: 7px;
            border-bottom: 1px solid #CFCFCF;
            p {
                color: #fff;
                width: 26px;
                height: 26px;
                cursor: pointer;
                line-height: 26px;
                text-align: center;
                border-radius: 100%;
                background-color: @win;
                position: relative;
                &.active::before {
                    width: 0px;
                    height: 0px;
                    padding: 0;
                    content: '';
                    z-index: 12;
                    display: block;
                    box-sizing: content-box;
                    border-bottom: 4px solid #FFFFFF;
                    border-top: 4px solid transparent;
                    border-left: 4px solid transparent;
                    border-right: 4px solid transparent;
                    position: absolute;
                    top: 26px;
                    left: 9px;
                }
                &.active::after {
                    width: 0px;
                    height: 0px;
                    padding: 0;
                    z-index: 10;
                    content: '';
                    display: block;
                    box-sizing: content-box;
                    border-bottom: 5px solid #CFCFCF;
                    border-top: 5px solid transparent;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    position: absolute;
                    top: 24px;
                    left: 8px;

                }
            }
            .win {
                background-color: @win;
            }
            .lose {
                background-color: @lose;
            }
        }
        .date {
            margin-top: 5px;
            p {
                color: #101010;
                line-height: 24px;
            }
        }
    }
</style>
