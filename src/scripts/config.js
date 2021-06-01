'use strict';

let environmentVar = ''
let sparkUrlVar = '' // 接口地址
let basePathVar = '' // history模式下的路径后缀

environmentVar = '开发'

if(environmentVar === '开发') {
    sparkUrlVar = 'https://api.esportlivescore.cn/els'
    basePathVar = '/'
}

export const sparkUrl = sparkUrlVar
export const BASE_PATH = basePathVar


