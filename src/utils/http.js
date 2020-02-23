import axios from 'axios'

var instance = axios.create({
    baseURL: 'https://www.test.com',
    timeout: 5000,
    headers: { "content-type": "application/json" }
})

/** 请求拦截器 */
instance.interceptors.request.use(config => {
    console.log(config)
}, err => {
    return Promise.reject(err)
})

/** 响应拦截器 */
instance.interceptors.response.use(response => {
    console.log(response)
}, err => {
    return Promise.reject(err)
})

export default instance
