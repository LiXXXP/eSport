<template>
    <div class="bread-crumb flex flex_between flex_only_center">
        <div class="flex flex_start">
            <!-- <div class="step"
                v-for="item in stepNav"
                :key="item.id">
                <span>{{item.title}} <i class="to"></i> </span>
                <i class="arrow"></i>
            </div> -->
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
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .bread-crumb {
        margin-bottom: 14px;
        .step {
            cursor: pointer;
            position: relative;
            &:hover {
                span {
                    color: #FF7800;
                    .to {
                        border-color: #FF7800;
                    }
                }
            }
            span {
                color: #878787;
                padding: 0 12px;
                overflow: hidden;
                line-height: 24px;
                background-color: #F6F6F6;
                .to {
                    width: 6px;
                    height: 6px;
                    color: #878787;
                    margin-bottom: 2px;
                    display: inline-block;
                    transform: rotate(135deg);
                    border-top: 1px solid #878787;
                    border-left: 1px solid #878787;
                }
            }
            .arrow {
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
                .arrow {
                    display: none;
                }
            }
        }
        .contact {
            color: #878787;
        }
    }
</style>
