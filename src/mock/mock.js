import axios from 'axios';
import axiosmockAdapter from 'axios-mock-adapter';
import pagedata from './index';
import menudata from '../../static/server/menu.json';
import orgdata from '../../static/server/org.json';
import menubardata from '../../static/server/menubar.json';
const userinfo = {
    code:0,
    msg:'ok',
    data:{
        name:'ff',
        phone:15234961364,
        yzm:123
    }
}
const phonepwd = Math.floor(Math.random()*10000);
const mailpwd = Math.floor(Math.random()*10000);
const mock = new axiosmockAdapter(axios);
const mockfn = ()=>{
    //请求登录信息
    mock.onPost('/api/login').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,userinfo]);
        })
    })
    //获取手机号登录密码
    mock.onGet('/api/phone').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,phonepwd]);
        })
    })
    //获取邮箱登录密码
    mock.onGet('/api/mail').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,mailpwd]);
        })
    })
    //请求菜单数据
    mock.onGet('/api/menu').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,menudata]);
        })
    })
    mock.onGet('/api/org').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,orgdata]);
        })
    })
    mock.onGet('/api/menubar').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,menubardata]);
        })
    })
    //请求分页数据
    mock.onGet('/api/paging').reply((config)=>{
        const pageIndex = config.pageindex;
        const count = config.count;
        let newArr = [];
        newArr = pagedata.slice((pageIndex - 1) * count, pageIndex * count);
        return new Promise((resolve,reject)=>{
            resolve([200,newArr]);
        })
    })
}
export default mockfn;

