<template>
    <div class="team-list flex flex_between flex_only_center">
        <div class="bar">
            <div class="flex flex_end flex_only_center">
                <p>77.77%</p>
                <progressBar
                    class="left"
                    :progressData="playContrast"
                    :progressColor="'#2980D9'"
                    :progressRate="77"
                ></progressBar>
            </div>
            <div class="flex flex_end flex_only_center">
                <p>77.77%</p>
                <progressBar
                    class="left"
                    :progressData="playContrast"
                    :progressColor="'#D94629'"
                    :progressRate="77"
                ></progressBar>
            </div>
            <div class="flex flex_end flex_only_center">
                <p>77.77%</p>
                <progressBar
                    class="left"
                    :progressData="playContrast"
                    :progressColor="'#5166A4'"
                    :progressRate="77"
                ></progressBar>
            </div>
        </div>
        <img src="../../../../assets/imgs/detail/2.png">
        <div class="bar">
            <div class="flex flex_start flex_only_center">
                <progressBar
                    class="right"
                    :progressData="playContrast"
                    :progressColor="'#2980D9'"
                    :progressRate="77"
                ></progressBar>
                <p>77.77%</p>
            </div>
            <div class="flex flex_start flex_only_center">
                <progressBar
                    class="right"
                    :progressData="playContrast"
                    :progressColor="'#D94629'"
                    :progressRate="77"
                ></progressBar>
                <p>77.77%</p>
            </div>
            <div class="flex flex_start flex_only_center">
                <progressBar
                    class="right"
                    :progressData="playContrast"
                    :progressColor="'#5166A4'"
                    :progressRate="77"
                ></progressBar>
                <p>77.77%</p>
            </div>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'
    export default {
        data() {
            return {
                playContrast: {        // 进度条配置参数
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                    inside: false,     // 进度条显示文字是否在进度条内 true / false
                    width: 8,          // 进度条的高度
                    showText: false,   // 是否显示文字
                }
            }
        },
        components: {
            progressBar
        }
    }
</script>

<style lang="less" scoped>
    .team-list {
        margin: 17px 0;
        img {
            width: 40px;
            height: 40px;
        }
        .bar {
            font-size: 12px;
            &>div {
                .left,
                .right {
                    width: 100px;
                }
                .left {
                    margin-left: 3px;
                    transform:rotate(180deg);
                }
                .right {
                    margin-right: 3px;
                }
            }
        }
    }
</style>
