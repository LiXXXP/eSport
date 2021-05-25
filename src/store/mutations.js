const mutations = {
    // 用户信息
    getUserInfo( state , val ) {
        state.userInfo = val
    },
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
    // 全部比赛 or 已结束比赛
    allMatch: (state, val) => {
        state.isAllMatch = val
    },
    // 我的收藏
    collectStatus: (state, val) => {
        state.myCollectStatus = val
    },
    // 获取赛事筛选id
    getSelectMatchIds: (state, val) => {
        state.selectMatchIds = val
    },
    // 获取赛事筛选 日期
    getSelectMatchDate: (state, val) => {
        state.selectMatchDate = val
    },
    // 获取详情matchid
    getMatchId: (state, val) => {
        state.matchId = val
    }
}

export default mutations
