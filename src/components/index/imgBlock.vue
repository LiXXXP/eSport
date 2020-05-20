<template>
    <div class="img-block flex flex_between">
        <div>
            <img :src="imgSrc">
        </div>
        <div class="flex flex_column flex_start">
            <img 
                v-for="(item,index) in imgList" 
                :key="item.id"
                :src="item.url"
                @click="cutMethod(index)"
            >
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgSrc: '',   // 大图片url
                imgList: [    // 图片列表
                    {
                        id: 0,
                        url: ''
                    },
                    {
                        id: 1,
                        url: ''
                    },
                    {
                        id: 2,
                        url: ''
                    },
                    {
                        id: 3,
                        url: ''
                    },
                ]
            }
        },
        methods: {
            cutMethod(index) {
                this.imgSrc = this.imgList[index].url
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>