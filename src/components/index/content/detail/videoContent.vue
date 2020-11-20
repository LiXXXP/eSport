<template>
    <div class="video-content">
        <div v-if="this.$store.state.isSupported">
            <div class="flex flex_start flex_wrap flex_wrap_reverse" v-if="streamsData">
                <div :class="['item flex flex_start',{active:index===currentIndex}]"
                    v-for="(item,index) in streamsData.streams"
                    :key="item.stream_id"
                    @click="cutTab(index,item.embed_url)">
                    <i></i>
                    <p>{{item.title}}</p>
                </div>
            </div>
            <div class="video" v-if="streamsData">
                <iframe :src="streamUrl"></iframe>
            </div>
        </div>
        <div class="none" v-else>
            <div>暂无直播内容...</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            streamsData: {
                type: Object,
                default: null
            }
        },
        data() {
            return {
                currentIndex: 0,    // 当前标题索引
                streamUrl: ''
            }
        },
        methods: {
            cutTab(index, url) {
                this.currentIndex = index
                this.streamUrl = url
            }
        },
        watch: {
            streamsData() {
                if(this.$store.state.isSupported) {
                    this.streamUrl = this.streamsData.streams[0].embed_url
                }

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
            box-sizing: border-box;
            background-color: #fff;
            border: 1px solid #CFCFCF;
            iframe {
                border: 0;
                width: 950px;
                height: 534px;
                display: block;
            }
        }
        .none {
            width: 100%;
            height: 544px;
            font-size: 24px;
            color: #D94629;
            font-weight: 600;
            line-height: 544px;
            text-align: center;
            background-color: rgba(0,0,0,.75);
        }
    }
</style>
