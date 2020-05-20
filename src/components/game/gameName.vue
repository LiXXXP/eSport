<template>
    <div class="game-name">
        <div class="event-title flex flex_start">
            <div class="base-row">2019国际邀请赛</div>
            <div>BO5</div>
        </div>
        <div class="event-content flex flex_start">
            <div class="base-row flex flex_start">
                <div class="flex flex_start flex_only_center">
                    <img src="../../assets/imgs/1.png">
                    <div>
                        <p>09:30</p>
                        <p>28/07</p>
                    </div>
                </div>
                <div>
                    <div class="flex flex_start flex_only_center">
                        <img src="../../assets/imgs/1.png">
                        <p>Team Liquid</p>
                    </div>
                    <div class="flex flex_start flex_only_center">
                        <img src="../../assets/imgs/1.png">
                        <p>Team Liquid</p>
                    </div>
                </div>
            </div>
            <div class="flex flex_start">
                <div>
                    <p>2</p>
                    <p>2</p>
                </div>
                <div>
                    <p>第五局</p>
                    <p>25:03</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
    @baseWidth: 300px;
    .game-name {
        width: 400px;
        .base-row {
            width: @baseWidth;
        }
    }
</style>