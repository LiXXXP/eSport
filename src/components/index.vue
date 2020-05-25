<template>
  <div class="index">
      <header-top></header-top>
  </div>
</template>

<script>
    import headerTop from '@/components/header/headerTop'          // 首页头部导航栏
    export default {
        name: 'index',
        data () {
            return {

            }
        },
        components: {
            headerTop,
        }
    }
</script>

<style lang="less" scoped>

</style>
