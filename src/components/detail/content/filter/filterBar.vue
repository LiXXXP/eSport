<template>
    <div class="filter-bar">
        <div class="filter flex flex_between">
            <div class="head flex flex_start flex_only_center">
                <i></i>
                <div class="flex flex_start"
                    v-for="item in filterData.filterTitle"
                    :key="item.title">
                    <p>{{item.title}}:</p>
                    <drop-down></drop-down>
                </div>
            </div>
            <p class="text" v-if="filterData.isText">
                （Newbee<span>对局总数:246局</span> / Liquid<span>对局总数:342局</span>）
            </p>
        </div>
    </div>
</template>

<script>
    import dropDown from '@/components/common/dropDown'
    export default {
        props: {
            filterData: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {

            }
        },
        components: {
            dropDown
        }
    }
</script>

<style lang="less" scoped>
    .filter-bar {
        .filter {
            width: 960px;
            height: 40px;
            padding: 10px;
            box-sizing: border-box;
            background-color: #fff;
            .head {
                i {
                    width: 18px;
                    height: 18px;
                    display: block;
                    background: url('../../../../assets/imgs/detail/data01.png') no-repeat 0 0;
                    background-size: 100%;
                }
                .flex {
                    margin-left: 30px;
                    p {
                        color: #2F3A5A;
                        margin-right: 5px;
                    }
                }
            }
            .text {
                span {
                    color: #878787;
                }
            }
        }
    }
</style>
