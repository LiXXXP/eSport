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
    return getRequest('/games/list', params)
}

/**
 *
 * 获取赛事列表
 * @param {*} params
 */
function getEvents(params) {
  return getRequest('/tournaments/list', params)
}

/**
 *
 * 获取俱乐部列表
 * @param {*} params
 */
function getClubs(params) {
  return getRequest('/organizations/list', params)
}

/**
 * 获取战队列表
 * @param {*} params
 */
function getTeams(params) {
  return getRequest('/teams/list', params)
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
  return getRequest('/matches/ongoing', params)
}

/**
 *
 * 获取未开始的比赛列表
 * @param {*} params
 */
function getUpComning(params) {
  return getRequest('/matches/upcoming', params)
}

/**
 *
 * 获取已结束的比赛列表
 * @param {*} params
 */
function getPast(params) {
  return getRequest('/matches/past', params)
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

/**
 *
 * 获取比赛详情
 * @param {*} params
 * matche_id
 */
function getMatches(params) {
  return getRequest('/matches/detail', params)
}

export {
    getGames,
    getEvents,
    getClubs,
    getTeams,
    getPlayers,
    getOnGoing,
    getUpComning,
    getPast,
    getBattles,
    getMatches
}

