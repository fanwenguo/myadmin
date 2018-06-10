<template>
  <el-container>
    <el-header>
      <p>e北京电信通企业信息平台</p>
      <span>您好:{{name}}</span>
    </el-header>
    <el-container>
      <el-aside width="200px">
          <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu v-for="(item,index) in menudata" :index="index+'1'" :key="index">
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
            <el-menu-item v-for="(i,ind) in item.submenus" :index="index+'-'+ind" :key="ind">
              <router-link :to="{name:i.type}">{{i.name}}</router-link>
            </el-menu-item>
        </el-submenu>
      </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import axios from 'axios';
import {mapState,mapActions} from 'vuex';
export default {
  name: "",
  data() {
    return {
      name:''
    };
  },
  computed:{
    ...mapState(['menudata'])
  },
  mounted(){
    this.getmenudata_A();
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    //console.log(user.name);
    this.name = user.name;
  },
  methods: {
    handleOpen(key, keyPath) {
     
    },
    handleClose(key, keyPath) {
      
    },
    ...mapActions(['getmenudata_A'])
  }
};
</script>
<style scoped src="./home.css">
</style>

