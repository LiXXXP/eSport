<template>
    <div class="game-info">
        <div class="flex flex_center">
            <tab-nav :selectStyle="selectStyle"
                     :navData="navList">
                <div slot="openlive"
                    class="open-live">
                    <i></i><i></i>
                </div>
            </tab-nav>
        </div>
        <div class="tips">
            <i class="iconfont icon-jinggao"></i>
            报告网站错误数据
        </div>
        <lol-detail-content v-if="openType === 'League of Legends'"></lol-detail-content>
        <dota-detail-content v-else></dota-detail-content>
        <div class="pack" @click="packUp">
            <i></i> 收起
        </div>
    </div>
</template>

<script>
    import tabNav from '@/components/common/tabNav'          // tab切换
    import lolDetailContent from '@/components/index/content/detail/lol/detailContent'   // lol详情
    import dotaDetailContent from '@/components/index/content/detail/dota/detailContent' // dota详情
    export default {
        props: {
            openType: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                // 当前tab栏样式，
                // 1为首页橙色填充样式
                // 2为详情页边框样式
                // 3为详情页蓝色填充样式
                // 4为详情直播按钮
                selectStyle: 4,
                navList: [
                    {
                        title: '视频直播'
                    },
                    {
                        title: '图文直播'
                    }
                ],
                currentView: ''
            }
        },
        methods: {
            packUp() {
                this.$emit('packDetail',-1)
            }
        },
        components: {
            tabNav,
            lolDetailContent,
            dotaDetailContent
        }
    }
</script>

<style lang="less" scoped>
    .game-info {
        padding: 20px 10px;
        background-color: #F2F2F2;
        .tips {
            color: #878787;
            margin-top: -15px;
            text-align: right;
        }
        .open-live {
            width: 48px;
            height: 48px;
            padding: 19px 0;
            text-align: center;
            box-sizing: border-box;
            background-color: #FF7600;
            border-left: 1px solid #fff;
            i {
                width: 9px;
                height: 9px;
                display: block;
                margin: 0 auto;
                transform: rotate(45deg);
                border-top: 1px solid #fff;
                border-left: 1px solid #fff;
                &:nth-child(2) {
                    margin-top: -3px;
                }
            }
        }
        .pack {
            color: #878787;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            text-align: center;
            i {
                width: 9px;
                height: 9px;
                color: #878787;
                margin-right: 5px;
                display: inline-block;
                vertical-align: middle;
                transform: rotate(45deg);
                border-top: 1px solid #878787;
                border-left: 1px solid #878787;
            }
        }
    }
</style>
