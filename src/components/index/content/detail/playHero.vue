<template>
    <div :class="['play-hero flex flex_wrap',
          {
            flex_start: seatData,
            flex_end: !seatData
    }]">
        <div v-for="item in heroList" :key="item.team_id">
            <div v-if="item.team_id === teamId && item.type === 'Ban'"
                :class="['hero',
                {
                    'dota-size': sizeData === 'dota',
                    'lol-size': sizeData === 'lol'
            }]">
                <img :src="item.champion.image.image" :title="item.champion.name">
                <span>{{item.order || 0}}</span>
            </div>
        </div>
        <div v-for="item in heroList" :key="item.team_id">
            <div v-if="item.team_id === teamId && item.type === 'Pick'"
                :class="['hero',
                {
                    'dota-size': sizeData === 'dota',
                    'lol-size': sizeData === 'lol'
            }]">
                <img :src="item.champion.image.image" :title="item.champion.name">
                <span>{{item.order || 0}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            sizeData: {   // 头像大小
                type: String,
                default: ''
            },
            seatData: {  // 排序
                type: Boolean,
                default: true
            },
            teamId: {    // 战队id
                type: Number,
                default: 0
            },
            heroList: {  // 英雄列表
                type: Array,
                default: []
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .play-hero {
        .hero {
            margin-top: 9px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
            span {
                width: 16px;
                height: 16px;
                color: #878787;
                font-size: 12px;
                line-height: 16px;
                text-align: center;
                border-radius: 100%;
                background-color: #fff;
                position: absolute;
                bottom: -8px;
                left: 50%;
                margin-left: -8px;
            }
        }
        .dota-size {
            width: 55px;
            height: 35px;
            margin-right: 5px;
        }
        .lol-size {
            width: 54px;
            height: 55px;
            margin-right: 9px;
        }
    }
</style>
