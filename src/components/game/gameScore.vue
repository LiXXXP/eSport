<template>
    <div class="game-score">
        <div class="event-title flex flex_start">
            <div v-for="item in scoreList" 
                :key="item.id"
            >
                <i>{{item.className}}</i>
            </div>
        </div>
        <div class="event-content flex flex_start">
            <div v-for="item in scoreList"
                :key="item.id">
                <p v-for="key in item.score"
                    :key="key.key"
                >
                    {{key.num}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                scoreList: [
                    {
                        id: 0,
                        className: '',
                        score: [
                            {
                                key: 0,
                                num: 'R'
                            },
                            {
                                key: 1,
                                num: 'D'
                            }
                        ]
                    },
                    {
                        id: 1,
                        className: '剑',
                        score: [
                            {
                                key: 0,
                                num: '27'
                            },
                            {
                                key: 1,
                                num: '20'
                            }
                        ]
                    },
                    {
                        id: 2,
                        className: '币',
                        score: [
                            {
                                key: 0,
                                num: '25.2K'
                            },
                            {
                                key: 1,
                                num: '22.6K'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .game-score {
        .event-title,
        .event-content {
            div {
                width: 50px;
                text-align: center;
            }
        }
    }
</style>