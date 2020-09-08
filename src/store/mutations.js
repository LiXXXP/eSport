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
    }
}

export default mutations
