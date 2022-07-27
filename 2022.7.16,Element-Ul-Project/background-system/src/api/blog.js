import request from '@/utils/request'


/**
 * 分页获取文章
 * @param {*} page 页码数，默认值为1
 * @param {*} limit 页容量，每页显示几条，默认值10
 * @returns 
 */
export function findBlog(page = 1, limit = 10) {
    return request({
        url: '/api/blog',
        method: 'get',
        params: {
            page,
            limit,
        }

    })
}

//删除文章
export function delOneBlog(id) {
    return request({
        url: `/api/blog/${id}`,
        method: 'delete',

    })
}

//发布文章
export function addBlog(data) {
    return request({
        url: '/api/blog',
        method: 'post',
        data,

    })
}


/**
 * 编辑文章
 * @param {*} blogInfo 需要传递一个对象，
 * {
 * id:需要修改的文章id
 * data:修改的文章所有内容
 * }
 */
export function editBlog(blogInfo) {
    return request({
        url: `/api/blog/${blogInfo.id}`,
        method: 'put',
        data: blogInfo.data,

    })
}

//根据id 查找某一篇文章
export function findOneBlog(id) {
    return request({
        url: `/api/blog/${id}`,
        method: 'get',

    })
}
