import axios from 'axios'
import qs from 'qs'

var instance = axios.create({
    // baseURL: 'https://mtqcshi.hucai.com',
    timeout: 5000,
    headers: { "content-type": "application/json" }
})

/** 定义FormData请求方式 */
instance.requestForm = (url, data) => {
    return instance.post(
        url, 
        qs.stringify(data), /** 使用 FormData 方法时必须对参数进行格式化 */
        {
            headers: { "content-type": "application/x-www-form-urlencoded" }
        }
    )
}

/** 请求拦截器 */
instance.interceptors.request.use(config => {
    return config   /** 必须返回config，否则报错：Cannot read property 'cancelToken' of undefined */
}, err => {
    return Promise.reject(err)
})

/** 响应拦截器 */
instance.interceptors.response.use(response => {
    return Promise.resolve(response.data)
}, err => {
    return Promise.reject(err)
})

export default instance
