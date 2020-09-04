<template>
    <div class="play-score flex flex_between flex_center">
        <div class="country left">
            <p>#{{teamsData.teams[0].team_snapshot.world_ranking}}</p>
            <img :src="teamsData.teams[0].team_snapshot.country.c_image">
            <div></div>
        </div>
        <div class="team left">
            <img :src="teamsData.teams[0].team_snapshot.image">
            <p>{{teamsData.teams[0].team_snapshot.full_name}}</p>
        </div>
        <div :class="['score',
              {
                  low: teamsData.scores[0].score < teamsData.scores[1].score,
                  high: teamsData.scores[0].score > teamsData.scores[1].score
              }]">
            {{teamsData.scores[0].score}}
        </div>
        <div class="text">
            <p>{{teamsData.scheduled_begin_at}}</p>
            <p>{{teamsData.tournament.name}}</p>
            <p>{{teamsData.match_type}} {{teamsData.number_of_games}}</p>
            <p :class="['status',
                {
                    green: teamsData.status === 'ongoing',
                    gray: teamsData.status === 'completed' || teamsData.status === 'canceled'
                }]">
                {{
                    teamsData.status === 'upcoming' ? '比赛未开始' :
                    teamsData.status === 'ongoing' ? '比赛开始' :
                    teamsData.status === 'completed' ? '比赛结束' :
                    teamsData.status === 'canceled' ? '比赛取消' :
                    teamsData.status === 'postponed' ? '比赛推迟' : ''
                }}
            </p>
        </div>
        <div :class="['score',
              {
                  low: teamsData.scores[1].score < teamsData.scores[0].score,
                  high: teamsData.scores[1].score > teamsData.scores[0].score
              }]">
            {{teamsData.scores[1].score}}
        </div>
        <div class="team right">
            <img :src="teamsData.teams[1].team_snapshot.image">
            <p>{{teamsData.teams[1].team_snapshot.full_name}}</p>
        </div>
        <div class="country right">
            <p>#{{teamsData.teams[1].team_snapshot.world_ranking}}</p>
            <img :src="teamsData.teams[1].team_snapshot.country.c_image">
            <div></div>
        </div>
    </div>
</template>

<script>
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
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
    @r: #E10000;
    @g: #01A045;
    .play-score {
        width: 980px;
        height: 140px;
        padding: 25px 0;
        box-sizing: border-box;
        background-color: #fff;
        .country {
            width: 188px;
            height: 140px;
            position: relative;
            &.left {
                p {
                    z-index: 999;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                }
                div {
                    width: 188px;
                    height: 140px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: -moz-linear-gradient(left, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-image: -ms-linear-gradient(left, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-image: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(255, 255, 255, .4)), to(rgba(255, 255, 255, 1)));
                    background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-image: -o-linear-gradient(left, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-image: linear-gradient(left, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-repeat: repeat-x;
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(255, 255, 255, .4)', endColorstr='rgba(255, 255, 255, 1)', GradientType=1);
                }
            }
            &.right {
                p {
                    z-index: 999;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                }
                div {
                    width: 188px;
                    height: 140px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    background-image: -moz-linear-gradient(right, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-image: -ms-linear-gradient(right, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-image: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(255, 255, 255, .4)), to(rgba(255, 255, 255, 1)));
                    background-image: -webkit-linear-gradient(right, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-image: -o-linear-gradient(right, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-image: linear-gradient(right, rgba(255, 255, 255, .4), rgba(255, 255, 255, 1));
                    background-repeat: repeat-x;
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(255, 255, 255, .4)', endColorstr='rgba(255, 255, 255, 1)', GradientType=1);
                }
            }
            img {
                width: 100%;
                height: 100%;
            }

        }
        .team {
            z-index: 99;
            &.left {
                margin-left: -100px;
            }
            &.right {
                margin-right: -100px;
            }
            img {
                width: 60px;
                height: 60px;
                display: block;
                margin: 0 auto 10px;
            }
            p {
                color: #434343;
                font-size: 18px;
                font-weight: 500;
                text-align: center;
            }
        }
        .score {
            width: 40px;
            height: 60px;
            font-size: 26px;
            font-weight: 600;
            line-height: 60px;
            border-radius:4px;
            text-align: center;
            border: 1px solid #CFCFCF;
            &.low {
                color: @r;
            }
            &.high {
                color: @g;
            }
        }
        .text {
            color: #878787;
            font-size: 14px;
            line-height: 24px;
            text-align: center;
            p:nth-child(1) {
                color: #434343;
                font-size: 16px;
            }
            .status {
                color: #434343;
                font-size: 16px;
                margin-top: 3px;
                &.green {
                    color: #01A045;
                    font-weight: 600;
                }
                &.gray {
                    font-weight: 600;
                }
            }
        }
    }
</style>
