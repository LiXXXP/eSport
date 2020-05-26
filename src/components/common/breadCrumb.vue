<template>
    <div class="bread-crumb flex flex_between flex_only_center">
        <div class="flex flex_start">
            <div class="step"
                v-for="item in stepNav"
                :key="item.id">
                <span>{{item.title}} > </span>
                <i></i>
            </div>
        </div>
        <div class="contact">
            合作联系：business@esportlivescore.com
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stepNav: [
                    {
                        id: 0,
                        title: '首页',
                        url: '/'
                    },
                    {
                        id: 1,
                        title: '英雄联盟',
                        url: '/'
                    },
                    {
                        id: 2,
                        title: 'Invictus Gaming',
                        url: '/'
                    },
                    {
                        id: 3,
                        title: 'Invictus Gaming',
                        url: '/'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .bread-crumb {
        .step {
            cursor: pointer;
            position: relative;
            &:hover {
                span {
                    color: #FF7800;
                }
            }
            span {
                height: 24px;
                padding: 0 10px;
                line-height: 24px;
                color: #878787;
                overflow: hidden;
                background-color: #F6F6F6;
            }
            i {
                width: 14px;
                height: 14px;
                z-index: 999;
                display: inline-block;
                transform: rotate(45deg);
                border-top: 2px solid #E4E4E4;
                border-right: 2px solid #E4E4E4;
                position: absolute;
                top: 4px;
                right: 0;
            }
            &:last-child {
                span {
                    border-radius: 0 12px 12px 0;
                }
                i {
                    display: none;
                }
            }
        }
        .contact {
            color: #878787;
        }
    }
</style>
