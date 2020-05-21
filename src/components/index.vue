<template>
  <div class="index">
      <header-top></header-top>
      <img-block></img-block>
      <side-bar>
          <template slot="search">
              <div class="bar-search">
                    <el-input
                        placeholder="请输入内容"
                        v-model="searchInput">
                        <i slot="suffix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
          </template>
          <template slot="page">
              <div class="bar-more">
                    <div class="bar-page flex flex_between flex_center">
                        <p>上一页</p>
                        <p>下一页</p>
                    </div>
                    <div class="bar-all">
                        显示全部
                    </div>
                </div>
          </template>
      </side-bar>
      <game-list></game-list>
      <paging-page></paging-page>
      <drop-down></drop-down>
      <collapse-board></collapse-board>
      <tab-nav></tab-nav>
      <current-score></current-score>
      <map-info></map-info>
      <date-picker></date-picker>
      <footer-bar></footer-bar>
      <play-detail></play-detail>
      <table-block></table-block>
      <panel-board></panel-board>
  </div>
</template>

<script>
    import headerTop from '@/components/header/headerTop'          // 首页头部导航栏
    import imgBlock from '@/components/index/imgBlock'             // 首页图片显示
    import sideBar from '@/components/common/sideBar'              // 左侧导航
    import gameList from '@/components/index/gameList'             // 游戏列表
    import pagingPage from '@/components/common/pagingPage'        // 分页
    import dropDown from '@/components/common/dropDown'            // 下拉菜单
    import collapseBoard from '@/components/common/collapseBoard'  // 折叠面板
    import tabNav from '@/components/common/tabNav'                // 切换标签
    import currentScore from '@/components/index/currentScore'     // 当前比分
    import mapInfo from '@/components/index/mapInfo'               // 地图信息
    import datePicker from '@/components/common/datePicker'        // 日期
    import footerBar from '@/components/footer/footerBar'          // 网站底部
    import playDetail from '@/components/detail/playDetail'        // 游戏详情页的对局详情
    import tableBlock from '@/components/common/tableBlock'        // 表格组件
    import panelBoard from '@/components/detail/panelBoard'        // 
    export default {
        name: 'index',
        data () {
            return {
                searchInput: '', // 搜索内容
            }
        },
        components: {
            headerTop,
            imgBlock,
            sideBar,
            gameList,
            pagingPage,
            dropDown,
            collapseBoard,
            tabNav,
            currentScore,
            mapInfo,
            datePicker,
            footerBar,
            playDetail,
            tableBlock,
            panelBoard
        }
    }
</script>

<style lang="less" scoped>

</style>
