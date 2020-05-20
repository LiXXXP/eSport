'use strict';

let environmentVar = '';
let sparkUrlVar = '';// 接口地址
let basePathVar = '';// history模式下的路径后缀
let gotoUrlDefault = 'http://esportlivescore.cn'; // 默认goto路径

environmentVar = '联调';
// environmentVar = '测试';
// environmentVar = '线上';

if(environmentVar === '联调') {
    sparkUrlVar = '';
    basePathVar = '/';
} else if(environmentVar === '测试') {
    sparkUrlVar = '';
    basePathVar = '/';
} else if(environmentVar === '线上') {
    sparkUrlVar = '';
    basePathVar = '/';
}

export const sparkUrl = sparkUrlVar;
export const BASE_PATH = basePathVar;
export const defaultUrl = gotoUrlDefault;


