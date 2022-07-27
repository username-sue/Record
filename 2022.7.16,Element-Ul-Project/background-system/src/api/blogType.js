import request from '@/utils/request'

//获取文章分类接口
export function getBlogType() {
    return request({
        url: '/api/blogtype',
        method: 'get',
    })
}

//添加文章分类
export function addBlogType(data) {
    return request({
        url: '/api/blogtype',
        method: 'post',
        data
    })
}

//删除文章分类
export function delBlogType(id) {
    return request({
        url: `/api/blogtype/${id}`,
        method: 'delete',
    })
}

//获取一个文章分类
export function findOneBlogType(id) {
    return request({
        url: `/api/blogtype/${id}`,
        method: 'get',
    })
}

//修改一个文章分类
export function editInfoOneBlogType(editInfo) {
    return request({
        url: `/api/blogtype/${editInfo.id}`,
        method: 'put',
        data: editInfo.data,
    })
}