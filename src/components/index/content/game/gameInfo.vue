<template>
    <div class="game-info">
        <div class="flex flex_center">
            <tab-nav :selectStyle="selectStyle"
                     :navData="navList"
                     @clickIndex="getIndex">
                <div slot="openlive"
                    class="open-live">
                    <i></i><i></i>
                </div>
            </tab-nav>
        </div>
        <lol-detail-content
            :currentData="currentIndex"
            v-if="openType === 'lol'"
        ></lol-detail-content>
        <dota-detail-content
            v-if="openType === 'dota2'"
            :currentData="currentIndex"
        ></dota-detail-content>
        <csgo-detail-content
            v-if="openType === 'csgo'"
            :currentData="currentIndex"
        ></csgo-detail-content>
        <!-- <play-data></play-data> -->
        <!-- <play-detail></play-detail> -->
        <!-- <csgo-play-data></csgo-play-data> -->
        <!-- <csgo-play-detail></csgo-play-detail> -->
        <div class="pack" @click="packUp" v-if="!isHide">
            <i></i> 收起
        </div>
    </div>
</template>

<script>
    import tabNav from '@/components/common/tabNav'          // tab切换
    import lolDetailContent from '@/components/index/content/detail/lol/detailContent'   // lol详情
    import dotaDetailContent from '@/components/index/content/detail/dota/detailContent' // dota详情
    import csgoDetailContent from '@/components/index/content/detail/csgo/detailContent' // csgo详情
    import playData from '@/components/detail/content/playData'               // lol，dota 数据分析
    import playDetail from '@/components/detail/content/playDetail'           // lol，dota 数据详情
    import csgoPlayData from '@/components/detail/content/csgoPlayData'       // csgo 数据分析
    import csgoPlayDetail from '@/components/detail/content/csgoPlayDetail'   // csgo 数据详情
    export default {
        props: {
            // 游戏类型
            openType: {
                type: String,
                default: ''
            },
            // 详情页 收起按钮 隐藏
            isHide: {
                type: Boolean,
                default: true
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
                currentIndex: 0
            }
        },
        methods: {
            packUp() {
                this.$emit('packDetailId',-1)
            },
            getIndex(val) {
                this.currentIndex = val
            }
        },
        components: {
            tabNav,
            lolDetailContent,
            dotaDetailContent,
            csgoDetailContent,
            playData,
            playDetail,
            csgoPlayData,
            csgoPlayDetail
        }
    }
</script>

<style lang="less" scoped>
    .game-info {
        padding: 20px 10px 12px;
        background-color: #F2F2F2;
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
