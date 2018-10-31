// 引入axios
import axios from 'axios'
// 设置设置基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'

// 发送登录请求
export const getLogin = obj => axios.post('/login', obj).then(res => res.data)
