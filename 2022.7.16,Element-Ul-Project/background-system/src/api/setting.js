import request from '@/utils/request'

//获取全局配置
export function getSetting() {
    return request({
        url: '/api/setting',
        method: 'get',
    })
}


/**
 * 修改全局配置
 *给我传一个对象
 * {
    "qq": "3263023350", // 博主 qq
    "mail": "3263023350@qq.com"
}
 */
export function setSetting(data) {
    return request({
        url: '/api/setting',
        method: 'put',
        data,
    })
}
