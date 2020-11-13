const actions = {
    getMatches({commit}, val) {
        commit('getMatchsData',val)
    },
    getBattles({commit}, val) {
        commit('getBattlesData',val)
    }
}

export default actions
