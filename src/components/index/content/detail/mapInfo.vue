<template>
    <div class="map-info flex flex_start flex_only_center">
        <div class="map-list" 
            v-for="item in mapList"
            :key="item.id">
            <img :src="item.url">
            <i class="triangle"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mapList: [
                    {
                        id: 0,
                        url: '',
                    },
                    {
                        id: 1,
                        url: '',
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .map-info {
        .map-list {
            position: relative;
            margin-right: 30px;
            box-sizing: border-box;
            img {
                width: 100px;
                height: 50px;
                border: 1px solid #ccc;
            }
            &:nth-child(even) {
                .triangle {
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-bottom: 8px solid #ddd;
                    position: absolute;
                    left: 50%;
                    top: -8px;
                    margin-left: -4px;
                }
            }
            &:nth-child(odd) {
                .triangle {
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-top: 8px solid #ddd;
                    position: absolute;
                    left: 50%;
                    bottom: -5px;
                    margin-left: -4px;
                }
            }
            
        }
    }
</style>