<template>
    <div class="video-content">
        <div class="flex flex_start flex_wrap flex_wrap_reverse">
            <div :class="['item flex flex_start',
                {active:index===currentIndex}]"
                v-for="(item,index) in videoData"
                :key="item.id"
                @click="cutTab(index)">
                <i></i>
                <p>{{item.text}}</p>
            </div>
        </div>
        <div class="video">
            <video src=""></video>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentIndex: 0,    // 当前标题索引
                videoData: [
                    {
                        id: 0,
                        text: 'lck冠军联赛(GBR)'
                    },
                    {
                        id: 1,
                        text: 'lck-korea(GBR)'
                    },
                    {
                        id: 2,
                        text: 'lck-koreasdq(GBR)'
                    },
                    {
                        id: 3,
                        text: 'lck-koreasdq(GBR)'
                    },
                    {
                        id: 4,
                        text: 'lck冠军联赛(GBR)'
                    },
                    {
                        id: 5,
                        text: 'lck-korea(GBR)'
                    },
                    {
                        id: 6,
                        text: 'lck-koreasdq(GBR)'
                    }
                ]
            }
        },
        methods: {
            cutTab(index) {
                this.currentIndex = index
            }
        }
    }
</script>

<style lang="less" scoped>
    .video-content {
        width: 960px;
        margin-top: 15px;
        margin-bottom: 18px;
        .item {
            cursor: pointer;
            padding: 12px 20px;
            border-radius: 4px 4px 0 0;
            background-color: #F2F2F2;
            border: 1px solid #CFCFCF;
            &.active {
                background-color: #fff;
                border-bottom: 1px solid #fff;
            }
            p {
                color: #2F3A5A;
                font-size: 12px;
            }
            i {
                width: 16px;
                height: 16px;
                display: block;
                margin-right: 7px;
                background: url('../../../../assets/imgs/detail/icon-video.png') no-repeat 0 0;
                background-size: 100%;
            }
        }
        .video {
            padding: 5px;
            width: 960px;
            height: 544px;
            margin-top: -1px;
            background-color: #fff;
            box-sizing: border-box;
            border: 1px solid #CFCFCF;
            video {
                width: 950px;
                height: 534px;
                display: block;
                background: url('../../../../assets/imgs/detail/video.png') no-repeat 0 0;
                background-size: 100%;
            }
        }
    }
</style>
