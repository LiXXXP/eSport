<template>
    <div class="kill-arms">
        <div class="block flex flex_center">
            <img v-for="item in iconList"
                :key="item.url"
                :src="item.url">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                iconList: [
                    {
                        url: require('../../../../assets/imgs/detail/csgo/q1.png')
                    },
                    {
                        url: require('../../../../assets/imgs/detail/csgo/q.png')
                    },
                    {
                        url: require('../../../../assets/imgs/detail/csgo/q2.png')
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .kill-arms {
        margin: 0 70px;
        .block {
            position: relative;
            &::after {
                content: '';
                height: 1px;
                width: 206px;
                display: block;
                background-color: #D8D8D8;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            img {
                z-index: 99;
                width: 20px;
                height: 20px;
                margin: 0 4px;
            }
        }

    }
</style>
