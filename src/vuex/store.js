import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        menudata: [],
        orgdata:[],
        menubardata:[]
    },
    actions: {
        getmenudata_A({ commit }) {
            //请求导航数据
            axios.get('/api/menu').then((res) => {
                //console.log(res.data.data)
                //this.menudata = res.data.data;
                commit('getmenudata_M',res.data.data)
            })
            
        },
        getorg_A({commit}){
            //请求组织数据
            axios.get('/api/org').then((res) => {
                commit('getorg_M',res.data.data)
            })
        },
        getmenubardata_A({commit}){
            axios.get('/api/menubar').then((res) => {
                //console.log(res.data);
                commit('getmenubardata_M',res.data.date)
            })
        }
    },
    mutations: {//唯一更新state的方法
        getmenudata_M(state,data){
            state.menudata = data;
        },
        getorg_M(state,data){
            state.orgdata = data;
        },
        getmenubardata_M(state,data){
            //console.log(data);
            state.menubardata = data;
        }
    },
    getters: {

    }
})
export default store;
//store上提供了一个方法来粗发action

