const state = {
    // 用户信息
    userInfo: '',
    // 首页轮播图是否显示
    isCarouselShow: true,
    // 比赛对局数据
    matchsData: {},
    // 对局详情数据
    battlesData: {},
    // 全部比赛 or 已结束比赛
    isAllMatch: 1,
    // 我的收藏
    myCollectStatus: 2,
    // 赛事筛选 id
    selectMatchIds: [],
    // 赛事筛选 日期
    selectMatchDate: '',
    // 点击详情存储matchid
    matchId: 0
}

export default state
