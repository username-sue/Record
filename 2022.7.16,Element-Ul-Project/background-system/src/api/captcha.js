import request from '@/utils/request'
//验证码，图片验证
export function getCaptcha() {
    return request({
        url: '/res/captcha',
        method: 'get',
    })
}