'use strict';

let environmentVar = ''
let sparkUrlVar = '' // 接口地址
let basePathVar = '' // history模式下的路径后缀

environmentVar = '开发'
// environmentVar = '测试'
// environmentVar = '线上'

if(environmentVar === '开发') {
    sparkUrlVar = 'http://59.110.6.209/v1'
    basePathVar = '/'
} else if(environmentVar === '测试') {
    sparkUrlVar = ''
    basePathVar = '/'
} else if(environmentVar === '正式') {
    sparkUrlVar = ''
    basePathVar = '/'
}

export const sparkUrl = sparkUrlVar
export const BASE_PATH = basePathVar


