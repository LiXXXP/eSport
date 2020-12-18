<template>
    <div class="map-info">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">地图信息</span>
        </div>
        <div class="map-tab flex flex_end">
            <div
                v-for="(item,index) in mapNav"
                :key="item.name"
                :class="{active: index === currentIndex}"
                @click="currentIndex = index"
            >{{item.name}}</div>
        </div>
        <div
            class="map-bp"
            v-if="currentIndex===0"
        >
            <div class="team flex flex_start flex_only_center"
                v-for="item in teamData" :key="item.team_id">
                <img :src="item.team_snapshot.image">
                <p class="beyond-ellipsis" :title="item.team_snapshot.name">
                    {{item.team_snapshot.name}}
                </p>
            </div>
            <div class="map flex flex_only_center">
                <div class="map-item"
                    v-for="item in mapData"
                    :key="item.order"
                >
                    <div class="block">
                        <img :src="item.map.image.square_image">
                        <p>{{item.map.name}}</p>
                    </div>
                    <p class="text">{{item.map.short_name}}</p>
                </div>
            </div>
        </div>
        <div
            v-else
            class="map-fight flex flex_start flex_only_center"
        >
            <img v-for="item in mapData"
                :key="item.order"
                :src="item.map.image.thumbnail">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            teamData: {    // 战队信息
                type: Array,
                default: []
            },
            mapData: {    // 地图信息
                type: Array,
                default: []
            }
        },
        data() {
            return {
                currentIndex: 0,   // 当前index
                mapNav: [          // 地图切换导航
                    {
                        name: '地图BP'
                    },
                    {
                        name: '对战地图'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .map-info {
        margin-bottom: 25px;
        .play-header {
            margin-bottom: -10px;
        }
        .map-tab {
            div {
                width:100px;
                height:27px;
                cursor: pointer;
                font-weight: 400;
                color: #878787;
                margin-left: 3px;
                line-height: 27px;
                text-align: center;
                border-radius:4px 4px 0 0;
                background-color: #E3E3E3;
                &.active {
                    color: #FF7700;
                    background-color: #fff;
                }
            }
        }
        .map-bp {
            width: 960px;
            height: 140px;
            box-sizing: border-box;
            background-color: #fff;
            position: relative;
            .team {
                width: 100%;
                height: 70px;
                border-bottom: 1px solid#F1F1F1;
                img {
                    width: 21px;
                    height: 24px;
                    margin-left: 30px;
                    margin-right: 8px;
                }
                p {
                    width: 60px;
                    color:#0F0F0F;
                    font-weight: 400;
                }
            }
            .map {
                position: absolute;
                left: 152px;
                top: 50%;
                transform: translate(0, -50%);
                .map-item {
                    margin-right: 7px;
                    position: relative;
                    &:last-child {
                        margin-right: 0;
                    }
                    .block {
                        width: 107px;
                        height: 70px;
                        border: 2px solid #878787;
                        position: relative;
                        &:after,
                        &:before {
                            width: 0;
                            height: 0;
                            content: ' ';
                            display: block;
                            border: solid transparent;
                            position: absolute;
                        }
                        &:after {
                            left: 50%;
                            border-width: 7px;
                            transform: translate(-50%, 0);
                        }
                        &:before {
                            left: 50%;
                            border-width: 9px;
                            transform: translate(-50%, 0);
                        }
                        img {
                            width: 100%;
                            height: 100%;
                        }
                        p {
                            width: 100%;
                            color: #fff;
                            padding: 3px 0;
                            font-size: 12px;
                            text-align: center;
                            background-color: rgba(39,45,61,0.88);
                            position: absolute;
                            left: 0;
                            bottom: 0;
                        }
                    }
                    .text {
                        padding: 5px 0;
                        text-align: center;
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, 0);
                    }
                    &:nth-child(odd) {
                        .block {
                            &:after,
                            &:before {
                                bottom: 100%;
                            }
                            &:after {
                                border-bottom-color: #878787;
                            }
                            &:before {
                                border-bottom-color:#878787;
                            }
                        }
                        .text {
                            bottom: 100%;
                        }
                    }
                    &:nth-child(even) {
                        .block {
                            &:after,
                            &:before {
                                top: 100%;
                            }
                            &:after {
                                border-top-color: rgba(39,45,61,0.88);
                            }
                            &:before {
                                border-top-color: rgba(39,45,61,0.88);
                            }
                        }
                    }
                }
            }
        }
        .map-fight {
            width: 960px;
            height: 140px;
            box-sizing: border-box;
            background-color: #fff;
            img {
                width: 156px;
                height: 100px;
                margin-left: 30px;
            }
        }
    }
</style>
