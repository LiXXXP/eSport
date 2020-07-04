<template>
    <div class="data-events">
        <div class="play-header flex flex_start flex_only_center">
            <i class="play-header-bar"></i>
            <span class="play-header-text">近期比赛情况</span>
        </div>
        <div class="content flex flex_between">
            <div class="team">
                <div class="title flex flex_start flex_only_center">
                    <img src="../../../../assets/imgs/detail/4.png">
                    <p>Liquid</p>
                </div>
                <div>
                    <collapse-board></collapse-board>
                </div>
            </div>
            <div class="team">
                <div class="title flex flex_start flex_only_center">
                    <img src="../../../../assets/imgs/detail/4.png">
                    <p>Team.Liquid</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import collapseBoard from '@/components/common/collapseBoard'      // 折叠面板
    export default {
        data() {
            return {

            }
        },
        components: {
            collapseBoard
        }
    }
</script>

<style lang="less" scoped>
    .data-events {
        .content {
            width: 960px;
            .team {
                width: 475px;
                background-color: #fff;
                .title {
                    height: 48px;
                    padding: 0 10px;
                    font-size: 16px;
                    font-weight: bold;
                    box-sizing: border-box;
                    img {
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>

<style lang="less">
    .data-events {
        .el-collapse-item__header {
            justify-content: space-between;
            .el-collapse-item__arrow {
                margin: 0;
                margin-right: 10px;
            }
        }
        .el-collapse-item__content {
            padding-bottom: 0;
        }
    }
</style>
