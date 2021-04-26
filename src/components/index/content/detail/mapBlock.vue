<template>
    <div class="map-block">
        <canvas
            id="mycanvas"
            width="680"
            height="480"
        ></canvas>
    </div>
</template>

<script>
    export default {
        props: {
            mapData: {
                type: Object,
                default: {}
            },
            coordinate: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                playersHead: []
            }
        },
        mounted(){
            //绘制canvas图像
            this.doDraw()
        },
        methods: {
            doDraw(imageUrl) {
                //  获取canvas
                const canvas = document.getElementById("mycanvas")
                if(!canvas){
                    return false
                } else {
                    const context = canvas.getContext('2d')
                    const imgBG = new Image()
                    imgBG.src = imageUrl
                    //  加载图片
                    imgBG.onload = function(){
                        if(imgBG.complete){
                            imgBG.width = 680
                            imgBG.height = 480
                            //  绘制图片
                            context.drawImage(imgBG,0,0,imgBG.width,imgBG.height)
                        }
                        playersHead.list = props.coordinate[0].players.concat(props.coordinate[1].players)
                        for(let i of playersHead.list) {
                            const imgHero = new Image()
                            imgHero.src = i.champion.image.image
                            //  加载图片
                            imgHero.onload = function(){
                                if(imgHero.complete){
                                    imgHero.width = 30
                                    imgHero.height = 30
                                    // 坐标
                                    let x = parseInt(i.advanced.coordinate.split(",")[0])
                                    let y = parseInt(i.advanced.coordinate.split(",")[1])
                                    // 绘制图片
                                    context.drawImage(imgHero,x/68,y/48,imgHero.width,imgHero.height)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .map-block {
        width: 300px;
        height: 300px;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100%;
    }
</style>
