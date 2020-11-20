const mutations = {
    // 首页轮播图显示
    carouselShow( state , boolean ) {
        state.isCarouselShow = boolean
    },
    // 获取比赛数据
    getMatchsData: (state, val) => {
        state.matchsData = val
    },
    // 获取比赛数据
    getBattlesData: (state, val) => {
        state.battlesData = val
    },
    // 获取赛事筛选结果
    getSelectMatchData: (state, val) => {
        state.selectMatchData = val
    },
    // 获取详情matchid
    getMatchId: (state, val) => {
        state.matchId = val
    },
    // 显示视频直播
    supportedShow: (state , boolean) => {
      state.isSupported = boolean
  }
}

export default mutations
