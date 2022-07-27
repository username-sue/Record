import request from '@/utils/request'

//获取所有项目
export function getProject() {
    return request({
        url: '/api/project',
        method: 'get',
    })
}


/**
 * 修改项目
 * @param {*} id 给我传一个id
 * @param {*} data 传一个数据数组
 * @returns 
 */
export function setProject(id, data) {
    return request({
        url: `/api/project/${id}`,
        method: 'put',
        data,
    })
}

//新增项目
export function addProject(data) {
    return request({
        url: '/api/project',
        method: 'post',
        data,
    })
}


//删除项目
export function delProject(id) {
    return request({
        url: `/api/project/${id}`,
        method: 'delete',
    })
}
