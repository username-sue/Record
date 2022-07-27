import request from '@/utils/request'

//获取关于页面的URL地址
export function getAbout() {
    return request({
        url: '/api/about',
        method: 'get',
    })
}

//设置关于页面的URL地址
export function editAbout(data) {
    return request({
        url: '/api/about',
        method: 'post',
        data,
    })
}
