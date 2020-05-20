<template>
    <div class="table-block">
        <table>
            <thead>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </thead>
            <tbody>
                <tr>
                    <td>111</td>
                    <td>
                        <progress-bar :progressData="carryData"></progress-bar>
                    </td>
                    <td>111</td>
                </tr>
                <tr>
                    <td>222</td>
                    <td>
                        <progress-bar :progressData="carryData"></progress-bar>
                    </td>
                    <td>222</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import progressBar from '@/components/common/progressBar'      // 进度条
    export default {
        data() {
            return {
                carryData: {           // 父组件向进度条子组件传参数据
                    barType: 'line',   // 所需进度条类型：line为条状，circle为圆状
                    inside: true,     // 进度条显示文字是否在进度条内 true / false
                    width: 20,        // 进度条的高度
                },
                
            }
        },
        components: {
            progressBar
        }
    }
</script>

<style lang="less" scoped>
    table {
        text-align: center;
        border-collapse: collapse;
        thead {
            th {
                width: 100px;
                background-color: #CCE8EB;
            }
        }
        th,td {
            color: #666;
            height: 30px;
            border: 1px solid #cad9ea;
        }
        tr:nth-child(odd) {
            background-color: #fff;
        }
        tr:nth-child(even) {
            background-color: #F5FAFA;
        }
    }
</style>