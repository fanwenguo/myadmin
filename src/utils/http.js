import axios from 'axios';
let instance = axios.create({
    timeout:3000
})
//请求拦截
instance.interceptors.request.use((config)=>{
    console.log(config);
    return config;
},(err)=>{
    return Promise.reject(err);
})
//响应拦截
instance.interceptors.response.use((response)=>{
    console.log(response);
    return response;
},(err)=>{
    return Promise.reject(err);
})
//写成一个vue插件
let httpPlugin = {
    install(Vue){
        Object.defineProperty(Vue.prototype,'$http',{
            value:instance
        })
    }
}
export default httpPlugin;