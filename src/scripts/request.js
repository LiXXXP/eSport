import axios from 'axios'
import Qs from 'qs'
import { sparkUrl } from './config'
import { Message } from 'element-ui'

const TIMEOUT = 30000; // 设置请求超时时间 常量

// 创建axios实例
const service = axios.create({
    baseURL: sparkUrl, // api 的 base_url
    timeout: TIMEOUT, // request timeout
    responseType: "json",
    withCredentials: true, // 是否允许带cookie
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'accept': 'application/json',
    }
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Message.error('数据请求失败，请刷新页面')
        return Promise.reject(err)
    }
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功
        if(response.status === 200 && response.data) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(error)
        }
    },
    // http请求状态出错提示,直接返回错误data
    error => {
        Message.error('数据请求失败，请刷新页面')
        return Promise.reject(error)
    }
)

/**
 * get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
function getRequest(url,params={}){
    let fullUrl = sparkUrl + url
    return new Promise((resolve,reject) => {
        axios.get(fullUrl,{
            params:params
        }).then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        });
    });
}

/**
 * post请求
 * @param url
 * @param params
 * @returns {Promise}
 */
function postRequest(url,params={}) {
    let fullUrl = sparkUrl + url
    return new Promise((resolve, reject) => {
        axios.post(fullUrl, Qs.stringify(params))
        .then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        });
    });
}

/**
 * put请求
 * @param url
 * @param params
 * @returns {Promise}
 */
function putRequest(url,params = {}){
    let fullUrl = sparkUrl + url
    return new Promise((resolve,reject) => {
        axios.put(fullUrl,params)
        .then(response => {
             resolve(response.data)
        },err => {
             reject(err)
        });
    });
}

/**
 *
 * 获取游戏列表
 * @param {*} params
 */
function getGames(params) {
    return postRequest('/games/games_list', params)
}

/**
 *
 * 获取指定游戏的赛事名称
 * @param {*} params
 */
function getGameTournament(params) {
  return postRequest('/tournaments/game_tournaments_list', params)
}

/**
 *
 * 获取热门赛事列表
 * @param {*} params
 */
function getEvents(params) {
  return postRequest('/tournaments/tournaments_list', params)
}

/**
 *
 * 获取搜索战队基本资料
 * @param {*} params
 */
function getSearchTeams(params) {
  return postRequest('/teams/search_team_info', params)
}

/**
 *
 * 获取搜索选手基本资料
 * @param {*} params
 */
function getSearchPlayers(params) {
  return postRequest('/players/search_player_info', params)
}

/**
 * 获取搜索赛事列表
 * @param {*} params
 */
function getSearchTournament(params) {
  return postRequest('/tournaments/search_tournament_info', params)
}

/**
 *
 * 赛事筛选列表
 * @param {*} params
 */
function getScreen(params) {
  return postRequest('/tournaments/screen_list', params)
}

/**
 * 获取选手列表
 * @param {*} params
 */
function getPlayers(params) {
  return getRequest('/players/list', params)
}

/**
 *
 * 获取进行中的比赛列表
 * @param {*} params
 */
function getOnGoing(params) {
  return postRequest('/match/ongoing_match', params)
}

/**
 *
 * 获取未开始的比赛列表
 * @param {*} params
 */
function getUpComning(params) {
  return postRequest('/match/upcoming_match', params)
}

/**
 *
 * 获取已结束的比赛列表
 * @param {*} params
 */
function getPast(params) {
  return postRequest('/match/completed_match', params)
}

/**
 *
 * 获取比赛详情
 * @param {*} params
 * matche_id
 */
function getMatches(params) {
  return postRequest('/match/match_detail', params)
}

/**
 *
 * 获取比赛对局详情
 * @param {*} params
 * battle_id
 */
function getBattles(params) {
  return getRequest('/battles/detail', params)
}

export {
    getGames,
    getGameTournament,
    getEvents,
    getSearchPlayers,
    getSearchTournament,
    getSearchTeams,
    getPlayers,
    getOnGoing,
    getUpComning,
    getPast,
    getBattles,
    getMatches,
    getScreen
}

