<template>
    <div class="diagram-bar">
        <p class="title">{{diagramTitle}}</p>
        <div class="flex flex_between">
            <div class="bar">
                <p :style="{}">999</p>
                <progress-bar
                    class="rotate"
                    :progressData="playContrast"
                    :progressColor="'#2980D9'"
                    :progressRate="77"
                ></progress-bar>
            </div>
            <div class="bar">
                <p :style="{}" class="right">666</p>
                <progress-bar
                    :progressData="playContrast"
                    :progressColor="'#F6B600'"
                    :progressRate="66"
                ></progress-bar>
            </div>
        </div>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'
    export default {
        props: {
            diagramTitle: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                playContrast: {        // 进度条配置参数
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                    inside: false,     // 进度条显示文字是否在进度条内 true / false
                    width: 7,          // 进度条的高度
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
    .diagram-bar {
        width: 265px;
        .title {
                color: #101010;
                font-size: 12px;
                font-weight: 500;
                text-align: center;
                margin-bottom: -16px;
            }
          .bar {
              width: 128px;
              p {
                  color: #2980D9;
                  font-size: 12px;
                  margin-bottom: 7px;
                  &.right {
                      color: #D94629;
                      text-align: right;
                  }
              }
              .rotate{
                  transform:rotate(180deg);
              }
          }
    }
</style>
